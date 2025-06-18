import ballerinax/mysql;

configurable DatabaseConfig dbConfig = ?;

final mysql:Client dbClient = check initBalInternProject(); 

function initBalInternProject() returns mysql:Client|error=>check new(...dbConfig);