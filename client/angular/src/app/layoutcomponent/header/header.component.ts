import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/productcomponent/viewmodel/user';
import { LocalstorageloginService } from 'src/app/ordercomponent/services/localstoragelogin.service';
import { InteractionService } from 'src/app/ordercomponent/services/interaction.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
user :User;
emptyuser:User;
  constructor(private localstoragelogin:LocalstorageloginService,
    private interactionservice:InteractionService) { 
    this.user=new User();
    this.user.Email="asd";
    this.emptyuser=new User();
    this.user=this.localstoragelogin.retrivefromLocalStoragelogin();
    // this.user.Email="";
  }

  ngOnInit() {
    
    this.interactionservice.loginemail$.subscribe(lg=>{this.user.Email=lg;});
    this.user=this.localstoragelogin.retrivefromLocalStoragelogin();
    
  }
  logout()
  {
    this.emptyuser.Email='';
    this.emptyuser.Password='';
    this.localstoragelogin.storeOnLocalStoragelogin(this.emptyuser);
   //this.localstoragelogin.clearLocalStoragelogin();
  }
}
