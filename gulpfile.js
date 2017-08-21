/**
 * Created by songyingchun on 2017/8/17 0017.
 */
var gulp = require("gulp");
var del = require("del");
var useref = require('gulp-useref');
var browserSync = require('browser-sync').create();
var gulpSequence = require('gulp-sequence');                // 异步打包
var uglify = require("gulp-uglify");
var pump = require("pump");
var imagemin = require("gulp-imagemin"); // 图片压缩
var pngquant = require("imagemin-pngquant"); // 深度压缩
var livereload = require("gulp-livereload"); // 网页自动刷新（文件变动后即时刷新页面）
var webserver = require("gulp-webserver"); // 本地服务器
var rename = require("gulp-rename"); // 本地服务器
var sourcemaps = require("gulp-sourcemaps"); // 本地服务器
var concat = require("gulp-concat"); // 文件合并
var changed = require("gulp-changed"); // 只操作有过修改的文件
var autoprefixer = require("autoprefixer"); // 自动添加CSS3浏览器前缀
var cache = require("gulp-cache"); // 图片缓存
var notify = require("gulp-notify"); // notify
var htmlmin = require("gulp-htmlmin"); // html
var rev = require("gulp-rev"); // rev
var revappend = require("gulp-rev-append"); // rev

var babel = require("gulp-babel"); // babel
var browserify = require("gulp-browserify"); // browserify

var sprites = require('postcss-sprites').default;

// css
var csslint = require('gulp-csslint');
var postcss = require("gulp-postcss"); // postcss
var cssnext = require("postcss-cssnext"); // cssnext
var sass = require("gulp-sass");
var cssnano = require("cssnano");
var px2rem = require('postcss-px2rem');//px转换成rem
var uncss = require('gulp-uncss');

var PATH = {
    DIR: __dirname,
    SRC: "./src",
    DIST: "./dist",
    SRC_SASS: ["./src/**/*.sass", "./src/**/*.scss"],
    SRC_CSS: "./src/**/*.css",
    SRC_JS: ["./src/**/*.js"],
    SRC_HTML: ["./src/**/*.html"],
    SRC_IMAGES: ["./src/**/*.{png,jpg,gif,svg}"]
};

gulp.task("clean", function() {
    return del([PATH.DIST]);
});

gulp.task("useref", function () {
    return gulp.src([PATH.SRC + "/**/*.html"])
        .pipe(useref())
        .pipe(gulp.dest(PATH.DIST));
});

gulp.task("sass", function () {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']}),
        cssnano(),
        px2rem({
            remUnit: 75
        }),
        cssnext
    ];
    return gulp.src(PATH.SRC_SASS.concat([PATH.SRC_CSS]))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(PATH.DIST))
});

gulp.task("js", function () {
    return gulp.src(PATH.SRC_JS)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(PATH.DIST))
});

gulp.task("html", function () {
    return gulp.src(PATH.SRC_HTML)
        .pipe(gulp.dest(PATH.DIST))
});

gulp.task("images", function () {
    return gulp.src(PATH.SRC_IMAGES)
        .pipe(gulp.dest(PATH.DIST))
});

gulp.task('move-other-images', function() {
    return gulp.src([PATH.SRC + 'images/**/*.*!(jpg|png)', PATH.SRC + 'components/icon/**/*.*!(jpg|png)'])
        .pipe(gulp.dest(PATH.DIST));
});

// 监听任务
gulp.task("watch",function(){
    // 监听 html
    gulp.watch(PATH.SRC_HTML, ["html"]);
    // 监听 css
    gulp.watch(PATH.SRC_SASS.concat([PATH.SRC_CSS]), ["css"]);
    // 监听 images
    gulp.watch(PATH.SRC_IMAGES, ["images"]);
    // 监听 js
    gulp.watch(PATH.SRC_JS, ["js"]);

    livereload.listen();

    gulp.watch(PATH.DIST).on("change", livereload.changed);
});

gulp.task("sequence", gulpSequence(
    'clean', 'sass', 'js', 'html', 'images', 'watch'
));

gulp.task("webserver", function() {
    gulp.src(PATH.DIST) // 服务器目录（.代表根目录
        .pipe(webserver({ // 运行gulp-webserver
            livereload: true, // 启用LiveReload
            open: true, // 服务器启动时自动打开网页
            port: 8888
        }));
});

gulp.task("development", ["sequence"], function () {
    gulp.start("webserver");
});

gulp.task("default", [process.env.NODE_ENV]);

// if(env === "production") {
//     gulp.task("html:compress", function () {
//         var options = {
//             removeComments: true,//清除HTML注释
//             collapseWhitespace: true,//压缩HTML
//             collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
//             removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//             removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
//             removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
//             minifyJS: true,//压缩页面JS
//             minifyCSS: true//压缩页面CSS
//         };
//         gulp.src("./index.html")
//             .pipe(htmlmin(options))
//             .pipe(gulp.dest(buildPath));
//     });
//
//     gulp.task("css:compress", function () {
//         gulp.src(["./src/css/*.scss", "./src/css/*.sass"], {base: "./src"})
//             .pipe(sass({
//                 outputStyle: "compressed"
//             }).on("error", sass.logError))
//             .pipe(gulp.dest(buildPath));
//
//         gulp.src("./src/css/*.less", {base: "./src"})
//             .pipe(less())
//             .pipe(gulp.dest(buildPath));
//
//         gulp.src("./src/css/*.css", {base: "./src"})
//             .pipe(gulp.dest(buildPath));
//     });
//
//     gulp.task("js:compress", function () {
//         pump([
//             gulp.src("./src/js/*.js", {base: "./src"}),
//             rename({ suffix: ".min"}),
//             sourcemaps.init(),
//             uglify(),
//             sourcemaps.write("maps"),
//             gulp.dest(buildPath)
//         ]);
//     });
//
//     gulp.task("clean", function() {
//         gulp.src(["dist/**/maps"], {read: false})
//             .pipe(clean());
//     });
//
//     gulp.task("images:compress", function(){
//         return gulp.src("./src/images/*.{png,jpg,gif,svg}", {base: "./src"}) // 指明源文件路径、并进行文件匹配
//             .pipe(changed(buildPath + "/images"))
//             .pipe(cache(imagemin({
//                 progressive: true, // 无损压缩JPG图片
//                 svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
//                 use: [pngquant()] // 使用pngquant插件进行深度压缩
//             })))
//             .pipe(gulp.dest(buildPath)); // 输出路径
//     });
//
//     gulp.task("default", ["html:compress", "css:compress", "js:compress", "images:compress"]);
// }
//


