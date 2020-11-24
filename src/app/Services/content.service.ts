import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { timestamp } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  items: Item[] = [
    {
      id:1,
      title: 'Shoes',
      price: 200,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim.",
      isDiscount: false,
      discount: 0,
    },
    {
      id:2,
      title: 'Shirts',
      price: 200,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim.",
      isDiscount: true,
      discount: 5,
    },
    {
      id:3,
      title: 'Shorts',
      price: 200,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim.",
      isDiscount: true,
      discount: 10,
    },
    {
      id:4,
      title: 'Smartphone',
      price: 2000,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim.",
      isDiscount: true,
      discount: 10,
    },
    {
      id:5,
      title: 'Toys',
      price: 200,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et pharetra arcu. Praesent accumsan nibh vitae justo feugiat, in scelerisque risus dignissim. Etiam eget eleifend urna, malesuada lobortis ex. Quisque sit amet tincidunt arcu.",
      isDiscount: false,
      discount: 0,
    },
  ];
  
  constructor() { }
  // constructor(private fb: FormBuilder, private http: HttpClient) { }
  // readonly ServerURI = 'http://localhost:5000';
  // readonly BaseURI = this.ServerURI + '/api';
  // ServerPath() {
  //   return this.BaseURI;
  // }

  
  getAllitems() {
    return this.items;
    //return 1;
  }

  getItem(id) {
    return this.items.find(x => x.id==id);
  }
}
