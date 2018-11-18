import { Atlete } from './../models/atlete';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AtleteService {
  selectedAtlete: Atlete;
  atletes: Atlete[];
  readonly URL_API = 'http://localhost:3000/home/';
  constructor(private http: HttpClient) {
    this.selectedAtlete  = new Atlete();
  }

  getAtletes() {
    return this.http.get(this.URL_API + 'atletes');
  }
  postAtlete(atlete: Atlete) {
    return this.http.post( this.URL_API + 'create', atlete);
  }
  putAtlete(atlete: Atlete) {
    return this.http.put(this.URL_API + 'updateName?_id=' + atlete._id.toString() + '&name=' + atlete.name.toString(), atlete);
  }

  putMAilAtlete(atlete: Atlete) {
    return this.http.put(this.URL_API + 'updateMail?_id=' + atlete._id.toString() + '&mail=' + atlete.mail.toString(), atlete);
  }

  putYearsAtlete(atlete: Atlete) {
    return this.http.put(this.URL_API + 'updateYears?_id=' + atlete._id.toString() + '&years=' + atlete.years.toString(), atlete);
  }

  putBirthdayAtlete(atlete: Atlete) {
    return this.http.put(this.URL_API + 'updateBirthday?_id=' + atlete._id.toString() + '&birthday=' + atlete.birthday.toString(), atlete);
  }

  putStatusAtlete(atlete: Atlete) {
    return this.http.put(this.URL_API + 'updateStatus?_id=' + atlete._id.toString() + '&status=' + atlete.status.toString(), atlete);
  }
  deleteAtlete(id: String) {
    return this.http.delete(this.URL_API + id + '/delete?_id=' + id);
  }
}
