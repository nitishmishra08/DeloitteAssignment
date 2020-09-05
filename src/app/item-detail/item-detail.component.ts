import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from './service/collection-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit,OnDestroy {
  itemDetails:any;
  loadingIndicator:boolean =false;
  susbscription:Subscription;
  
  constructor(
    private collectionService:CollectionService,
    private route: ActivatedRoute,
    private router: Router,
   
  ){}

    ngOnInit(){
      this.susbscription = this.route.params.subscribe(param => {
        console.log(param)
        if(param){
          this.collectionService.fetchCollectionObjects(param.Title).subscribe(val =>{
            if(val){
            this.itemDetails=val[0];
            this.loadingIndicator= true;
            console.log(this.itemDetails);
            }
          });
          
        }
      });

}
ngOnDestroy(){
  this.susbscription.unsubscribe();
}
}
