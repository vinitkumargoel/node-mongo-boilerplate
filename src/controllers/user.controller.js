const {user_model} = require("../database/models");

exports.save = data => user_model.create(data);
