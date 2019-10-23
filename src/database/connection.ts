import mysql from 'promise-mysql';
import credenciales from './credenciales';

const database = mysql.createPool(credenciales.database);

database.getConnection()
  .then(connection => {

    database.releaseConnection(connection);
    console.log('DB is connected');

  })


export default database;
