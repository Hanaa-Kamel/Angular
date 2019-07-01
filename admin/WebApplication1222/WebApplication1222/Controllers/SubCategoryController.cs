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
    public class SubCategoryController : ApiController
    {
        private KahreedoEntities1 db = new KahreedoEntities1();

        // GET: api/SubCategory/GetSubCategorybycatID
        public IQueryable<SubCategory> GetSubCategories()
        {
            return db.SubCategories;
        }
        public List<SubCategory> GetSubCategorybycatID(int id)
        {
            return db.SubCategories.Where(s => s.CategoryID == id).ToList();
        }
        // GET: api/SubCategory/5
        [ResponseType(typeof(SubCategory))]
        public IHttpActionResult GetSubCategory(int id)
        {
            SubCategory subCategory = db.SubCategories.Find(id);
            if (subCategory == null)
            {
                return NotFound();
            }

            return Ok(subCategory);
        }

        // PUT: api/SubCategory/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSubCategory(int id, SubCategory subCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != subCategory.SubCategoryID)
            {
                return BadRequest();
            }

            db.Entry(subCategory).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubCategoryExists(id))
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

        // POST: api/SubCategory
        [ResponseType(typeof(SubCategory))]
        public IHttpActionResult PostSubCategory(SubCategory subCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SubCategories.Add(subCategory);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = subCategory.SubCategoryID }, subCategory);
        }

        // DELETE: api/SubCategory/5
        [ResponseType(typeof(SubCategory))]
        public IHttpActionResult DeleteSubCategory(int id)
        {
            SubCategory subCategory = db.SubCategories.Find(id);
            if (subCategory == null)
            {
                return NotFound();
            }

            db.SubCategories.Remove(subCategory);
            db.SaveChanges();

            return Ok(subCategory);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SubCategoryExists(int id)
        {
            return db.SubCategories.Count(e => e.SubCategoryID == id) > 0;
        }
    }
}