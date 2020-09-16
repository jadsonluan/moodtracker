module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "quotes": ["warn", "double"],
        "semi": ["warn", "never"],
        "indent": ["warn", 2]
    }
};
