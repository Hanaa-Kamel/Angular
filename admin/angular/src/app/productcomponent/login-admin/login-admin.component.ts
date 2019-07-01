import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminLogin } from '../viewmodel/admin-login';
import { AdminLoginService } from 'src/app/ordercomponent/services/admin-login.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
listofadminlogin:AdminLogin[];
adminlogin:AdminLogin;
userName:string;
passWord:string;
  constructor(private router:Router,private activatedrouter:ActivatedRoute,
    private adminservice:AdminLoginService) { 
    this.listofadminlogin=[];
    this.adminlogin=new AdminLogin();
    this.userName='';
    this.passWord='';
  }
  saveadmin()
  {
  const adm=this.listofadminlogin.find(a=>a.UserName==this.adminlogin.UserName && a.Password==this.adminlogin.Password);
   if(adm !=null)
   {
    this.router.navigate(['/orders']);
   }
   else
   {
     alert("not correct");
   }
  }
  ngOnInit() {
    this.adminservice.getAllAdmin().subscribe(a=>{this.listofadminlogin=a;console.log(a);});
  }

}
