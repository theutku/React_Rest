import * as nconf from 'nconf';


class Config {
    public static NODEENV = "NODE_ENV";
    public static PORT = "PORT";
    public static DBADDRESS = "DBADDRESS";
    public static DBPORT = "DBPORT";
    public static DBNAME = "DBNAME";
    public static DBUSER = "DBUSER";
    public static DBPWD = "DBPWD";
    public static WEATHERAPIKEY = "WEATHERAPIKEY";

    public nodeenv: string;
    public port: number;
    public dbaddress: string;
    public dbport: number;
    public dbname: string;
    public dbuser: string;
    public dbpwd: string;
    public weatherapikey: string;

    public get(key?: string, cb?: nconf.ICallbackFunction) {
        return nconf.get(key, cb);
    }

    constructor() {
        nconf.argv().env();
        this.nodeenv = this.get(Config.NODEENV) || 'development';
        this.port = this.get(Config.PORT) || 3001;
        this.dbaddress = this.get(Config.DBADDRESS) || '127.0.0.1';
        this.dbport = this.get(Config.DBPORT) || 27017;
        this.dbname = this.get(Config.DBNAME) || 'test';
        this.dbuser = this.get(Config.DBUSER) || 'root';
        this.dbpwd = this.get(Config.DBPWD) || '';
        this.weatherapikey = this.get(Config.WEATHERAPIKEY) || '';
    }
}

export default new Config();