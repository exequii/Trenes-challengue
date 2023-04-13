import React from 'react'

export const Vagon = (props) => {
    return (
        <div
            key={props.vagon.id}
            className={props.esTren ? "" : "d-flex justify-content-around"}
            data-testid="vagon"
        >
            <div className="bg-black text-white text-center border" style={{ width: 60 }}>{props.vagon.number}</div>
        <div className="acciones mb-2">
                {props.addIzq ?
                    <button onClick={() => props.addIzq(props.vagon.id)}>Agregar a la izquierda</button>
                    : <></>
                }
                {props.addDer ?
                    <button onClick={() => props.addDer(props.vagon.id)}>Agregar a la derecha</button>
                    : <></>
                }
                {
                    props.delete ?
                        <button onClick={() => props.delete(props.vagon.id)}>Quitar</button>
                        : <></>
                }
        </div>
        </div>
    );
}
