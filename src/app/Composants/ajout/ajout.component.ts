import { Component, OnInit } from '@angular/core';
import {InterventionsService} from "../../Services/interventions.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  Interventiondata: any;
  saveresp: any;
  messageclass = '';
  message = '';
  EditData: any;
  Interventionid: any;
  constructor(private service: InterventionsService, private route: ActivatedRoute) {
    this.Interventionid = this.route.snapshot.paramMap.get('id');
    if (this.Interventionid != null && this.Interventionid != 0) {
      this.UpdateIntervention(this.Interventionid);
    }
    this.LoadIntervention();
  }

  ngOnInit(): void {
  }

  UpdateIntervention(code: any) {
    this.service.LoadInterventionBycode(code).subscribe(result => {
      this.EditData = result;
      if (this.EditData != null) {
        this.Interventionform = new FormGroup({
          code: new FormControl(this.EditData.code),
          agent: new FormControl(this.EditData.agent),
          client: new FormControl(this.EditData.client),
          vehicule: new FormControl(this.EditData.vehicule),
          operation: new FormControl(this.EditData.operation),
        });
      }
    });
  }

  Interventionform = new FormGroup({
    code: new FormControl('', Validators.required),
    agent: new FormControl('', Validators.required),
    client: new FormControl('', Validators.required),
    vehicule: new FormControl('', Validators.required),
    operation: new FormControl('', Validators.required),
  });

  LoadIntervention() {
    this.service.LoadIntervention().subscribe(result => {
      this.Interventiondata = result;
    });

  }
  SaveIntervention() {
    if (this.Interventionform.valid) {

      this.service.SaveIntervention(this.Interventionform.value).subscribe(result => {
        this.saveresp = result;
        if (this.saveresp.result == 'pass') {
          this.message = "Ajouté avec succes"
          this.messageclass = 'sucess'

        } else {
          this.message = "Erreur"
          this.messageclass = 'error'
        }

      });
    } else {
      this.message = "Please enter valid data"
      this.messageclass = 'error'
    }
  }

  get agent() {
    return this.Interventionform.get('agent');
  }
  get operation() {
    return this.Interventionform.get('operation');
  }
  get client() {
    return this.Interventionform.get('client');
  }
  get vehicule() {
    return this.Interventionform.get('vehicule');
  }
}
