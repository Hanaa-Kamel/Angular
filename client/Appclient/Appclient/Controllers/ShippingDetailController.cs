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
    public class ShippingDetailController : ApiController
    {
        private KahreedoEntities db = new KahreedoEntities();

        // GET: api/ShippingDetail
        public IQueryable<ShippingDetail> GetShippingDetails()
        {
            return db.ShippingDetails;
        }

        // GET: api/ShippingDetail/5
        [ResponseType(typeof(ShippingDetail))]
        public IHttpActionResult GetShippingDetail(int id)
        {
            ShippingDetail shippingDetail = db.ShippingDetails.Find(id);
            if (shippingDetail == null)
            {
                return NotFound();
            }

            return Ok(shippingDetail);
        }

        // PUT: api/ShippingDetail/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutShippingDetail(int id, ShippingDetail shippingDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != shippingDetail.ShippingID)
            {
                return BadRequest();
            }

            db.Entry(shippingDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ShippingDetailExists(id))
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

        // POST: api/ShippingDetail
        [ResponseType(typeof(ShippingDetail))]
        public IHttpActionResult PostShippingDetail(ShippingDetail shippingDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ShippingDetails.Add(shippingDetail);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ShippingDetailExists(shippingDetail.ShippingID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = shippingDetail.ShippingID }, shippingDetail);
        }

        // DELETE: api/ShippingDetail/5
        [ResponseType(typeof(ShippingDetail))]
        public IHttpActionResult DeleteShippingDetail(int id)
        {
            ShippingDetail shippingDetail = db.ShippingDetails.Find(id);
            if (shippingDetail == null)
            {
                return NotFound();
            }

            db.ShippingDetails.Remove(shippingDetail);
            db.SaveChanges();

            return Ok(shippingDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ShippingDetailExists(int id)
        {
            return db.ShippingDetails.Count(e => e.ShippingID == id) > 0;
        }
    }
}