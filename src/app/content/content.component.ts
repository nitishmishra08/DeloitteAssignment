import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CollectionService } from '../item-detail/service/collection-item.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  searchText:string;
  data:any=[];
  page = 1;
  pageSize =6;
  loading:boolean =false;
  constructor(private http: HttpClient,private collectionService:CollectionService) { }
   
  
  ngOnInit() {
     this.collectionService.getCollectionItemsDetail().subscribe(val =>{
      this.data = val;
      this.loading=true;
      
     });

     this.collectionService.itemSubject.subscribe(val =>{
       
       if(val){
        this.searchText= val;
        }
     })
    
  }

}
