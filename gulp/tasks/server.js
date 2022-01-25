export const server  = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.components}`,
        },
        notify: true,
        port: 3000
    })
}