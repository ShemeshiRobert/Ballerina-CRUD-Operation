import ballerina/http;
import crudop.database as db;

@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:5173"],
        allowCredentials: false,
        allowHeaders: ["CORELATION_ID", "Content-Type"],
        allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        exposeHeaders: ["X-CUSTOM-HEADER"]
    }
}
service /user\-service  on new http:Listener(9090) {
    // @http:ResourceConfig {
    //     cors: {
    //         allowOrigins: ["http://localhost:5173"],
    //         allowCredentials: true,
    //         allowHeaders: ["X-Content-Type-Options", "X-PINGOTHER", "Content-Type"]
    //     }
    // }
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

    resource function get users/search/[string searchItem](int? offset) returns User[]|error {
        return db:searchUser(searchItem, offset);
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



    