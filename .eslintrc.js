module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
        "rules": {
            'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-max-props-per-line': [
        2,
        { maximum: 1, when: 'multiline' },
        ],
        'react/jsx-indent-props': [2, 2],
        'react/jsx-closing-bracket-location': [
        2,
        'tag-aligned',
        ],
        "indent": [
            "error",
            false
        ],
        "linebreak-style": [
            "error",
            "false"
        ],
        "quotes": [
            "error",
            "false"
        ],
        "semi": [
            "error",
            "false"
        ]
    }
};

// "bracketSpacing": true,
// 	"singleQuote": true,
// 	"semi": false,
// 	"useTabs": false,
// 	"tabWidth": 2,
// 	"trailingComma": "none"