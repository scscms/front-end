# HTML Audio/Video DOM 参考手册<sup>shine</sup>

### HTML5 video、audio方法

- `addTextTrack()`: 给video/audio添加新的字幕
- `canPlayType()`: 检查浏览器是否能够播放指定的视频、声频
- `load()`: 给视频元素加载新的媒体数据
- `play()`: 播放视频、声频
- `pause()`: 暂停播放

### HTML5 video、audio属性

- `audioTracks`：返回AudioTracklist对象
- `autoplay`：自动播放
- `buffered`：返回代表缓冲部分的TimeRanges对象
- `controller`：返回代表当前媒体控制器的MediaController对象
- `controls`：设置或返回能够操作视频、声频播放或停止的用户界面
- `crossOrigin`：设置或返回视频、声频的CORS设置
- `currentSrc`：返回当前视频、声频的URL
- `currentTime`：设置或返回视频、声频的当前播放位置（以秒计算）
- `defaultMuted`：设置或返回视频、声频是否默认静音
- `defaultPlaybackRate`：设置或返回视频、声频的默认播放速度
- `duration`：返回当前视频、声频的长度（以秒计算）
- `ended`：返回视频、声频是否播放完毕
- `error`：返回代表视频、声频出错状态的MediaError对象
- `loop`：设置或返回视频、声频是否反复播放
- `mediaGroup`：多个视频或声频集合化（同步播放）
- `muted`：设置或返回视频、声频是否静音
- `networkState`：设置或返回视频、声频的网络状态
- `paused`：返回视频、声频是否暂停
- `playbackRate`：设置或返回声频、视频的播放速度
- `played`：返回代表视频、声频播放部分的TimeTanges对象
- `preload`：设置或返回当打开网页时，视频、声频是否应该下载
- `readyState`：返回当前视频、声频的准备状态
- `seekable`：返回代表视频、声频可移动播放部分的TimeRanges对象
- `seeking`：返回用户是否是在移动播放条
- `src`：设置或返回当前声频、视频资源
- `startDate`：返回代表当前时间偏差的Date对象
- `textTracks`：返回代表可用文本字幕的TextTrackList对象
- `videoTracks`：返回代表可用视频字幕的VideoTrackList对象
- `volume`：设置或安装视频、声频的音量

### HTML5 video、audio事件

- `onabort`：加载声频、视频过程中，因出错而中断时触发的事件
- `oncanplay`：浏览器可以播放声频、视频时触发的事件
- `oncanplaythrough`：当浏览器可以在不因缓冲而停顿的情况下播放时触发的事件
- `ondurationchange`：当声频、视频的时长已经更改时，即：duration属性的值变更时触发的事件
- `onemptied`：初始化元素时触发的事件
- `onended`：目前的播放列表结束时触发的事件
- `onerror`：加载声频、视频出错时触发的事件
- `onloadeddata`：当浏览器加载声频、视频当前帧结束后触发的事件
- `onloadedmetadata`：当浏览器已加载声频、视频的元数据（播放时间、视频宽、高等）时触发的事件
- `onloadstart`：当开始读入媒体数据时触发的事件
- `onpause`：声频、视频暂停时触发的事件
- `onplay`：声频、视频开始播放时触发的事件
- `onplaying`：声频、视频在暂停或者因缓冲被迫停止后又开始播放时触发的事件
- `onprogress`：浏览器正在下载媒体数据时触发的事件
- `onratechange`：媒体播放速度发生变化时触发的事件
- `onseeked`：用户改变播放位置后触发的事件
- `onseeking`：用户开始改变播放位置时触发的事件
- `onstalled`：浏览器下载媒体数据被意外中断了时触发的事件
- `onsuspend`：浏览器刻意不获取媒体数据时触发的事件
- `ontimeupdate`：目前播放位置已经更改后触发的事件
- `onvolumechange`：更改了音量时触发的事件
- `onwaiting`：视频因为需要下载下一帧而停止时触发的事件