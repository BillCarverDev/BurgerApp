var connection = require("./connection.js");

const orm =
{
    selectAll: function(table, callback) {

        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, dataResponse){
        if(err) {
            throw err;   
        } 
        callback(dataResponse);
        console.log(dataResponse);
        });
    },
    insertOne: function(table, colName, val, callback) {

        let queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (??)";
        connection.query(queryString, function(err, dataResponse){
        console.log(queryString);
        if(err) throw err; callback(dataResponse);
        });
    },
    updateOne: function(table, colName, val, callback) {
        
        let queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, function(err, dataResponse){
        console.log(queryString);
        if(err) throw err; callback(dataResponse);
        });
    }
}


module.exports = orm;
