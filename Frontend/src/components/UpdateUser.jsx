import React, { useState, useEffect } from "react";
import axios from 'axios';
function UpdateUser({closeUpdateUser,user}){
    const [userInput, setUserInput] = useState({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            phone: ''
        });

    useEffect(() => {
        if (user) {
            setUserInput({
                first_name: user.first_name || '',
                last_name: user.last_name || '',
                email: user.email || '',
                password: user.password || '', 
                phone: user.phone || ''
            });
        }
    }, [user]);

    function handleInput(event){
        setUserInput({...userInput, [event.target.name]: event.target.value});
    };
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:9090/user-service/users/${user.id}`, userInput);
            console.log("User updated successfully!");
        } catch (error) {
            console.error("Error updating user:", error);
        }
    }
    return(
        <div className="create-user-container-background">
        <div className="create-user-container">
            <div className="close-button" >
                <button onClick={()=> closeUpdateUser(false)}>❌</button>
            </div>            
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <label>
                First Name:
                <input type="text" name="first_name" onChange={handleInput} value={userInput.first_name} required />
                </label>
                <br />
                <label>
                Last Name:
                <input type="text" name="last_name" onChange={handleInput} value={userInput.last_name} required />
                </label>
                <br />
                <label>
                Email:
                <input type="email" name="email" onChange={handleInput} value={userInput.email} required />
                </label>
                <br />
                <label>
                Password:
                <input type="password" name="password" onChange={handleInput} value={userInput.password} required />
                </label>
                <br />
                <label>
                Phone:
                <input type="text" name="phone" onChange={handleInput} value={userInput.phone} required />
                </label>
                <button type="submit">Update User</button>
            </form>
        </div>
    </div>
    );
}
export default UpdateUser;