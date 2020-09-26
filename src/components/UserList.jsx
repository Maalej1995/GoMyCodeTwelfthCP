import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserList() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
           console.log('response: ', response)
           setUsers(response.data)
           })
        .catch((error) => {console.log('error:', error)})
    }, [])

    console.log('hi')
    console.log('users: ', users);
    return (
        <div>
            <h1>From User List</h1>
            {
                users.map(({id, name, phone, username, email, address}) => (
                    <div style={{backgroundColor: 'lightblue', margin: 10}} key={id}>
                        <h1> {name} </h1>
                        <p> {phone} </p>
                        <p> {username} </p>
                        <p> {email} </p>
                        <h3> {address && address.city} </h3>
                        <h3> {address ? address.city : ''} </h3>
                    </div>
                ))
            }
        </div>
    )
}
