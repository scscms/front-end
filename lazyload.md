# 图片（懒|预）加载原理<sup>shine</sup>

### 懒加载

```
//<img src="loading图片" alt="" data-src='真实图片地址' />
function lazyload(){
	var nodes = document.querySelectorAll('img[data-src]');
	var viewH = document.documentElement.clientHeight;
	[].forEach.call(nodes,function(item,index){
		if(item.dataset.src){
			var rect = item.getBoundingClientRect();
			//在此只考虑上下距离，没考虑左右距离变化
			if(rect.bottom >= 0 && rect.top < viewH){
				(function(item){
					var img = new Image();
					img.onload = function(){
						item.src = img.src;
					};
					img.src = item.dataset.src;
					item.dataset.src = '';
				})(item)
			}
		}
	})
}
//默认执行一次
lazyload();
//对dom节点绑定滚动加载事件
document.querySelector('.page').addEventListener('scroll',throttle(lazyload,500,1000));
//节流函数
function throttle(fun, delay, time) {
	var timeout,
		startTime = new Date();
	return function() {
		var context = this,
			args = arguments,
			curTime = new Date();
		clearTimeout(timeout);
		if (curTime - startTime >= time) {
			fun.apply(context, args);
			startTime = curTime;
		} else {
			timeout = setTimeout(fun, delay);
		}
	};
}

```

### 预加载

```
    /**
     * 图片预加载
     * @param  {Array|String} array - 图片地址数组或字符串
     * @param  {Function} callBack - 回调函数
     * @example ImagePreLoader(['1.jpg','2.jpg'],arr=>{
        console.log(arr.length ? arr:"全部加载完")
        })
     */
    function ImagePreLoader(array,callBack){
        if (!Array.isArray(array)) {
            array = [array];
        }
        let err = [];//加载失败的图片
        Promise.all(array.map(path => new Promise(resolve=>{
            let image = new Image();
            image.onload = resolve;
            image.onerror = ()=>{
                err.push(path);
                resolve();
            };
            image.src = path;
        }))).then(()=>callBack(err));
    }
```