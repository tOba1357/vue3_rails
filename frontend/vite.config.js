const path = require('path')

export default {
    port: 8080,
    alias: {
        '/@/': path.resolve(__dirname, 'src')
    }
}
