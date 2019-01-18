const isProduction = process.env.NODE_ENV === 'production'
var filePath = "ui/index.html";
//todo:
const winURL = false ? filePath : 'http://localhost:1025/'

var fs = nw.require("fs");
var path = nw.require("path");
var basePath = path.join(nw.App.dataPath, "/xxm");
if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
    var userData = {
        autoSaveIntervalSeconds: 8,
        tabs: [{
            text: "我的知识",
            url: '/'
        }],
        tabIndex: 0,
        userName:'',
        phoneNum:'',
        sex:'',
        domain:[],
        createAt: new Date().getTime()
    };
    fs.writeFileSync(path.join(basePath,"u.data"), JSON.stringify(userData));
    fs.writeFileSync(path.join(basePath,"a.data"), '[]');
    fs.writeFileSync(path.join(basePath,"t.data"), '[]');
}

nw.Window.open(winURL, {
    "width": 1000,
    "height": 600,
    "min_width": 1000,
    "min_height": 600,
    "frame": false
})