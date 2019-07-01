export class OrderDetail {
    
    public  OrderDetailsID :number;
    public  OrderID :number;
    public  ProductID :number;
    public  UnitPrice?:number;
    public  Quantity?:number;
    public  Discount?:number;
    public  TotalAmount?:number;
    public  OrderDate?:Date;

    constructor()
    {
        this.OrderDetailsID=0;
        this.OrderID=0;
        this.ProductID=0;
        this.UnitPrice=0;
        this.Quantity=0;
        this.Discount=0;
        this.TotalAmount=0;
        this.OrderDate=new Date();
    }
}
