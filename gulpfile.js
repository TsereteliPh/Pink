const gulp = require('gulp');
const del = require('del');
const less = require('gulp-less');
const sourcemap = require('gulp-sourcemaps');

const paths = {
    styles: {
        src: 'src/less/**/*.less',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/scripts/'
    },
    img: {
        src: 'src/img/**',
        dest: 'dist/img/'
    }
};

//Функция для очистки финальной папки

function clean() {
    return del(['dist/**', '!dist/html/**']);
}

//Функция обработки стилей

function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sourcemap.init())
    .pipe(less())
    

}
 
exports.clean = clean;