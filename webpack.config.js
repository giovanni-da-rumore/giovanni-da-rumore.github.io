const path = require('path');
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin his work
  entry: ['babel-polyfill', './src/javascript/index.js', './src/scss/index.scss'],

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: 'public/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader"
        ]
     },
        {
            test: /\.(png|jpg|gif|jpeg)$/i,
            use: [
                {
                loader: 'url-loader',
                // options: {
                //     limit: 8192,
                // },
                },
            ],
        },
    ]
 },

 plugins: [
   new webpack.LoaderOptionsPlugin({
     options: {
       postcss: [
         autoprefixer()
       ]
     }
   }),
   new MiniCssExtractPlugin({
       filename: "bundle.css"
     })

 ],
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: "bundle.css"
  //   })
  // ],

  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle.
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
  // mode: 'production'
};
