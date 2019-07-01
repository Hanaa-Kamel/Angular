export class AdminLogin {
    
    public  LoginID :number;
    public  EmpID :number;
    public  UserName :string;
    public  Password :string;
    public  RoleType?:number;
    public  Notes :string;

    constructor()
    {
        this.LoginID=0;
        this.EmpID=0;
        this.Password='';
        this.UserName='';
        this.RoleType=0;
        this.Notes='';

    }
}
