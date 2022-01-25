
export default {
    output: {
        filename: 'app.min.js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: ['babel-loader'],
              },
        ]
    }
}