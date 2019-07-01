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
using Appclient.Models;

namespace Appclient.Controllers
{
    public class admin_EmployeeController : ApiController
    {
        private KahreedoEntities db = new KahreedoEntities();

        // GET: api/admin_Employee
        public IQueryable<admin_Employee> Getadmin_Employee()
        {
            return db.admin_Employee;
        }

        // GET: api/admin_Employee/5
        [ResponseType(typeof(admin_Employee))]
        public IHttpActionResult Getadmin_Employee(int id)
        {
            admin_Employee admin_Employee = db.admin_Employee.Find(id);
            if (admin_Employee == null)
            {
                return NotFound();
            }

            return Ok(admin_Employee);
        }

        // PUT: api/admin_Employee/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putadmin_Employee(int id, admin_Employee admin_Employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != admin_Employee.EmpID)
            {
                return BadRequest();
            }

            db.Entry(admin_Employee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!admin_EmployeeExists(id))
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

        // POST: api/admin_Employee
        [ResponseType(typeof(admin_Employee))]
        public IHttpActionResult Postadmin_Employee(admin_Employee admin_Employee)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.admin_Employee.Add(admin_Employee);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = admin_Employee.EmpID }, admin_Employee);
        }

        // DELETE: api/admin_Employee/5
        [ResponseType(typeof(admin_Employee))]
        public IHttpActionResult Deleteadmin_Employee(int id)
        {
            admin_Employee admin_Employee = db.admin_Employee.Find(id);
            if (admin_Employee == null)
            {
                return NotFound();
            }

            db.admin_Employee.Remove(admin_Employee);
            db.SaveChanges();

            return Ok(admin_Employee);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool admin_EmployeeExists(int id)
        {
            return db.admin_Employee.Count(e => e.EmpID == id) > 0;
        }
    }
}