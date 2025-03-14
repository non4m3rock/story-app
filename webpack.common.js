const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPluginConfig = {
  meta: {
    viewport:
      'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
    'theme-color': '#B8D576',
  },
  templateParameters: {
    brandName: 'Story App',
    navLinks: `
     <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link text-white" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="addstory.html">Add Story</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-white" href="#">LogIn</a>
  </li>
</ul>
    `,
    footerContent: '<p class="text-center text-white mb-0">&copy;laputo</p>',
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/js/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [require('autoprefixer')],
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/views/home.html'),
      ...htmlWebpackPluginConfig,
    }),

    new HtmlWebpackPlugin({
      title: 'Add Story',
      filename: 'addstory.html',
      template: path.resolve(__dirname, 'src/views/addstory.html'),
      ...htmlWebpackPluginConfig,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
};
