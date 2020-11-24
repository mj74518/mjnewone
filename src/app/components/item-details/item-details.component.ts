import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/Services/content.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  itemdetails;
  constructor(private route: ActivatedRoute, private router: Router, private service: ContentService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemdetails=this.service.getItem(id);
  }

}
