import { Component, OnInit } from '@angular/core';
import { AtleteService} from '../../services/atlete.service';
import { NgForm } from '@angular/forms';
import { Atlete } from 'src/app/models/atlete';

declare var M: any;
@Component({
  selector: 'app-atletes',
  templateUrl: './atletes.component.html',
  styleUrls: ['./atletes.component.css'],
  providers: [AtleteService]
})
export class AtletesComponent implements OnInit {

  constructor(private atleteService: AtleteService) { }

  ngOnInit() {
    this.getAtletas();
  }
  addAtlete(form?: NgForm) {
 console.log(form.value._id);
    if (form.value._id !== '') {
      this.atleteService.putAtlete(form.value)
      .subscribe(res => {
        console.log(res);
      });
      this.atleteService.putMAilAtlete(form.value)
      .subscribe(res => {
        console.log(res);
      });
      this.atleteService.putYearsAtlete(form.value)
      .subscribe(res => {
        console.log(res);
      });
      this.atleteService.putBirthdayAtlete(form.value)
      .subscribe(res => {
        console.log(res);
      });
      this.atleteService.putStatusAtlete(form.value)
      .subscribe(res => {
        console.log(res);
      });
      M.toast({htlm: 'Update Atlete'});
      this.getAtletas();



    } else {
    this.atleteService.postAtlete(form.value)
      .subscribe(res => {
        console.log(res);
        this.restForm(form);
      });
      M.toast({htlm: 'Save Atlete'});
      this.getAtletas();
    }
  }
  editAtlete(atlete: Atlete) {
    this.atleteService.selectedAtlete = atlete;
  }

  deleteAtlete(_id: string) {
    this.atleteService.deleteAtlete(_id)
    .subscribe( res => {
      console.log(res);
    });
    M.toast({htlm: 'Delted Atlete'});
    this.getAtletas();
  }

  getAtletas() {
    this.atleteService.getAtletes()
      .subscribe(res => {
        this.atleteService.atletes = res as Atlete[];
        console.log(res);
      });
  }
  restForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.atleteService.selectedAtlete = new Atlete();
    }
  }

  resf() {
    this.getAtletas();
  }

}
