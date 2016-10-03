const react = require("react");
const {DefaultRoute, NotFoundRoute, Route} = require("react-router");


module.exports = [<Route path="/" handler={require("../bundle.js")}  />];