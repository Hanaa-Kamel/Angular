using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Appclient.Identity
{
    public class ApplicationDbContect:IdentityDbContext
    {
        public ApplicationDbContect() : base("Data Source=.;Initial Catalog=Kahreedo;Integrated Security=True;")
        {

        }
    }
}