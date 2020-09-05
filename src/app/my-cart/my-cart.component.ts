import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../item-detail/service/collection-item.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {

  itemDetails:any;
  loadingIndicator:boolean =false;
  susbscription:Subscription;
  cartItems=[];
  constructor(
    private collectionService:CollectionService,
    private route: ActivatedRoute,
    private router: Router
  ){}
   
    

  
  ngOnInit() {
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
    this.cartItems.push(this.itemDetails);
    console.log("va",this.cartItems);
}

}
