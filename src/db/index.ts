import * as mysql from 'mysql';
import config from '../config';

class ApiDb {
    constructor() {

    }

    connect(): Promise<any> {
        return new Promise((resolve, reject) => {
            const connection = mysql.createConnection({
                host: config.dbaddress,
                user: config.dbuser,
                database: config.dbname,
                password: config.dbpwd
            });
            connection.connect((err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
}


export var ApiDatabase: ApiDb;

export default () => (ApiDatabase = new ApiDb());