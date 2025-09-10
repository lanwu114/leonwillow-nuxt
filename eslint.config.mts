import {antfu} from '@antfu/eslint-config'
import globals from 'globals'

export default antfu(
    {
        vue: true,
        typescript: true,
        ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/*.config.*'],
        stylistic: {
            semi: false,
            indent: 2,
        },
    },
    {
        rules: {
            'no-undef': 'off', // 关闭未定义变量检测
        },
    },
)
