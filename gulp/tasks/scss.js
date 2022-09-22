import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';


const sass = gulpSass(dartSass);


export const scss = ()=> {
    return app.gulp.src(app.path.src.scss, { sourcemaps: true})
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
        grid: true,
        overrideBrowsersList: ["last 3 versions"],
        cascade: true
    }))
    .pipe(rename({
        extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
}