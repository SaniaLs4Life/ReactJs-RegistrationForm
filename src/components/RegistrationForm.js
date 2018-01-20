import React, { Component } from 'react';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            users: [{
                name: '',
                surname: '',
                address: '',
                address2: '',
                city: '',
                country: 'Poland',
                zip: ''
            }]
        }
    }

    nameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    surnameChange(e) {
        this.setState({
            surname: e.target.value
        })
    }
    addressChange(e) {
        this.setState({
            address: e.target.value
        })
    }
    address2Change(e) {
        this.setState({
            address2: e.target.value
        })
    }
    cityChange(e) {
        this.setState({
            city: e.target.value
        })
    }
    countryChange(e) {
        this.setState({
            country: e.target.value
        })
    }
    zipChange(e) {
        this.setState({
            zip: e.target.value
        })
    }
    insertUser(e) {
        const user = this.state.users.slice(0)
        user.push({ users: user })
        this.setState({
            users: user
        })
    }

    render() {
        return (
            <form>
                <h1>Registration Form</h1>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="txtName">Name</label>
                        <input type="text" className="form-control" onChange={this.nameChange.bind(this)} value={this.state.users.name} id="txtName" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="txtSurname">Surname</label>
                        <input type="text" className="form-control" onChange={this.surnameChange.bind(this)} value={this.state.users.surname} id="txtSurname" placeholder="Surname" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" onChange={this.addressChange.bind(this)} value={this.state.address} id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" onChange={this.cityChange.bind(this)} value={this.state.users.city} id="inputCity" placeholder="Wroclaw" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputCountry">Country</label>
                        <select id="inputCountry" onChange={this.countryChange.bind(this)} value={this.state.users.country} className="form-control" >
                            <option value="Poland">Poland</option>
                            <option value="Turkey">Turkey</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" onChange={this.zipChange.bind(this)} value={this.state.users.zip} id="inputZip" placeholder="62-262" />
                    </div>
                </div>
                <button onClick={this.insertUser.bind(this)} type="button" className="btn btn-warning">Save</button>
            </form>
        );
    }
}

export default LoginForm;