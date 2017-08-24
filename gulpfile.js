/**
 * Created by songyingchun on 2017/8/17 0017.
 */
const gulp = require("gulp");
const del = require("del");
const gulpSequence = require("gulp-sequence");                // 异步打包
const sourcemaps = require("gulp-sourcemaps"); // sourcemaps
const concat = require("gulp-concat"); // 文件合并
const browserSync = require("browser-sync").create();

// html
const useref = require("gulp-useref");
const htmlmin = require("gulp-htmlmin"); // html

// css
const csslint = require("gulp-csslint");
const postcss = require("gulp-postcss"); // postcss
const cssnext = require("postcss-cssnext"); // cssnext
const sass = require("gulp-sass");
const cssnano = require("cssnano");
const px2rem = require("postcss-px2rem");//px转换成rem
const uncss = require("gulp-uncss");
const autoprefixer = require("autoprefixer"); // 自动添加CSS3浏览器前缀
const mincss = require("gulp-minify-css"); // 自动添加CSS3浏览器前缀

// js
const uglify = require("gulp-uglify");
const pump = require("pump");
const rename = require("gulp-rename"); // 本地服务器
const babel = require("gulp-babel"); // babel
const eslint = require("gulp-eslint"); // babel
const browserify = require("gulp-browserify"); // browserify
const rev = require("gulp-rev"); // rev
const revCollector = require("gulp-rev-collector"); // rev
const jsx = require("gulp-jsx"); // rev
const react = require("gulp-react"); // rev
const webpack = require("gulp-webpack"); // rev
const es2015 = require("babel-preset-es2015"); // rev


// images
const imagemin = require("gulp-imagemin"); // 图片压缩
const pngquant = require("imagemin-pngquant"); // 深度压缩
const sprites = require("postcss-sprites").default;
const cache = require("gulp-cache"); // 图片缓存

// PATH
const PATH = {
    SRC: "./src",
    DIST: "./dist",
    SRC_CSS: ["./src/**/*.{sass,scss,css}"],
    SRC_JS: ["./src/**/*.js"],
    SRC_JSX: ["./src/**/*.jsx"],
    SRC_HTML: ["./src/**/*.html"],
    SRC_IMAGES: ["./src/**/*.{png,jpg,gif,svg}"],
    DIST_JS: ["./dist/**/*.js"]
};

gulp.task("clean", function() {
    return del([PATH.DIST]);
});

gulp.task("html", function () {
    return gulp.src(PATH.SRC_HTML)
        .pipe(gulp.dest(PATH.DIST))
});

gulp.task("js", function () {
    return gulp.src(PATH.SRC_JS)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(PATH.DIST))
});

gulp.task("jsx", function () {
    return gulp.src(PATH.SRC_JSX)
        .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(babel())
        .pipe(gulp.dest(PATH.DIST))
});

gulp.task("css", function () {
    const plugins = [
        autoprefixer({browsers: ["last 1 version"]}),
        cssnano(),
        px2rem({
            remUnit: 75
        }),
        cssnext
    ];
    return gulp.src(PATH.SRC_CSS)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(PATH.DIST))
});

gulp.task("images", function () {
    return gulp.src(PATH.SRC_IMAGES)
        .pipe(gulp.dest(PATH.DIST))
});

gulp.task("move-other-images", function() {
    return gulp.src([PATH.SRC + "images/**/*.*!(jpg|png)", PATH.SRC + "components/icon/**/*.*!(jpg|png)"])
        .pipe(gulp.dest(PATH.DIST));
});

// 监听任务
gulp.task("watch",function(){
    // 监听 html
    gulp.watch(PATH.SRC_HTML, ["html"]);
    // 监听 css
    gulp.watch(PATH.SRC_CSS, ["css"]);
    // 监听 images
    gulp.watch(PATH.SRC_IMAGES, ["images"]);
    // 监听 js
    gulp.watch(PATH.SRC_JS, ["js"]);
    // 监听 jsx
    gulp.watch(PATH.SRC_JSX, ["jsx"]);

    gulp.watch(PATH.DIST).on("change", browserSync.reload);
});

gulp.task("development", gulpSequence(
    "clean", "css", "js", "html", "images", "watch", "bs"
));

gulp.task("min-html", function (){
    const options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(PATH.SRC_HTML)
        .pipe(htmlmin(options))
        .pipe(useref())
        .pipe(revCollector())
        .pipe(gulp.dest(PATH.DIST));
});

gulp.task("min-js", function () {
    return pump([
        gulp.src(PATH.SRC_JS),
        babel(),
        eslint(),
        browserify({
            insertGlobals : true
        }),
        uglify(),
        // rev(),
        gulp.dest(PATH.DIST),
    ]);
});

gulp.task("min-jsx", function () {
    return pump([
        gulp.src(PATH.SRC_JSX),
        react(),
        babel(),
        eslint(),
        browserify({
            insertGlobals : true
        }),
        uglify(),
        // rev(),
        gulp.dest(PATH.DIST),
    ]);
});


gulp.task("min-css", function (){
    const plugins = [
        autoprefixer({browsers: ["last 1 version"]}),
        cssnano(),
        px2rem({
            remUnit: 75
        }),
        cssnext
    ];
    gulp.src(PATH.SRC_CSS)
        .pipe(sass())
        .pipe(uncss({
            html: PATH.SRC_HTML
        }))
        .pipe(postcss(plugins))
        .pipe(mincss({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            keepSpecialComments: "*"
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest(PATH.DIST));
});

gulp.task("min-images", function() {
    return gulp.src(PATH.SRC_IMAGES)
        .pipe(imagemin())
        .pipe(gulp.dest(PATH.DIST));
});

gulp.task("bs", function() {
    browserSync.init({
        files: "**", //监听整个项目
        open: "external",
        server: {
            baseDir: "./dist/",
            index: "index.html"
        }
    });
});

// 监听任务
gulp.task("min-watch",function(){
    // 监听 html
    gulp.watch(PATH.SRC_HTML, ["min-html"]);
    // 监听 css
    gulp.watch(PATH.SRC_CSS, ["min-css"]);
    // 监听 images
    gulp.watch(PATH.SRC_IMAGES, ["min-images"]);
    // 监听 js
    gulp.watch(PATH.SRC_JS, ["min-js"]);
    // 监听 js
    gulp.watch(PATH.SRC_JSX, ["min-jsx"]);

    gulp.watch(PATH.DIST).on("change", browserSync.reload);
});

gulp.task("production", gulpSequence(
    "clean", "min-css", "min-js", "min-jsx", "min-images", "min-html", "min-watch", "bs"
));

gulp.task("default", [process.env.NODE_ENV]);
