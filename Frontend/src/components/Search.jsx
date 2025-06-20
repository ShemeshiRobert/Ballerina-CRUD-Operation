import React, { useState } from "react";
import CreateUser from './CreateUser.jsx';
import UpdateUser from "./UpdateUser.jsx";
import "../UI/Search.css";
function Search() {

    const [searchTerm, setSearchTerm] = useState('');
    const [userData, setUserData] = useState([]);
    const [createUser, setCreateUser] = useState(false);
    const [specificUser, setSpecificUser] = useState({});
    const [expandedId, setExpandedId] = useState(null);
    const [updatedUser, setUpdatedUser] = useState(false);
    const [selectedUser, setSelectedUser]       = useState(null);;

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    };

    function handleSearchButtonClick() {
        if (searchTerm.trim() === "") {
            setUserData([]);
            setExpandedId(null);
            return;
        }
        fetch(
            `http://localhost:9090/user-service/users/search/${searchTerm}`
        )
            .then((r) => r.json())
            .then((data) => setUserData(data))
            .catch((err) => console.error("Error fetching user data:", err));
    }

    const handleViewUserButton = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
            return;
        }
        fetch(
            `http://localhost:9090/user-service/users/${id}`
        )
            .then((r) => r.json())
            .then((data) => {
                setSpecificUser(data);
                setExpandedId(id);
                console.log("Specific User Data:", data);
            })
            .catch((err) => console.error("Error fetching specific user data:", err));
    }

    function handleCreateUserButtonClick() {
        setCreateUser(true);
    };

    function handleEditUserButton(user) {
        setUpdatedUser(true);
        setSelectedUser(user);
    }
     
    function handleDeleteUserButton(id) {
        fetch(`http://localhost:9090/user-service/users/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    setUserData(userData.filter((user) => user.id !== id));
                    console.log("User deleted successfully");
                } else {
                    console.error("Error deleting user");
                }
            })
            .catch((error) => console.error("Error:", error));
    }

    return (
        <div className="search-container">
            <div className="search-input-wrapper">
                <input className="search-bar"
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search"
            />
            <button className="search-button" onClick={handleSearchButtonClick}>🔍</button>
            <button className="create-user-button" onClick={handleCreateUserButtonClick}>➕</button>
            </div>
            
            <div className="search-results">
                <ul>
                    {userData.map((user) => (
                        <li className="user-row" key={user.id}>
                        <h3>{user.first_name} {user.last_name}</h3> 
                        
                        {expandedId === user.id && specificUser && (
                        <div className="user-details">
                            <p>Email: {specificUser.email}</p>
                            <p>Phone: {specificUser.phone}</p>
                        </div>
                        )}

                        <div className="user-buttons">
                            <button className="view-button" onClick={() => handleViewUserButton(user.id)}>View</button>
                            <button className="edit-button" onClick={() => handleEditUserButton(user)}>Edit</button>
                            <button className="delete-button" onClick={() => handleDeleteUserButton(user.id)}>Delete</button>
                        </div>
                        </li>

                    ))}
                </ul>

            </div>

            {/* //js comment */}
            {createUser && <CreateUser closeCreateUser={setCreateUser} />}
            {updatedUser && ( <UpdateUser closeUpdateUser={() => setUpdatedUser(false)} user={selectedUser} />)}
            {/* {searchResults && <Result searchTerm={searchTerm} />}      */}
        </div>
    );
}
export default Search;