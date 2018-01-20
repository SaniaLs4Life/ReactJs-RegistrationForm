import React, { Component } from 'react'

class UserList extends Component {
    render() {
        return (
            <div className="list-group">

                <div className="alert alert-warning" id="titleList" role="alert">
                    <strong>User List</strong>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Adress</th>
                            <th scope="col">Adress 2</th>
                            <th scope="col">City</th>
                            <th scope="col">Country</th>
                            <th scope="col">Zip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}

                    </tbody>
                </table>

            </div>
        )
    }
}

export default UserList;