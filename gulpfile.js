import gulp from 'gulp'
import {path} from './gulp/config/path.js'
import {copy} from "./gulp/tasks/copy.js";
import {_delete} from "./gulp/tasks/delete.js";
import {components} from "./gulp/tasks/components.js";
import {plugins} from './gulp/config/plugins.js'
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';


global.app = {
    path,
    gulp,
    plugins
}


function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.components, components)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
}


const mainTasks = gulp.parallel(copy, components, scss, js)

const dev = gulp.series(_delete, mainTasks, gulp.parallel(watcher, server))

gulp.task('default',  dev)