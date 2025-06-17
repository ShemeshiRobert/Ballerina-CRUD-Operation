import ballerina/sql;
import ballerinax/mysql;

function addUserQuery(NewUser newUser) returns sql:ParameterizedQuery{
    return `INSERT INTO USERS 
    (
        first_name, last_name, email, password, phone
    ) 
    VALUES 
    (
        ${newUser.first_name},${newUser.last_name}, ${newUser.email}, ${newUser.password}, ${newUser.phone}
    )`;
}

function getUserQuery(int id) returns sql:ParameterizedQuery{
    return `SELECT first_name, last_name, email, phone
    FROM USERS
    WHERE user_id = ${id}`;
}

function searchUserQuery(string searchItem, int? 'limit, int? offset) returns sql:ParameterizedQuery {
    sql:ParameterizedQuery mainQuery = `SELECT first_name, last_name, email, phone
    FROM USERS
    WHERE first_name LIKE ${searchItem} OR last_name LIKE ${searchItem} OR email LIKE ${searchItem}`;
    // Setting the limit and offset.
    if 'limit is int {
        mainQuery = sql:queryConcat(mainQuery, ` LIMIT ${'limit}`);
        if offset is int {
            mainQuery = sql:queryConcat(mainQuery, ` OFFSET ${offset}`);
        }
    } else {
        mainQuery = sql:queryConcat(mainQuery, ` LIMIT 1000`);
    }

    return mainQuery;
}
function updateUserQuery(string? firstName, string? lastName, string? email, string? password, string? phone, int user_id) returns sql:ParameterizedQuery {
    sql:ParameterizedQuery mainQuery = `UPDATE USERS SET `;
    if firstName is string {
        mainQuery = sql:queryConcat(mainQuery, `first_name = ${firstName}`);
    }
    if lastName is string {
        mainQuery = sql:queryConcat(mainQuery, `last_name = ${lastName}`);
    }
    if email is string {
        mainQuery = sql:queryConcat(mainQuery, `email = ${email}`);
    }
    if password is string {
        mainQuery = sql:queryConcat(mainQuery, `password = ${password}`);
    }
    if phone is string {
        mainQuery = sql:queryConcat(mainQuery, `phone = ${phone}`);
    }
    mainQuery = sql:queryConcat(mainQuery, ` WHERE user_id = ${user_id}`);
    return mainQuery;
}
function deleteUserQuery(int user_id) returns sql:ParameterizedQuery {
    return `DELETE FROM USERS WHERE user_id = ${user_id}`;
}