import ballerina/sql;
import ballerinax/mysql;

function addUserQuery(NewUser newUser) returns sql:ParameterizedQuery{
    return `INSERT INTO USERS 
    (
        first_name, last_name, email, password, phone
    ) 
    VALUES 
    (
        ${newUser.name}, ${newUser.email}, ${newUser.age}, ${newUser.password}, ${newUser.phone}
    )`;
}

function getUserQuery(int id) returns sql:ParameterizedQuery{
    return `SELECT first_name, last_name, email, phone
    FROM USERS
    WHERE user_id = ${id}`;
}

function searchUserQuery(string searchItem) return sql:ParameterizedQuery {
    return `SELECT first_name, last_name, email, phone
    FROM USERS
    WHERE first_name LIKE ${searchItem} OR last_name LIKE ${searchItem} OR email LIKE ${searchItem}`;
}