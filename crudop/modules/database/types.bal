
public type User record {|
    // Id of the user
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