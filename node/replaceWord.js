//需要替换的文件路径(强烈建议复制出来)然后把本js文件复制进去使用node执行即可！
let fileName = "replaceWord.js";//本文件名，用于判断以防把本文档替换了
let findWord = ["http://"];//被替换的字符
let replaceWord = ["http:////"];//替换后的字符，与findWord对应
let fileExt = [".html",".js"];//需要替换的文件后缀
let fs = require("fs");
let path = require("path");
function loopWrite(filePath){
    fs.readdir(filePath,function(err,files){
        if(err)return;
        files.forEach(function(filename){
            fs.stat(path.join(filePath,filename),function(err, stats){
                if (err) throw err;
                if(stats.isFile() && filename != fileName && fileExt.includes(path.extname(filename))){
                    let file = filePath+"\\"+filename;
                    fs.readFile(file,'utf-8',function(err,data){
                        if(!err){
                            let str = data;
                            for(let i = findWord.length;i --;){
                                str = str.split(findWord[i]).join(replaceWord[i]);
                            }
                            fs.writeFile(file, str, function (err) {
                                if (err) throw err;
                                console.log(file);
                            });
                        }
                    });
                }else if(stats.isDirectory()){
                    loopWrite(path.join(filePath,filename));
                }
            });
        });
    });
}
loopWrite(path.resolve());