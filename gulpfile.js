const gulp = require('gulp');
const del = require('del');

function clean() {
    return del(['dist/**', '!dist/html/**']);
}
 
exports.clean = clean;