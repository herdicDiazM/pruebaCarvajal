using BackendPelicula.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendPelicula
{
    public class AplicationDBContext:DbContext
    {
        public DbSet<usuario> usuario { get; set; }
        public DbSet<sala> sala { get; set; }
        public DbSet<pelicula> pelicula { get; set; }


        public AplicationDBContext(DbContextOptions<AplicationDBContext> options) : base(options)
        {

        }
    }
}
