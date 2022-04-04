import React, { Component } from 'react'
import axios from 'axios';

class Profil extends Component {




    constructor(props) {
        super(props);
    }


    state = {
        data: {}
    }




    componentDidMount() {
        //recup la data en params get :user/1 puis met à jour
       const data = this.props.match.params.id


        axios({
            method: 'get',
            url: 'https://manage.smartadserverapis.com/2044/users',
            headers: {
                'Authorization': 'Basic YWx2aW5lLmRpZGllckBhbnRlbm5lX3JldW5pb246eUJMQ01hZXhXLjhqMGVyanZaWUktT09ueldsZ2Q5LDI=',
                'Content-Type': 'application/json',
            },
        })
            .then(res => {

                console.log(res.data[data]);
                this.setState({
                    data: res.data[data]
                })
            });


    }

  


    render() {

        const {email,firstName}=this.state.data

        return (<div>
            <h1>Profil </h1>
            <ul>
                <li>{firstName}</li>
                <li>{email}</li>

            </ul>
        </div>);
    }
}

export default Profil;