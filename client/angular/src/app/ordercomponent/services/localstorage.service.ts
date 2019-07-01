import { Injectable } from '@angular/core';
import { Inject} from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

//STORAGE_KEY = 'local_todolist';
@Injectable()


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  STORAGE_KEY='local_todolist';
  //constructor() { }
  prodyctslist = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
  public storeOnLocalStorage(prodID: number): void {
       
       // get array of tasks from local storage
       //const currentTodoList = this.storage.get(STORAGE_KEY) || [];
       // push new task to array
       //currentTodoList.push({
           //title: taskTitle,
           //isChecked: false 
       //});
       //public storeOnLocalStorage(product: Product): void {
        // this.storage.set(product.Name,JSON.stringify(product));
        // console.log( this.storage.get(JSON.parse(product.Name)));
        // get array of tasks from local storage
        const currentTodoList = this.storage.get(this.STORAGE_KEY) || [];
        // push new task to array
        currentTodoList.push(prodID);
        // insert updated array to local storage
        this.storage.set(this.STORAGE_KEY, currentTodoList);
        //console.log(this.storage.get(this.STORAGE_KEY) || 'LocaL storage is empty');
       // insert updated array to local storage
       //this.storage.set(STORAGE_KEY, currentTodoList);
       //console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }
  public retrivefromLocalStorage(): number[] 
{
  const proList = this.storage.get(this.STORAGE_KEY);
  console.log("hello"+proList);
  return proList ;
}
public RemovefromLocalStorage(pro: number): void
{
         //////remove for all why?
  this.storage.remove(this.STORAGE_KEY);
}
public clearLocalStorage(): void
{
  this.storage.clear();
}

}
