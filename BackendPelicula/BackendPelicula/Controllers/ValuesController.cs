using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendPelicula.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BackendPelicula.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private AplicationDBContext _context;
        public ValuesController(AplicationDBContext context)
        {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        #region Login
        [HttpGet("Usuarios")]
        public async Task<ActionResult> Usuarios()
        {
            try
            {
                var usuarios = await _context.usuario.ToListAsync();
                return Ok(usuarios);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [Route("Usuario/{id}")]
        [HttpGet]
        public async Task<ActionResult> Usuario(string id)
        {

            try
            {
                var usuarios = await _context.usuario.FindAsync(id);
                if (usuarios != null)
                {
                    return Ok(usuarios);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        #endregion

        #region Sala
        [HttpGet("Salas")]
        public async Task<ActionResult> Salas()
        {
            try
            {
                var sala = await _context.sala.ToListAsync();
                return Ok(sala);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        #endregion

        #region Peliculas
        [Route("Peliculas/{id}")]
        [HttpGet]
        public async Task<ActionResult> Peliculas(string id)
        {
            try
            {
                var peliculas = await _context.pelicula.Where(x => x.sala_id == Convert.ToInt32(id)).ToListAsync();
                return Ok(peliculas);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [HttpGet("PeliculasAll")]
        public async Task<ActionResult> PeliculasAll()
        {
            try
            {
                var peliculas = await _context.pelicula.ToListAsync();
                return Ok(peliculas);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [Route("Pelicula/{id}")]
        [HttpGet]
        public async Task<ActionResult> Pelicula(int id)
        {
            try
            {
                var pelicula = await _context.pelicula.FindAsync(id);
                return Ok(pelicula);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }

        [Route("GuardaPelicula")]
        [HttpPost]
        public async Task<ActionResult> GuardaPelicula([FromBody] pelicula datos)
        {
            _context.Add(datos);
            await _context.SaveChangesAsync();
            return Ok(new { message="ok"});
        }

        [Route("ActualizaPelicula/{id}")]
        [HttpPut]
        public async Task<ActionResult> ActualizaPelicula(int id, [FromBody] pelicula datos)
        {
            if (id != datos.pelicula_codigo)
            {
                return BadRequest();
            }
            _context.Update(datos);
            _context.SaveChanges();
            return Ok(new { message = "ok" });
        }

        [HttpDelete("EliminaPelicula/{id}")]
        public async Task<ActionResult> EliminaPelicula(int id)
        {
            var peli = await _context.pelicula.FindAsync(id);
            if (peli == null)
            {
                return NotFound();
            }
            else
            {
                _context.pelicula.Remove(peli);
                await _context.SaveChangesAsync();
                return Ok(new { message = "ok" });

            }
        }

        [Route("PeliculasHorario/{id}")]
        [HttpGet]
        public async Task<ActionResult> PeliculasHorario(string id)
        {
            try
            {
                var peliculas = await _context.pelicula.Where(x => x.pelicula_horario == id).ToListAsync();
                return Ok(peliculas);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
        #endregion
    }
}
