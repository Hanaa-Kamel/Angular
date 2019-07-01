export class Product {
    
        public  ProductID :number;
        public  Name :string;
        //public int SupplierID { get; set; }
        public  CategoryID :number;
        public  SubCategoryID?:number;
        public  QuantityPerUnit:string;
        public  UnitPrice:number;
        //public Nullable<decimal> OldPrice { get; set; }
        public  UnitWeight :string;
        public  Size :string;
        public  Discount?:number;
        public  UnitInStock?:number;
        //public Nullable<int> UnitOnOrder { get; set; }
        public  ProductAvailable :boolean;
        public  ImageURL:string;
        public  AltText:string;
        //public Nullable<bool> AddBadge { get; set; }
        public  OfferTitle :string;
        public OfferBadgeClass :string;
        public  ShortDescription :string;
        public  LongDescription :string;
        public  Picture1:string;
        public Picture2:string;
        public  Picture3 :string;
        public  Picture4 :string;
        public  Note :string;
        public Totalprice:number;
        constructor(){
            this.ProductID=1;
            this.Name='';
            this.CategoryID=1;
            this.SubCategoryID=1;
            this.UnitPrice=0;
            this.ProductAvailable=false;
            this.UnitInStock=2;
            this.Totalprice=0;
            this.QuantityPerUnit='';
            this.Discount=0;
            this.UnitWeight='';
            this.Size='';
            this.ImageURL='';
            this.AltText='';
            this.OfferTitle='';
            this.OfferBadgeClass='';
            this.ShortDescription='';
            this.LongDescription='';
            this.Picture1='';
            this.Picture2='';
            this.Picture3='';
            this.Picture4='';
            this.Picture1='';
            this.Note='';
        }
    }
    

