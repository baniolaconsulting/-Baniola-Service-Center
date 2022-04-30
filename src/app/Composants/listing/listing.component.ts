import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  users: any;
  constructor() {
    this.LoadAll();
  }

  ngOnInit(): void {

  }

  LoadAll() {

  }
  delete() {
    if (confirm("Voulez vous vraiment supprimer ?")) {

    }
  }
}
