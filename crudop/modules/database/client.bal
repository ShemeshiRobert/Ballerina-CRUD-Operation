import ballerinax/mysql;
import ballerinax/mysql.driver as _;

configurable DatabaseConfig dbConfig = ?;

final mysql:Client dbClient = check initBalInternProject(); 

function initBalInternProject() returns mysql:Client|error=>check new(...dbConfig);