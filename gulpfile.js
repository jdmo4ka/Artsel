const {src, dest, parallel, watch} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function scss() {
    return src('scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'] }))
    .pipe(cleancss(({ level: {1: {specialComments: 0}} })))
    .pipe(dest('css'));
}

function js() {
    return src('public/js-dev/**/*.js')
    .pipe(babel({presets: ['@babel/preset-env'] }))
    .pipe(uglify())
    .pipe(dest('public/js'));
}

function watchfile() {
    watch(['scss/*.scss'], scss);
    watch(['public/js-dev/*.js'], js);
}

exports.scss = scss;
exports.js = js;
exports.watchfile = watchfile;
exports.default = parallel(scss,js,watchfile);
