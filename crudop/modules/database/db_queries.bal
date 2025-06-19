import ballerina/sql;

isolated function addUserQuery(NewUser newUser) returns sql:ParameterizedQuery{
    return `INSERT INTO USERS 
    (
        first_name, last_name, email, password, phone
    ) 
    VALUES 
    (
        ${newUser.first_name},${newUser.last_name}, ${newUser.email}, ${newUser.password}, ${newUser.phone}
    )`;
}

isolated function getUserQuery(int id) returns sql:ParameterizedQuery{
    return `SELECT user_id, first_name, last_name, email, phone
    FROM USERS
    WHERE user_id = ${id}`;
}

isolated function searchUserQuery(string searchItem, int? offset) returns sql:ParameterizedQuery {
    sql:ParameterizedQuery mainQuery = `SELECT user_id, first_name, last_name, email, phone
    FROM USERS
    WHERE first_name LIKE ${"%"+searchItem+"%"} OR last_name LIKE ${"%"+searchItem+"%"} OR email LIKE ${"%"+searchItem+"%"}`;
    // Setting the limit and offset.
    return mainQuery;
}
isolated function updateUserQuery(int id,UpdateUser user) returns sql:ParameterizedQuery {
    return `UPDATE USERS SET 
    first_name = ${user.first_name},
    last_name = ${user.last_name},
    email = ${user.email},
    password = ${user.password},
    phone = ${user.phone}
    WHERE user_id = ${id}`;    
    
}
isolated function deleteUserQuery(int user_id) returns sql:ParameterizedQuery {
    return `DELETE FROM USERS WHERE user_id = ${user_id}`;
}