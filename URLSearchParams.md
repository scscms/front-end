# URLSearchParams搜索参数接口<sup>shine</sup>

	URLSearchParams 接口定义了很多个用来处理 URL 参数串的方法。

- URLSearchParams.append()

     插入一个指定键/值对成为一个新的搜索参数。
- URLSearchParams.delete()

	从搜索参数里删除所有指定的搜索参数,同时删除其对应的值。
- URLSearchParams.entries()

     返回一个iterator可以遍历所有键/值对的对象。
- URLSearchParams.get()

     获取指定搜索参数的第一个值。
- URLSearchParams.getAll()

     获取指定搜索参数的所有值，返回是一个数组。
- URLSearchParams.has()

     返回 Boolean 判断是否存在此搜索参数。
- URLSearchParams.keys()

    返回iterator 此对象包含了键/值对的所有键名。
- URLSearchParams.set()

     设置一个搜索参数的新值，假如原来有多个值将全部删除。
- URLSearchParams.toString()

     返回搜索参数组成的字符串，可直接使用在URL上。
- URLSearchParams.values()

     返回iterator 此对象包含了键/值对的所有值。


```

var paramsString = "q=URLUtils.searchParams&topic=api"
var searchParams = new URLSearchParams(paramsString);
searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === ""; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"

```


### Polyfill

```
if(typeof(URLSearchParams) != "function"){
    var URLSearchParams = function(url){
        if(url !== undefined){
            var obj = {};
            ("" + url).replace(/&?([^=&]+)(=([^&]*))?/g, function(str,a,b,c) {
                c = encodeURIComponent(c||"");
                obj[a] ? obj[a].push(c) : obj[a] = [c];
            });
            this.params = obj;
        }
    };
    function makeIterator(array) {
        var nextIndex = 0;
        return {
            next: function() {
                return nextIndex < array.length ?
                    {value: array[nextIndex++], done: false} :
                    {value: undefined, done: true};
            }
        };
    }
    URLSearchParams.prototype._get = function(type){
        var array = [],obj = this.params;
        if(obj){
            for(var key in obj){
                obj[key].forEach(function(item,index){
                    if(type == "entries"){
                        array.push([key,item]);
                    }else if(type == "keys"){
                        array.push(key);
                    }else if(type == "values"){
                        array.push(item);
                    }
                })
            }
        }
        return array;
    };
    URLSearchParams.prototype.entries = function(){
        return makeIterator(this._get("entries"));
    };
    URLSearchParams.prototype.keys = function(){
        return makeIterator(this._get("keys"));
    };
    URLSearchParams.prototype.values = function(){
        return makeIterator(this._get("values"));
    };
    URLSearchParams.prototype.delete = function(name){
        if(this.params && this.params.hasOwnProperty(name)){
            delete this.params[name];
        }
    };
    URLSearchParams.prototype.append = function(name,value){
        this.params = this.params || {};
        if(this.params.hasOwnProperty(name)){
            this.params[name].push(value);
        }else{
            this.params[name] = [value];
        }
    };
    URLSearchParams.prototype.getAll = function(name){
        if(this.params && this.params.hasOwnProperty(name)){
            return this.params[name];
        }
        return null;
    };
    URLSearchParams.prototype.get = function(name){
        var p = this.getAll(name);
        return p ? p[0] : null;
    };
    URLSearchParams.prototype.toString = function(){
        if(this.params){
            var url = '',obj = this.params;
            for(var key in obj){
                url += "&"+ key +"=" + obj[key].join("&"+ key +"=");
            }
            return url.slice(1);
        }
    }
}
```