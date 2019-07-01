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
    public class CategoyController : ApiController
    {
        private KahreedoEntities1 db = new KahreedoEntities1();

        // GET: api/Categoy
        public IQueryable<Category> GetCategories()
        {
            return db.Categories;
        }

        // GET: api/Categoy/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult GetCategory(int id)
        {
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // PUT: api/Categoy/5
        [ResponseType(typeof(void))]
        public bool PutCategory(int id, Category category)
        {
            Category cat = db.Categories.Where(p => p.CategoryID == id).FirstOrDefault();
            if (cat == null || category == null)
            {
                return false;
            }
            else
            {
                cat.Name = category.Name;
                cat.Description = category.Description;
                cat.isActive = category.isActive;
               
                db.SaveChanges();

                return true;
            }
        }

        // POST: api/Categoy
        [ResponseType(typeof(Category))]
        public IHttpActionResult PostCategory(Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Categories.Add(category);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = category.CategoryID }, category);
        }

        // DELETE: api/Categoy/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult DeleteCategory(int id)
        {
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return NotFound();
            }

            db.Categories.Remove(category);
            db.SaveChanges();

            return Ok(category);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoryExists(int id)
        {
            return db.Categories.Count(e => e.CategoryID == id) > 0;
        }
    }
}