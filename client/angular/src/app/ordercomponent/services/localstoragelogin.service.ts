import { Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Inject} from '@angular/core';
import { User } from 'src/app/productcomponent/viewmodel/user';
@Injectable()

@Injectable({
  providedIn: 'root'
})
export class LocalstorageloginService {
  STORAGE_KEY='local_todolist';
  userlogin:User;
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  public storeOnLocalStoragelogin(user:User): void {
    const currentTodoList = this.storage.get(this.STORAGE_KEY) || [];
    // push new task to array
    currentTodoList.push(user);
    // insert updated array to local storage
    this.storage.set(this.STORAGE_KEY, currentTodoList);
    //console.log(this.storage.get(this.STORAGE_KEY) || 'LocaL storage is empty');
   // insert updated array to local storage
   //this.storage.set(STORAGE_KEY, currentTodoList);
   //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
}
public retrivefromLocalStoragelogin(): User 
{
  const proList = this.storage.get(this.STORAGE_KEY);
  console.log("hello"+proList);
  return proList ;
}
public RemovefromLocalStoragelogin(user: User): void
{
         //////remove for all why?
  this.storage.remove(this.STORAGE_KEY);
}
public clearLocalStoragelogin(): void
{
  this.storage.clear();
}
}
