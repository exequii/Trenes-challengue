using Entidades.Entidades;
using Microsoft.AspNetCore.Mvc;

namespace Trenes_challengue.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TrenController : ControllerBase
    {
        public static List<Vagon> _vagones = new List<Vagon>() {
            new Vagon() { Id = 1 , Number = 1 } ,
            new Vagon() { Id = 2 , Number = 2 } ,
            new Vagon() { Id = 3 , Number = 3 } ,
            new Vagon() { Id = 4 , Number = 4 } ,
        };

        public static List<Vagon> _tren = new List<Vagon>() { };

        [HttpGet]
        [Route("getVagones")]
        public IEnumerable<Vagon> GetVagones()
        {
            return _vagones;
        }

        [HttpGet]
        [Route("getTren")]
        public IEnumerable<Vagon> GetTren()
        {
            return _tren;
        }

        [HttpPost("addIzq/{id}")]
        public IEnumerable<Vagon> AddIzquierda(int id)
        {
            var vagonAgregar = _vagones.FirstOrDefault(vagon => vagon.Id == id);
            if (vagonAgregar == null)
            {
                return _tren;
            }
            AgregarVagonIzquierda(ref _tren, vagonAgregar);
            ActualizarVagones(ref _vagones, id);
            return _tren;
        }

        [HttpPost("addDer/{id}")]
        public IEnumerable<Vagon> AddDerecha(int id)
        {
            var vagonAgregar = _vagones.FirstOrDefault(vagon => vagon.Id == id);
            if (vagonAgregar == null)
            {
                return _tren;
            }
            AgregarVagonDerecha(ref _tren, vagonAgregar);
            ActualizarVagones(ref _vagones, id);
            return _tren;
        }

        [HttpDelete("{id}")]
        public IEnumerable<Vagon> DeleteVagon(int id)
        {
            var vagon = _tren.FirstOrDefault(vagon => vagon.Id == id);

            if (vagon == null)
            {
                return _tren;
            }

            ActualizarVagones(ref _tren, id);
            AgregarVagonDerecha(ref _vagones, vagon);
            return _tren;
        }

        private void AgregarVagonIzquierda(ref List<Vagon> tren, Vagon vagonAgregar)
        {
            tren.Insert(0, vagonAgregar);
        }

        private void AgregarVagonDerecha(ref List<Vagon> tren, Vagon vagonAgregar)
        {
            tren.Add(vagonAgregar);
        }

        private void ActualizarVagones(ref List<Vagon> vagones, int id)
        {
            vagones.RemoveAll(vagon => vagon.Id == id);
        }

    }
}

