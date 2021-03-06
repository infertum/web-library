var gulp = require('gulp');

var jshint = require('gulp-jshint');

var jscs  = require('gulp-jscs');

var nodeMon = require('gulp-nodemon');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('style', function() {

    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose: true
        }))
        .pipe(jscs('./.jscsrc'))
        .pipe(jscs.reporter());
});

gulp.task('inject', function() {

    var wiredep = require('wiredep').stream;
    
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false});

    var injectOptions = {
        ignorePath: '/public'
    };

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/lib',
        ignorePath: '../../public'
    };
    
    return gulp.src('./src/views/*.ejs')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['style', 'inject'], function() {
    var options = {
        script: 'app.js',
        delaytime: 1,
        env: {
            'port': 3000
        },
        watch: jsFiles
    };
    return nodeMon(options)
    .on('restart', function() {
        console.log('Restrating...');
    });
});