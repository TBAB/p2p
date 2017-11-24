/**
 * Created by zhaoyang on 2017/10/30.
 */
// 引入模块
var gulp=require('gulp');
var uglifyJS =require('gulp-uglify');
var rename=require('gulp-rename');
var cleanCSS=require('gulp-clean-css');
var del=require('del');
var less = require('gulp-less');
var runSequence=require('run-sequence');
var livereload=require('gulp-livereload');
var webserver=require('gulp-webserver');

// 分配任务

// 压缩JS
gulp.task('uglifyJS',function () {


});

// 改名字
gulp.task('rename',function () {


});

// 压缩cssvar less = require('gulp-less');
gulp.task('cleanCSS',function () {

    
});

// less
gulp.task('less', function() {
    gulp.src('./styles/less/*.less')
        .pipe(less())
        .pipe(rename({
            extname : '.css'
        }))
        .pipe(gulp.dest('./styles/css'));
});

// web服务器
gulp.task('webServer',function () {
        gulp.src("./") //服务器目录
        .pipe(webserver({  //运行livereload
            port : '8080',
            livereload:true, //启用livereload
            open:true //服务器启东市自动打开网页
        }))
});

// 删除
gulp.task('cleanDIR',function () {


});

// 代码观察者
gulp.task('watch', function() {
    gulp.watch('styles/less/*.less',['less']);
});

gulp.task('livereload ',function () {


});

gulp.task('runSequence',function () {


});

gulp.task('default', function() {
     runSequence(['webServer','watch']);
});

gulp.task('default', function() {
    runSequence(['webServer','watch']);
});

// cnpm i --save-dev gulp-uglify gulp-rename gulp-clean-css gulp-imagemin del run-sequence gulp-livereload gulp-webserver less gulp-less