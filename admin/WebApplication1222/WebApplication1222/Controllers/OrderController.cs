using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1222.Models;

namespace WebApplication1222.Controllers
{
    public class OrderController : ApiController
    {
        KahreedoEntities1 db = new KahreedoEntities1();
        public List<Order> Get()
        {
            return db.Orders.ToList();
        }
        public Order Get(int id)
        {
            return db.Orders.Where(o=>o.OrderID==id).FirstOrDefault();
        }
        public bool Delete(int id)
        {
            
            Order order= db.Orders.Where(o => o.OrderID == id).FirstOrDefault();
            if(order!=null)
            {
                db.Orders.Remove(order);
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public bool post(Order order)
        {
            Order or = db.Orders.Where(o => o.OrderID == order.OrderID && o.CustomerID==order.CustomerID).FirstOrDefault();
            if (order != null  && or==null)
            {
               
                db.Orders.Add(order);
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public bool put(int ID,Order order)
        {
            Order ord = db.Orders.Where(o => o.OrderID == ID).FirstOrDefault();
            if (order != null && ord !=null)
            {
                ord.CancelOrder = order.CancelOrder;
                ord.CustomerID = order.CustomerID;
                ord.Deliver = order.Deliver;
                ord.DeliveryDate = order.DeliveryDate;
                ord.Discount = order.Discount;
                ord.Notes = order.Notes;
                
                db.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
