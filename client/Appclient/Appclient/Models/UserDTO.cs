using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Appclient.Models
{
    public class UserDTO
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public string Password { get; set; }
        [Compare("Password")]
        public string Confirm { get; set; }
        public string Email { get; set; }
    }
}