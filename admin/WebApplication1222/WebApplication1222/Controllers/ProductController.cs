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
    public class ProductController : ApiController
    {
        private KahreedoEntities1 db = new KahreedoEntities1();

        // GET: api/Product
        public IQueryable<Product> GetProducts()
        {
            return db.Products;
        }
        public List<Product> GetProducts(int id)
        {
            return db.Products.Where(p=>p.CategoryID==id).ToList();
        }
        
        public Product GetProductbyID(int id)
        {
            return db.Products.Where(p => p.ProductID == id).FirstOrDefault();
        }
        // GET: api/Product/5
        //[ResponseType(typeof(Product))]
        //public IHttpActionResult GetProduct(int id)
        //{
        //    Product product = db.Products.Find(id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }

        //    return Ok(product);
        //}

        // PUT: api/Product/5
        [ResponseType(typeof(void))]
        public bool PutProduct(int id, Product product)
        {
            Product prod = db.Products.Where(p => p.ProductID == id).FirstOrDefault();
            if (prod == null || product==null)
            {
                return false;
            }
            else
            {
                prod.Name = product.Name;
                prod.UnitPrice = product.UnitPrice;
                prod.CategoryID = product.CategoryID;
                prod.SupplierID = product.SupplierID;
                prod.QuantityPerUnit = product.QuantityPerUnit;
                //prod.
                db.SaveChanges();

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
        public Boolean DeleteProduct(int id)
        {
            Product product = db.Products.Find(id);
            if (product == null)
            {
                return false;
            }

            db.Products.Remove(product);
            db.SaveChanges();

            return true;
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