import React, { useState, useEffect } from 'react';
import { Vagon } from './Vagon';

const Tren = () => {
    const [vagones, setVagones] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [tren, setTren] = useState([]);

    useEffect(() => {
        getTren();
    }, [tren]);

    useEffect(() => {
        getVagones();
    }, [tren]);

    const getVagones = async () => {
        const response = await fetch('api/tren/getVagones', { method: 'GET' });
        if (response.ok) {
            const data = await response.json();
            setVagones(data);
            setLoading(false);
        } else {
            console.log("Response Error")
        }
    }

    const getTren = async () => {
        const response = await fetch('api/tren/getTren', { method: 'GET' });
        if (response.ok) {
            const data = await response.json();
            setTren(data);
            setLoading(false);
        } else {
            console.log("Response Error")
        }
    }

    const agregarVagonIzquierda = vagonId => {
        console.log(vagonId)
        fetch(`/api/tren/addIzq/${vagonId}`, { method: 'POST' })
            .then(response => response.json())
            .then(data => setTren(data))
            .catch(error => setError(true));
    };

    const agregarVagonDerecha = vagonId => {
        fetch(`/api/tren/addDer/${vagonId}`, { method: 'POST' })
            .then(response => response.json())
            .then(data => setTren(data))
            .catch(error => setError(true));
    };

    const quitarVagon = vagonId => {
        fetch(`/api/tren/${vagonId}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => setTren(data))
            .catch(error => setError(true));
    };

    return (
    <div className="tren">
            <div className="vagones">
                VAGONES:
                {error && <div className="text-danger">Ha ocurrido un error al intentar obtener los datos.</div>}

        {
        loading ? <div data-testid="vagoneslist">Cargando vagones...</div>
        :
        vagones.map(vagon => 
        (
            <Vagon key={vagon.id}
                vagon={vagon}
                addIzq={agregarVagonIzquierda}
                addDer={agregarVagonDerecha}
                esTren={false}
            ></Vagon>
            )
        )}
            </div>
            <div>TREN:</div>
            <div className="d-flex">
                {
                    loading ? <div data-testid="trenlist">Cargando tren...</div>
                        :
                        tren.map(vagon =>
                        (
                            <Vagon key={vagon.id}
                                vagon={vagon}
                                delete={quitarVagon}
                                esTren={true}
                            ></Vagon>
                        )
                        )}
            </div>
    </div>
);
};

export default Tren;