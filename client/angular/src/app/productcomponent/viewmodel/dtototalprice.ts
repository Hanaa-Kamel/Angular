export class DTOtotalprice {
    public  ProductID? :number;
    public  AvailableQuantity?:number;
    public  NeedQuantity?:number;
    public  Price?:number;

    constructor()
    {
        this.ProductID=0;
        this.Price=0;
        this.NeedQuantity=0;
        this.AvailableQuantity=0;
    }
}
