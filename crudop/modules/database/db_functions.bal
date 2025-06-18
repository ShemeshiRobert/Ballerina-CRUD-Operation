import ballerina/sql;

public isolated function addUser(NewUser newUser) returns int|error{
    sql:ExecutionResult|error result = check dbClient->execute(addUserQuery(newUser));
    if result is error{
        return result;
    }
    return <int>result.lastInsertId;
}
public isolated function getUser(int user_id) returns User|error? {
    User|sql:Error result = check dbClient->queryRow(getUserQuery(user_id));
    if result is sql:Error && result is sql:NoRowsError {
        return;
    }
    return result;
}

public isolated function searchUser(string searchItem, int? 'limit, int? offset) returns User[]|error {
    stream<User, error?> resultStream = dbClient->query(searchUserQuery(searchItem, 'limit, offset));
    User[] searchedUsers = [];

    check from User searchedUser in resultStream
        do {
            searchedUsers.push(searchedUser);
        };
    check resultStream.close();
    return searchedUsers;
    
}

public isolated function updateUser(int id, UpdateUser user) returns int|error {
    sql:ExecutionResult|error result = check dbClient->execute(updateUserQuery(id,user));
    if result is error {
        return result;
    }
    return <int>result.affectedRowCount;
}

public isolated function deleteUser(int user_id) returns int|error {
    sql:ExecutionResult|error result = check dbClient->execute(deleteUserQuery(user_id));
    if result is error {
        return result;
    }
    return <int>result.affectedRowCount;
}   