//在画布中获取特定颜色的像素数量
function getPixelAmount(canvas, r, g, b) {
    let cx = canvas.getContext('2d');
    let pixels = cx.getImageData(0, 0, canvas.width, canvas.height);
    let all = pixels.data.length;
    let amount = 0;
    for (let i = 0; i < all; i += 4) {
        if (pixels.data[i] === r &&
            pixels.data[i + 1] === g &&
            pixels.data[i + 2] === b) {
            amount++
        }
    }
    return amount
}

//在画布中获取某一个像素的颜色
function getPixelColour(canvas, x, y) {
    let cx = canvas.getContext('2d');
    let pixel = cx.getImageData(x, y, 1, 1);
    return {
        r: pixel.data[0],
        g: pixel.data[1],
        b: pixel.data[2],
        a: pixel.data[3]
    };
}

//将图像文件转换为base64字符串
function loadImageFile(url, callback) {
    var canvas = document.createElement('canvas');
    var ctxt = canvas.getContext('2d');
    var image = new Image();
    image.src = url;
    return new Promise((accept, reject) => {
        image.onload = accept;
        image.onerror = reject;
    }).then(accept => {
        canvas.width = this.width;
        canvas.height = this.height;
        ctxt.clearRect(0, 0, this.width, this.height);
        ctxt.drawImage(this, 0, 0);
        accept(canvas.toDataURL());
    });
}

//链式调用方法

function Canvas2DContext(canvas) {
    if (typeof canvas === 'string') {
        canvas = document.getElementById(canvas);
    }
    if (!(this instanceof Canvas2DContext)) {
        return new Canvas2DContext(canvas);
    }
    this.context = this.ctx = canvas.getContext('2d');
    if (!Canvas2DContext.prototype.arc) {
        Canvas2DContext.setup.call(this, this.ctx);
    }
}
Canvas2DContext.setup = function() {
    var methods = ['arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip',
        'closePath', 'drawImage', 'fill', 'fillRect', 'fillText', 'lineTo', 'moveTo',
        'quadraticCurveTo', 'rect', 'restore', 'rotate', 'save', 'scale', 'setTransform',
        'stroke', 'strokeRect', 'strokeText', 'transform', 'translate'];

    var getterMethods = ['createPattern', 'drawFocusRing', 'isPointInPath', 'measureText', // drawFocusRing not currently supported
        // The following might instead be wrapped to be able to chain their child objects
        'createImageData', 'createLinearGradient',
        'createRadialGradient', 'getImageData', 'putImageData'
    ];

    var props = ['canvas', 'fillStyle', 'font', 'globalAlpha', 'globalCompositeOperation',
        'lineCap', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowOffsetX', 'shadowOffsetY',
        'shadowBlur', 'shadowColor', 'strokeStyle', 'textAlign', 'textBaseline'];

    for (let m of methods) {
        let method = m;
        Canvas2DContext.prototype[method] = function() {
            this.ctx[method].apply(this.ctx, arguments);
            return this;
        };
    }

    for (let m of getterMethods) {
        let method = m;
        Canvas2DContext.prototype[method] = function() {
            return this.ctx[method].apply(this.ctx, arguments);
        };
    }

    for (let p of props) {
        let prop = p;
        Canvas2DContext.prototype[prop] = function(value) {
            if (value === undefined)
                return this.ctx[prop];
            this.ctx[prop] = value;
            return this;
        };
    }
};

var canvas = document.getElementById('canvas');

// Use context to get access to underlying context
var ctx = Canvas2DContext(canvas)
    .strokeStyle('rgb(30, 110, 210)')
    .transform(10, 3, 4, 5, 1, 0)
    .strokeRect(2, 10, 15, 20)
    .context;

// Use property name as a function (but without arguments) to get the value
var strokeStyle = Canvas2DContext(canvas)
    .strokeStyle('rgb(50, 110, 210)')
    .strokeStyle();
