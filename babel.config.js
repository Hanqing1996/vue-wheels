module.exports = {
    "presets": [["@babel/env", { "modules": false }]],
    "env": {
        "test": {
            "plugins": ["istanbul"]
        }
    }
}