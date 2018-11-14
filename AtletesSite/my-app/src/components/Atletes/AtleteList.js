
import React, { Component } from 'react';
import './AtleteList.css';
import { Button } from 'react-bootstrap';

class AtleteList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        newForm: false,
        atletes: []
      };
    }
    NewButtontoggler() {
      this.setState({
        newForm: !this.setState.newForm
      })
    }
  
    componentDidMount() {
      fetch('/home/atletes')
        .then(res => res.json())
        .then(atletes => this.setState({ atletes }, () => console.log('atletes fetched...', atletes)));
    }
    Edit = (atlete) => {
        let name = atlete.name
        let mail = atlete.mail
        let years = atlete.years
        let birthday = atlete.birthday
        let status = atlete.status
  
      let info = {
        name: name,
        mail: mail,
        years: years,
        birthday: birthday,
        status: status
      };
      console.log(JSON.stringify(info))
      this.EditMethod(info, mail)
    }
    EditMethod(data, mail) {
      fetch('home/:' + mail + '/update', {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(atletes => this.setState({ atletes }, () => console.log('atletes edited...', atletes)));
    }
    DeleteMethod(mail) {
      debugger
      fetch('/home/:' + mail + '/delete', {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
        //.then(res => res.json())
        .then(atletes => this.setState({ atletes }, () => console.log('atletes deleted...', atletes)))
    }
  
    render() {
      this.atletes = JSON.stringify(this.state.atletes)
      //console.log(this.atletes)
      if (!(this.atletes === null) && this.atletes !== '[]' && this.atletes !== '{}') {
        //debugger
        return (
          <div className="items-list">
            <ul>
              {
                this.state.atletes['undefined'].map(atlete => 
                  <tbody>
                    <tr className="list" id={'p' + this.atlete.codigobarra}  >
                      <td>{atlete.name}</td>
                      <td>{atlete.mail}</td>
                      <td>{atlete.years}</td>
                      <td>{atlete.birthday}</td>
                      <td>{atlete.status}</td>
                      <div className="buttons">
                        <Button className="ButtonEdit" onClick={() => this.Edit(atlete)}>Edit</Button>
                        <Button className="ButtonDelete" onClick={() => this.DeleteMethod(atlete.mail)}>Delete</Button>
                        </div>
                    </tr>
                    </tbody>
                  )}
            </ul>
            <div id="FormEdit">
              {
                //show new product form
                this.state.newForm ?
                  <form ref="NewProductForm" method="POST" action="/home/create">
                    <div className="NewComponent">
                      <div className="form-group row">
                        <label for="name-input" className="col-2 col-form-label">Name</label>
                        <div class="col-10">
                          <input className="form-control" type="text" name="Name" ref="Name"></input>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="size-input" className="col-2 col-form-label">Mail</label>
                        <div class="col-10">
                          <input className="form-control" type="text" name="Mail" ref="Mail"></input>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="color-input" className="col-2 col-form-label">Years</label>
                        <div class="col-10">
                          <input className="form-control" type="text" name="Years" ref="Years"></input>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="cost-input" className="col-2 col-form-label">Birthday</label>
                        <div class="col-10">
                          <input className="form-control" type="Number" name="Birthaday" ref="Birthday"></input>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label for="status-input" className="col-2 col-form-label">Status</label>
                        <div class="col-10">
                          <input className="form-control" type="Number" name="Status" ref="Status"></input>
                        </div>
                      </div>
                     
                    </div>
                  </form>
                  : null
              }
            </div>
          </div>
  
        )
      } else {
      }
      return ""
    }
  }
  
  export default AtleteList;