import ballerina/sql;

public type User record {|
    // Id of the user
    @sql:Column{name:"user_id"}
    readonly int id;
    // User's first name
    string first_name;
    // User's last name
    string last_name;
    // User's email address
    string email;
    // User's password
    string password;
    // User's phone number
    string phone;
|};

public type NewUser record {|
    // User's first name
    string first_name;
    // User's last name
    string last_name;
    // User's email address
    string email;
    // User's password
    string password;
    // User's phone number
    string phone;
|};

public type DatabaseConfig record {|
    // Database username
    string user;
    // Database password
    string password;
    // Database host
    string host;
    // Database port
    int port;
    // Database name
    string database;
       
|};
public type UpdateUser record {|
    string first_name;
    string last_name;
    string email;
    string password;
    string phone;
|};