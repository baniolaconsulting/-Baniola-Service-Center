import { Component, OnInit } from '@angular/core';
import {InterventionsService} from "../../Services/interventions.service";

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  InterventionData$: any;
  users: any;
  constructor(private service: InterventionsService) {
    this.LoadAll();
  }

  ngOnInit(): void {

  }

  LoadAll() {
    this.service.LoadAllInterventions().subscribe(result => {
      this.InterventionData$ = result;
    });
  }
  delete(code: any) {
    if (confirm("Voulez vous supprimer ?")) {
      this.service.RemoveInterventionBycode(code).subscribe(() => {
        this.LoadAll();
      });
    }
  }
}
