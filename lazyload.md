# 图片懒加载原理<sup>shine</sup>

```javascript

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