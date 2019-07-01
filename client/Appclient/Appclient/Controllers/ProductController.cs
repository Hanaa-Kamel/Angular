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
    public class ProductController : ApiController
    {
        private KahreedoEntities db = new KahreedoEntities();

        // GET: api/Product
        public IQueryable<Product> GetProducts()
        {
            return db.Products;
        }
        public List<Product> GetProductsbycatName(string Name)
        {
            int catid = db.Categories.Where(c => c.Name == Name).Select(c=>c.CategoryID).FirstOrDefault();

            return db.Products.Where(c=>c.CategoryID==catid).ToList();
        }
        public List<Product> GetProductsbycatID(int id)
        {
           // int catid = db.Categories.Where(c => c.Name == Name).Select(c => c.CategoryID).FirstOrDefault();

            return db.Products.Where(c => c.CategoryID == id).ToList();
        }
        // GET: api/Product/5
        [ResponseType(typeof(Product))]
        public Product GetProductbyID(int id)
        {
           return  db.Products.Where(p=>p.ProductID==id).FirstOrDefault();
        
        }

        // PUT: api/Product/5
        [ResponseType(typeof(void))]
        public bool PutProduct(int id, Product product)
        {
            Product prod = db.Products.Where(p => p.ProductID == id).FirstOrDefault();
            if(prod==null || product==null)
            {
                return false;
            }
            else
            {
                prod.UnitInStock = product.UnitInStock;
                prod.Name = product.Name;
                prod.UnitPrice = product.UnitPrice;
                prod.CategoryID = product.CategoryID;
                prod.QuantityPerUnit = product.QuantityPerUnit;
                prod.Discount = product.Discount;

                return true;
            }
        }

        // POST: api/Product
        [ResponseType(typeof(Product))]
        public IHttpActionResult PostProduct(Product product)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Products.Add(product);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = product.ProductID }, product);
        }

        // DELETE: api/Product/5
        [ResponseType(typeof(Product))]
        public IHttpActionResult DeleteProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return NotFound();
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return Ok(product);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductExists(int id)
        {
            return db.Products.Count(e => e.ProductID == id) > 0;
        }
    }
}