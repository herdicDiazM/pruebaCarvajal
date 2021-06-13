using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BackendPelicula.Model
{
    public class usuario
    {
        [Key]
        public string usuario_nombre { get; set; }
        [Required]
        public string usuario_password { get; set; }
        [Required]
        public string usuario_rol { get; set; }
    }
}
