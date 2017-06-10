
# プラグインとは？
Grimoire.jsのほとんどの機能は、**ノード・コンポーネント** として実装されています。  
ノードやコンポーネントは、普通にjavascriptで追加することもできますが、複雑なものを作るときは、 **プラグイン** としてまとめるのがオススメです。  
プラグインにすることで、 **scriptタグで読み込むだけで利用できる** ようになります。
プラグインをゼロから作るのは大変なので、[プラグイン作成のためのツール](https://github.com/GrimoireGL/grimoirejs-cauldron)を用意してます。
`cauldron`コマンドでプラグインプロジェクトや、コンポーネントのテンプレートを生成してくれます。  

> テンプレートは **Typescript** です！ **Typescript** 書きましょう！
> (javascriptのサポートは手が回ってない)

# grimoirejs-cauldron
## インストール
`npm install -g grimoirejs-cauldron`
で一発。
## よく使うコマンド

- `cauldron init`
  - プロジェクトのテンプレートをカレントディレクトリに作成する。
  - 空のディレクトリをつくってからそこで実行。
    - `mkdir hoge && cd hoge && cauldron init`
  - 引数は `--name (-n)`が必須。プロジェクト名です。
- `cauldron scaffold`
  - コンポーネントや、コンバータのテンプレートを作成する。
  - プロジェクトルートで実行
  - 引数は、 `--type (-t)`, `--name(-n)`が必須。
    - `--type`は`component`か、`converter`を指定。
    - `--name`は名前。なんでもいい。

# プラグイン作成ことはじめ
- `html`, `goml`を用意します。
- プラグインを作る
  - `cauldron init -n grimoirejs-dena`
    - プロジェクト名は、 `grimoirejs-`で始まる文字列を推奨
    - そのあと、 `npm install`しておきましょう。(依存がインストールされる)
    - `npm run server`で簡易Webサーバが立ちます(macのみ？)
  - コンポーネントを作る
    - `cauldron scaffold -t component -n Rotate`で、テンプレート生成。
    - src/Componentsにできる
  - コンポーネントの中身を書く！詳細は＠＠＠＠＠＠＠
    - 先頭に`$`がついた関数は、 **メッセージレシーバ** と呼ばれ、自動的に呼ばれます。
    - `attributes` にはタグの属性を定義できる。

  - `main.ts`に、登録処理を書く！
    - `gr.registerComponent()`
  - ビルドする
    - `npm run build -- --env.browser`
    - `register`フォルダの中にある、*[プロジェクト名].js* をブラウザで読み込む！
  - GOMLに書いて、表示してみる
    - `npm run server`
