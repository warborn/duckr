import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const htmlWebpackPluginConfig = new HtmlWebpackPlugin({template: './app/index.html'});

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
}

const config = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader : 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap&modules&localIdentName=[name]__[local]___[hash:base64:5]' }
    ]
  },
  resolve: {
    modules: [path.resolve('./app'), 'node_modules']
  }
}

const isProduction = process.env.NODE_ENV === 'production';
process.env.BABEL_ENV = isProduction ? 'production' : 'development';

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: PATHS.build,
    hot: true,
  },
  plugins: [htmlWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
}

const productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [
    htmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true, minimize: true })
  ]
}

export default Object.assign({}, config, 
  isProduction === true ? productionConfig : developmentConfig
);