const development = require('./development');
const production = require('./production');
const {NODE_ENV, PORT} = process.env;

const config = {
    DEV: development,
    PRO: production,
};

const final = config[NODE_ENV];

final.port = PORT || 8080;

module.exports = final;
