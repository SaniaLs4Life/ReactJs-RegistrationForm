import React, { Component } from 'react'

class Users extends Component {
    render() {
        return (
            <tr>
                <th scope="row">{this.props.user.id}</th>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.surname}</td>
                <td>{this.props.user.address}</td>
                <td>{this.props.user.address2}</td>
                <td>{this.props.user.city}</td>
                <td>{this.props.user.country}</td>
                <td>{this.props.user.zip}</td>

            </tr>

        )
    }
}

export default Users;