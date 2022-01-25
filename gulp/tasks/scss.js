import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

import cleanCss from 'gulp-clean-css'
import webpCss from 'gulp-webpcss'
import autoPrefixer from 'gulp-autoprefixer'
import groupCssMediaQueries from 'gulp-group-css-media-queries'


const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {sourcemaps: true})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SASS',
                message: 'Error <%= error.message %>'
            })
        ))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpCss({
            webClass: '.webp',
            noWebClass: '.no-webp'
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.plugins.replace(/@img\//g, '../files/img/'))
        .pipe(autoPrefixer({
            grid: true,
            overrrideBrowserlist: ['last 3 versions'],
            cascade: true
        }))
        .pipe(cleanCss())
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream())
}