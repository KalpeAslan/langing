import * as pathApi from 'path'

const rootFolder = pathApi.basename(pathApi.resolve())

const buildFolder = './dist'
const srcFolder = './src'


export const path = {
    build: {
        components: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
    },
    src: {
        components: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/*.scss`,
        js: `${srcFolder}/js/app.js`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        js: `${srcFolder}/js/*.js`,
        scss: `${srcFolder}/scss/*.scss`,
        components: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/**/*.*`,
    },
    buildFolder,
    srcFolder,
    rootFolder,
}