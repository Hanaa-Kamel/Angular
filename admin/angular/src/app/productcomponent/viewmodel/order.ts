export class Order {
        public  OrderID:number; 
        public  CustomerID :number;
        public  ShippingID?:number; 
        public  Discount?:number; 
        public  Taxes?:number 
        public  TotalAmount?:number; 
        public  isCompleted?:boolean; 
        public  OrderDate?:Date; 
        public  DIspatched?:boolean;
        public  DispatchedDate?:Date; 
        public  Shipped?:boolean; 
        public  ShippingDate?:Date; 
        public  Deliver?:boolean; 
        public  DeliveryDate?:Date;
        public  Notes?:string;
        public  CancelOrder?:boolean; 
}
