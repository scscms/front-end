# 颜色互转<sup>shine</sup>

```javascript
    //颜色转为十六进制
    function colorToHex(color){
        let reg =
            /^rgb\(([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5]),\s*([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5]),\s*([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])\)$/i.exec(color)
        if (reg) {
            return '#' + reg.slice(1, 4).map(v => ('0' + Number(v).toString(16)).slice(-2)).join('')
        } else if (/^#[\da-f]{3}$/i.test(color)) {
            return color.replace(/([\da-f])/gi,'$1$1')
        }
        return color;
    }
    //十六进制颜色转Rgb
    function hexToRgb(hex) {
        let single = false
        let reg = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex)
        reg = reg ? (single = true, reg) : /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        if (reg) {
            let color = reg.slice(1, 4).map(v => parseInt(single ? v + v : v, 16)).join(',')
            return `rgb(${color})`
        } else {
            return hex
        }
    }
    //Rgb颜色转Hsl颜色
    function rgbToHsl(r, g, b) {
        r /= 255, g /= 255, b /= 255;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min){
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch(max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return [h, s, l];
    }
    //Hsl颜色转Rgb颜色
    function hslToRgb(h, s, l) {
        let r, g, b;
        if(s === 0) {
            r = g = b = l;
        } else {
            const hue2rgb = function hue2rgb(p, q, t) {
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
        return [Math.round(r * 255),Math.round(g * 255),Math.round(b * 255)];
    }
```
