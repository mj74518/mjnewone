import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/Models/item';
import { ContentService } from 'src/app/Services/content.service';

@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.css'],
})
export class ShopItemsComponent implements OnInit {
  // item: Item = {};
  // items: Item[] = [];
  items;

  data: Array<any>;
  
  constructor(private router: Router, private service: ContentService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {
    
    this.items=this.service.getAllitems();
     
    // this.item.title = 'Shoes';
    // this.item.price = 20;
    // this.item.description = 'Test Desc';

    // this.items = [
    //   {
    //     id:1,
    //     title: 'Shoes',
    //     price: 200,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim.",
    //     isDiscount: false,
    //     discount: 0,
    //   },
    //   {
    //     id:2,
    //     title: 'Shirts',
    //     price: 200,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim.",
    //     isDiscount: true,
    //     discount: 5,
    //   },
    //   {
    //     id:3,
    //     title: 'Shorts',
    //     price: 200,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim.",
    //     isDiscount: true,
    //     discount: 10,
    //   },
    //   {
    //     id:4,
    //     title: 'Smartphone',
    //     price: 2000,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim.",
    //     isDiscount: true,
    //     discount: 10,
    //   },
    //   {
    //     id:5,
    //     title: 'Toys',
    //     price: 200,
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim. Etiam eget eleifend urna, malesuada lobortis ex. Quisque sit amet tincidunt arcu.",
    //     isDiscount: false,
    //     discount: 0,
    //   },
    // ];
  }
}
