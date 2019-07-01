import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/productcomponent/viewmodel/user';
import { LocalstorageloginService } from '../services/localstoragelogin.service';
import { InteractionService } from '../services/interaction.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {
user:User;
  constructor(private localstoragelogin:LocalstorageloginService,private interactionservice:InteractionService,
    private activatedservice:ActivatedRoute,private location:Location,private router:Router) { 
    this.user=new User();
  }
  saveuser()
  {
    this.localstoragelogin.storeOnLocalStoragelogin(this.user);
    this.interactionservice.sendlogin(this.user.Email);
    
    this.router.navigate(['/Productsbycatid',1]);
  }
  ngOnInit() {
   
  }
  goBack()
  {
    this.location.back();
  }
  //
  // formModel = {
  //   UserName: '',
  //   Password: ''
  // }
  // constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  // ngOnInit() {
  //   if (localStorage.getItem('token') != null)
  //     this.router.navigateByUrl('/home');
  // }

  // onSubmit(form: NgForm) {
  //   this.service.login(form.value).subscribe(
  //     (res: any) => {
  //       localStorage.setItem('token', res.token);
  //       this.router.navigateByUrl('/home');
  //     },
  //     err => {
  //       if (err.status == 400)
  //         this.toastr.error('Incorrect username or password.', 'Authentication failed.');
  //       else
  //         console.log(err);
  //     }
  //   );
  // }
  //
}
