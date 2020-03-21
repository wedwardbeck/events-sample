module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: ["@nuxtjs", "plugin:nuxt/recommended"],
    plugins: ["vue"],
    // add your custom rules here
    rules: {
        // allow async-await
        "generator-star-spacing": "off",
        // allow paren-less arrow functions
        "arrow-parens": "off",
        "one-var": "off",
        "no-extra-semi": "off",
        "indent": "off",
    
        "import/first": "off",
        "import/named": "error",
        "import/namespace": "error",
        "import/default": "error",
        "import/export": "error",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "import/no-extraneous-dependencies": "off",
        "prefer-promise-reject-errors": "off",
        quotes: "off",
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        "space-before-function-paren": "off",
        "vue/attribute-hyphenation": "off",
        "vue/require-prop-types": "off",
        'vue/multiline-html-element-content-newline': 'warn',
        "no-unused-vars": "warn",
        "vue/script-indent": "off",
    }
};
