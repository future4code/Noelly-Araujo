import { connection } from "../connection"
import {userTableName, recipeTableName} from "../types"

connection.raw(`
  CREATE TABLE IF NOT EXISTS ${userTableName}(
        id VARCHAR(255)  PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    );


 CREATE TABLE IF NOT EXISTS ${recipeTableName} (
     id VARCHAR(255) PRIMARY KEY,
     tItle VARCHAR(255) NOT NULL,
     description VARCHAR(1000) NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     author_id VARCHAR(255),
     FOREIGN KEY (author_id) REFERENCES ${userTableName} (id)
 );

    `).then(
    () => console.log("Tables created sucessfully!")
).catch(error =>
    console.log(error.message || error.sqlMessage)
).finally(() => {
    connection.destroy()
})
