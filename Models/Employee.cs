using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRProj.Models
{
    public class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int EmpId { get; set; }
        public string EmpCode { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
