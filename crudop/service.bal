import ballerina/http;
import crudop.database as db;

service /user\-service  on new http:Listener(9090) {
    resource function post users(NewUser newUser) returns http:Created|error{
        if db:addUser(newUser) is int{
            return http:CREATED;
        } else {
            return error("Failed to create user");
        }
    }
    resource function get users/[int id]() returns User|error? {
        return db:getUser(id);
    }

    resource function get users/search/[string searchItem](int? 'limit, int? offset) returns User[]|error {
        return db:searchUser(searchItem, 'limit, offset);
    }

    resource function put users/[int id](UpdateUser user) returns http:Ok|error {
        if db:updateUser(id,user) is int{
            return http:OK;
        } else {
            return error("Failed to update user");
        }
    }

    resource function delete users/[int id]() returns http:NoContent|error {
        if db:deleteUser(id) is int{
            return http:NO_CONTENT;
        } else {
            return error("Failed to create user");
        }
    }
}



    