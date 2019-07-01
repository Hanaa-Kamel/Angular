export class Order {
    
    public  OrderID:number;
    public  CustomerID:number;
    public  PaymentID?:number;
    public  ShippingID?:number;
    public  Discount?:number;
    public  Taxes?:number;
    public  TotalAmount?:number;
    // public Nullable<bool> isCompleted { get; set; }
     public  OrderDate?:Date;
    // public Nullable<bool> DIspatched { get; set; }
    // public Nullable<System.DateTime> DispatchedDate { get; set; }
    // public Nullable<bool> Shipped { get; set; }
    // public Nullable<System.DateTime> ShippingDate { get; set; }
    // public Nullable<bool> Deliver { get; set; }
    // public Nullable<System.DateTime> DeliveryDate { get; set; }
     public  Notes:string;
    // public Nullable<bool> CancelOrder { get; set; }
    constructor()
    {
        this.OrderID=0;
        this.CustomerID=0;
        this.PaymentID=0;
        this.ShippingID=0;
        this.Discount=0;
        this.Taxes=0;
        this.TotalAmount=0;
        this.OrderDate=new Date();
        this.Notes='';
    }
}
