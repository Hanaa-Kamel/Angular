export class Category {
    
    public  CategoryID:number;
    public  Name:string;
    public  Description:string;
    public  Picture1 :string;
    public  Picture2 :string;
    public  IsActive?:boolean;

    constructor()
    {
        this.CategoryID=1;
        this.Name='';
        this.Description='';
        this.Picture1='';
        this.Picture2='';
        this.IsActive=false;
    }
}
