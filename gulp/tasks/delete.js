import del from 'del'

export const _delete = () => {
    return del(app.path.buildFolder)
}