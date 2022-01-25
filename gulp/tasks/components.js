import fileInclude from 'gulp-file-include'
import versionNumber from 'gulp-version-number'
import webpHtmlNoSvg from 'gulp-webp-html-nosvg'
import pug from 'gulp-pug'

export const components = () => {
    return app.gulp.src(app.path.src.components)
        .pipe(fileInclude())
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'HTML',
                message: 'Error <%= error.message %>'
            })
        ))
        // .pipe(pug({
        //     pretty: true,
        //     verbose: true
        // }))
        .pipe(app.plugins.replace(/@img\//g, 'files/img/'))
        .pipe(webpHtmlNoSvg())
        .pipe(versionNumber({
            value: '%DT%',
            append: {
                key: '_v',
                cover: 0,
                to: [
                    'css',
                    'js'
                ],
                output: {
                    file: 'gulp/version.json'
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.build.components))
        .pipe(app.plugins.browsersync.stream())
}