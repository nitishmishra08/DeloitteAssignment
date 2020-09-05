import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../item-detail/service/collection-item.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
item=[];
filterItem=[];

  
  constructor(private collectionService:CollectionService) { }

  ngOnInit() {

    this.collectionService.itemSubject.subscribe(val =>{
      if(val){
      this.item= val;
      this.filterItem= this.item;
     
      }
    })
  }
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    //this.filterItem = this.filteredItems(value);
    this.collectionService.itemSubject.next( this._searchTerm);
  }
  /* filteredItems(searchString: string) {
    
    this.collectionService.itemSubject.next(this.item.filter(user =>
      user.Title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    ));
    
    return this.item.filter(user =>
      user.Name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
  } */

}
