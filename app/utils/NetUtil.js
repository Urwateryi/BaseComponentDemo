/**
 * Description:网络请求
 *
 * Author: zoe
 * Time: 2018/5/31 0031
 */
export default class NetUtil {

    /**
     *get请求
     *url :请求地址
     *callback:回调函数
     */
    static get(url, params, success, failure) {

        console.log("NetUtil    get请求url:", url);
        console.log("NetUtil    get参数：", params);

        fetch(url, {
            method : 'GET',
            body : params
        })
            .then(this.checkStatus)
            .then((response) => response.json())
            .then((json) => success(json))
            .catch((error) => {
                console.log("NetUtil    get请求url:" + url + "\n出错日志：" + error);
                failure(error);
            });
    }

    /**
     *url :请求地址
     *data:参数
     *callback:回调函数
     */
    static postForm(url, params, success, failure) {

        console.log("NetUtil    postForm请求url:", url);

        //拼接参数
        let newParams='';
        for (let [ key, value ] of
            params) {
            newParams+=(key + "=" + value + '&')
        }

        console.log("NetUtil    postForm参数：", newParams);

        const requestOptional = {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body :newParams
        };

        fetch(url, requestOptional)
            .then(this.checkStatus)
            .then((response) => response.json())
            .then((json) => success(json))
            .catch((error) => {
                console.log("NetUtil    postForm请求url:" + url + "\n出错日志：" + error);
                failure(error);
            });
    }

    /**
     *url :请求地址
     *data:参数(Json对象)
     *callback:回调函数
     */
    static postJson(url, params, success, failure) {

        console.log("NetUtil postJson请求url:", url);
        console.log("NetUtil postJson参数：", JSON.stringify(this.strMapToObj(params)));

        const requestOptional = {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                //json形式
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(this.strMapToObj(params))
        };

        fetch(url, requestOptional)
            .then(this.checkStatus)
            .then((response) => response.json())
            .then((json) => success(json))
            .catch((error) => {
                console.log("NetUtil postJson请求url:" + url + "\n出错日志：" + error);
                failure(error);
            });
    }

    /**
     * 字符转换为JSON
     */
    static strToJson(data) {
        return JSON.parse(data);
    }

    /**
     * JSON转换为字符
     */
    static jsonToStr(data) {
        return JSON.stringify(data);
    }

    /**
     * map转换为json
     */
    static mapToJson(map) {
        return JSON.stringify(JsonUtil.strMapToObj(map));
    }

    /**
     * json转换为map
     */
    static jsonToMap(jsonStr) {
        return JsonUtil.objToStrMap(JSON.parse(jsonStr));
    }

    /**
     * map转化为对象（map所有键都是字符串，可以将其转换为对象）
     */
    static strMapToObj(strMap) {
        let obj = Object.create(null);
        for (let [ k, v ] of
            strMap) {
            obj[ k ] = v;
        }
        return obj;
    }

    /**
     * fetch请求对某些错误http状态不会reject
     * 这主要是由fetch返回promise导致的，
     * 因为fetch返回的promise在某些错误的http状态下如400、500等不会reject，
     * 相反它会被resolve；只有网络错误会导致请求不能完成时，fetch 才会被 reject；
     * 所以一般会对fetch请求做一层封装
     *
     * @param response
     * @returns {*}
     */
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}