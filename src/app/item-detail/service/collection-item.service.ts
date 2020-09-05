import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'; 
import { Subject } from 'rxjs';




@Injectable({providedIn:'root'})
export class CollectionService {

  collectionDetails:any=[];
 ;
  public itemSubject = new Subject<any>();

  constructor(private http: HttpClient) {
  }
  
   
 
  getCollectionItemsDetail(){
      return this.http.get('http://localhost:3000/collection');
    
  }
  fetchCollectionObjects(itemTitle:string) {
    let url:string = 'http://localhost:3000/collection?Title='+itemTitle ;
        return this.http.get(url);
      }
  

}



