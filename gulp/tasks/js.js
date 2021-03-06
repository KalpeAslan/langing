import webpackStream from 'webpack-stream'
import webpackConfig from '../../webpack.config.js'
import  webpack from 'webpack'


export const js = () => {
    return app.gulp.src(app.path.src.js, {
        })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'JS',
                message: 'Error <%= error.message %>'
            })
        ))
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream())
}