import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import './Atletes.css';
import AtletetList from './AtleteList';
//import AtleteFunctions from './AtletesFuntions';

class Atletes extends Component {
    state = {
        newForm: false,
    }
    //show new product form
    NewButtontoggler() {
        this.setState({
            newForm: !this.setState.newForm
        })
    }
    //hide new product form
    Hide() {
        this.setState({
            newForm: false
        })
        window.location.reload();

    }
    Create = () => {
        let name = this.refs.Name.value
        let mail = this.refs.Mail.value
        let years = this.refs.Years.value
        let birthday = this.refs.Birthday.value
        let status = this.refs.Status.value

        let mydata = {
            name: name,
            mail: mail,
            years: years,
            birthday: birthday,
            status: status
          };
          
          this.refs.NewProductForm.reset()
          this.Hide();
        this.PostData(mydata);
    };

    PostData(data) {
        fetch('/home/create', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(atletes => this.setState({ atletes }, () => console.log('Atletes posted...', atletes)))
    }
    
    render() {
        return (
            <div>
                <Table className="table">
                    <thead>
                        <tr className="header">
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Years</th>
                            <th>Birthday</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <AtletetList />
                </Table>
                {
                    //show new product form
                    this.state.newForm ?
                        <form ref="NewProductForm" method="POST" action="/home/create">
                            <div className="NewComponent">
                                <div className="form-group row">
                                    <label for="name-input" className="col-2 col-form-label">Name</label>
                                    <div class="col-10">
                                        <input  className="form-control" type="text" name="Name" ref="Name"></input>
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
                                        <input className="form-control" type="Numeric" name="Years" ref="Years"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="cost-input" className="col-2 col-form-label">Birthday</label>
                                    <div class="col-10">
                                        <input className="form-control" type="text" name="Birthday" ref="Birthday"></input>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label for="status-input" className="col-2 col-form-label">Status</label>
                                    <div class="col-10">
                                        <input className="form-control" type="Number" name="Status" ref="Status"></input>
                                    </div>
                                </div>
                                
                            </div>
                            <Button className="ButtonEdit" onClick={() => this.Create()}>Save</Button>
                            <Button className="ButtonDelete" onClick={() => this.Hide()}>Cancel</Button>
                        </form>
                        : null
                }
                <Button className="ButtonNew" onClick={() => this.NewButtontoggler()}>New</Button>
                
            </div>
        )
    }
}
export default Atletes