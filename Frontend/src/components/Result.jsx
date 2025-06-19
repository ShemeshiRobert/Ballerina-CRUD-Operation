// import React from 'react';
// import { useState } from 'react';
// function Result({searchTerm}) {
//     const [userData, setUserData] = useState([]);
//     function getPosts(){
//         fetch(`http://localhost:9090/user-service/users/search/searchItem=${searchTerm}`)
//             .then(response => response.json())
//             .then(data => {
//                 setUserData(data);
//                 console.log("User Data:", data);
//             })
//             .catch(error => console.error('Error fetching user data:', error));
//     }
//     return (
//         <div className="result-container">
//             <h2>Search Results</h2>
//             <div className='user-card'>
//                 <div className="user-info">                   
//                 </div>
//                 <div className='userActions'>
//                     <button className='view-button'>View</button>
//                     <button className='edit-button'>Edit</button>
//                     <button className='delete-button'>Delete</button>
//                 </div>
//             </div>       
//         </div>
//     );
// }
// export default Result;