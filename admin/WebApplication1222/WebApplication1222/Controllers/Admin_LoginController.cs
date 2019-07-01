using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApplication1222.Models;

namespace WebApplication1222.Controllers
{
    public class Admin_LoginController : ApiController
    {
        private KahreedoEntities1 db = new KahreedoEntities1();

        // GET: api/Admin_Login
        public IQueryable<admin_Login> Getadmin_Logins()
        {
            return db.admin_Login;
        }

        // GET: api/Admin_Login/5
        [ResponseType(typeof(admin_Login))]
        public IHttpActionResult Getadmin_Login(int id)
        {
            admin_Login admin_Login = db.admin_Login.Find(id);
            if (admin_Login == null)
            {
                return NotFound();
            }

            return Ok(admin_Login);
        }

        // PUT: api/Admin_Login/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putadmin_Login(int id, admin_Login admin_Login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != admin_Login.LoginID)
            {
                return BadRequest();
            }

            db.Entry(admin_Login).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!admin_LoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Admin_Login
        [ResponseType(typeof(admin_Login))]
        public IHttpActionResult Postadmin_Login(admin_Login admin_Login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.admin_Login.Add(admin_Login);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = admin_Login.LoginID }, admin_Login);
        }

        // DELETE: api/Admin_Login/5
        [ResponseType(typeof(admin_Login))]
        public IHttpActionResult Deleteadmin_Login(int id)
        {
            admin_Login admin_Login = db.admin_Login.Find(id);
            if (admin_Login == null)
            {
                return NotFound();
            }

            db.admin_Login.Remove(admin_Login);
            db.SaveChanges();

            return Ok(admin_Login);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool admin_LoginExists(int id)
        {
            return db.admin_Login.Count(e => e.LoginID == id) > 0;
        }
    }
}