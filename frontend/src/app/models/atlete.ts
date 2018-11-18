export class Atlete {
  constructor(_id = '', name = '', mail = '', years = 0, birthday = '',
  status = 0) {
    this._id = _id;
    this.name = name;
    this.mail = mail;
    this.years = years;
    this.birthday = birthday;
    this.status = status;
  }
  _id: String;
  name: String;
  mail: String;
  years: Number;
  birthday: String;
  status: Number;
}

