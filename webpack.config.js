"use strict";

var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./app.jsx",
  output: { path: __dirname, filename: "bundle.js" },
  watch: true,
  module: {
   loaders: [
        {
            test: /\.jsx?$/,
            loader: "babel-loader",
            exclude: /(?:node_modules|bower_components)/,
            query: {
                presets: ["es2015", "react"]
            }
        },
        {
            test: /\.s?css$/,
            loader: ["style", "css", "sass"]
        }
        
    ]
  },
};