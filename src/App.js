import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import RegistrationForm from './components/RegistrationForm'
import Layout from './components/Layout'
import UserList from './components/UserList'
import Users from './components/Users'

class App extends Component {
  constructor(){
    super()
    this.state = {
      user : [{
        id: 1,
        name: 'Hakan',
        surname: 'Genc',
        address: 'Wittiga',
        address2: '23A',
        city: 'Wroclaw',
        country: 'Poland',
        zip: '62-622'
      },
      {
        id: 2,
        name: 'Sakir',
        surname: 'Alp',
        address: 'Guzelyali',
        address2: '29B',
        city: 'Istanbul',
        country: 'Turkey',
        zip: '34-552'
      }]
    }
  }
  render() {
    return (
      <Layout>
          <RegistrationForm />
          <UserList>
          {
              this.state.user.map((users, i) => 
              <Users  user={users} key={i} />
            
              )              
            }
          </UserList>
      </Layout>
    );
  }
}

export default App;
