import React, { useState } from 'react';
import axios from 'axios';
import "../UI/Modal.css";
function CreateUser({closeCreateUser}) {

    const [userInput, setUserInput] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone: ''
    });

    function handleInput(event){
        setUserInput({...userInput, [event.target.name]: event.target.value});
    };

    async function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitting:", userInput);
    try {
        const response = await axios.post(
            'http://localhost:9090/user-service/users',
            userInput,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        console.log("User created:", response.data);
        closeCreateUser(false);  
    } catch (error) {
        console.error('There was an error creating the user!', error);
    }
}

  return (
    <div className="create-user-container-background">
        <div className="create-user-container">
            <div className="close-button" >
                <button onClick={()=> closeCreateUser(false)}>❌</button>
            </div>            
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                First Name:
                <input type="text" name="first_name" onChange={handleInput} required />
                </label>
                <br />
                <label>
                Last Name:
                <input type="text" name="last_name" onChange={handleInput} required />
                </label>
                <br />
                <label>
                Email:
                <input type="email" name="email" onChange={handleInput} required />
                </label>
                <br />
                <label>
                Password:
                <input type="password" name="password" onChange={handleInput} required />
                </label>
                <br />
                <label>
                Phone:
                <input type="text" name="phone" onChange={handleInput} required />
                </label>
                <button type="submit">Create User</button>
            </form>
        </div>
    </div>
    
  );
}
export default CreateUser;