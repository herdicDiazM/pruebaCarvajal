using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendPelicula.Model
{
    public class sala
    {
        [Key]
        public int sala_id { get; set; }
        [Required]
        public string sala_nombre { get; set; }
        [Required]
        public string sala_descripcion { get; set; }
    }
}
