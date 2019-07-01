using Appclient.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Appclient.Controllers
{
    public class AccountController : ApiController
    {
        //you must install identity owin and owin self owin hosting
        public IHttpActionResult Post(UserDTO userdto)
        {
            if (ModelState.IsValid == false)
                return BadRequest(ModelState);

            AuthBL repos = new AuthBL();
            IdentityResult result = repos.Create(userdto);

            if (result.Succeeded)
                return Created("", "Created");

            return BadRequest(result.Errors.FirstOrDefault());
        }
    }
}
