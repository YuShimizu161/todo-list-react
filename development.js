import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default {
  mode: 'development',
  entry: src + '/index.jsx',

  output: {
    path: dist,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.jsx$/, // ローダー処理対象ファイル拡張子
        exclude: /node_modules/,  // ローダーの処理から外すディレクトリ
        loader: 'babel-loader' // 利用するローダー
      },
      { // cssをハンドルする機能
        test: /\.scss/,
        use: [
          "style-loader", // linkタグに出力する
          {
            loader: "css-loader",
            options: {
              url: false, // url()メソッドの取り込みを禁止する
              sourceMap: true, // true/false は開発環境か本番環境で分ける
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true // true/false は開発環境か本番環境で分ける
            }
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      filename: 'index.html'
    })
  ]
}