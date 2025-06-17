//Standard type for User
public type User record {|
    readonly int id;
    string first_name;
    string last_name;
    string email;
    string password;
    string phone;
|};
public type NewUser record {|
    string first_name;
    string last_name;
    string email;
    string password;
    string phone;
|};