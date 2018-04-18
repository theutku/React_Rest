import $ from 'jquery';
import config from '../config';

class ApiBase {

    static postData(uri, data) {
        return $.ajax({
            type: "POST",
            url: `${config.apiPath}:${config.apiPort}/${uri}`,
            data: data
        }).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }
}

export default ApiBase;