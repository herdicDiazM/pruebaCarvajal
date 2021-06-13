using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendPelicula.Model
{
    public class pelicula
    {
        [Key]
        public int pelicula_codigo { get; set; }
        [Required]
        public string pelicula_nombre { get; set; }
        [Required]
        public string pelicula_descripcion { get; set; }
        public string pelicula_imagen { get; set; }
        [Required]
        public string pelicula_horario { get; set; }
        [Required]
        public int sala_id { get; set; }
    }
}
