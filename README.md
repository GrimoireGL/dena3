
# このチュートリアルについて
このチュートリアルでは、Grimoire.jsのプラグインを作成することが目標です。
プラグインとは、`goml`で利用できるタグを新しく定義したり、既存のタグを拡張したりすることが可能になる仕組みです。
Grimoire.jsではプラグインを作成するための便利なツールとして、[grimoirejs-cauldron](https://github.com/GrimoireGL/grimoirejs-cauldron)を用意しています。

今回はgrimoirejs-cauldronを利用して、まずはシンプルにノードを回転させる`Rotate`コンポーネントを作成してみます。
そして、もう少し実用的なプラグインとして、webカメラの映像をテクスチャとして利用できるようにする`webcam-texture`ノードを作成します。

このリポジトリの`master`ブランチに、このチュートリアルで使うリソースを用意しています。
もし途中でうまく動かなくなってしまったら、`sample`ブランチに完成までの各ステップが用意されています。

# プラグインとは？
Grimoire.jsのほとんどの機能は、**ノード・コンポーネント** として実装されています。  
ノードやコンポーネントは、普通にjavascriptで追加することもできますが、複雑なものを作るときは、 **プラグイン** としてまとめるのがオススメです。  
プラグインにすることで、 **scriptタグで読み込むだけで利用できる** ようになります。
プラグインをゼロから作るのは大変なので、[プラグイン作成のためのツール](https://github.com/GrimoireGL/grimoirejs-cauldron)を用意してます。
`cauldron`コマンドでプラグインプロジェクトや、コンポーネントのテンプレートを生成してくれます。  

> テンプレートは **Typescript** です！ **Typescript** 書きましょう！

# grimoirejs-cauldron
## インストール
`npm install -g grimoirejs-cauldron`
## よく使うコマンド

- `cauldron init`
  - プロジェクトのテンプレートをカレントディレクトリに作成する。
  - **空のディレクトリをつくってから**そこで実行。
    - `mkdir hoge && cd hoge && cauldron init`
  - 引数は `--name (-n)`が必須。プロジェクト名です。
- `cauldron scaffold`
  - コンポーネントや、コンバータのテンプレートを作成する。
  - プロジェクトルートで実行
  - 引数は、 `--type (-t)`, `--name(-n)`が必須。
    - `--type`は`component`か、`converter`を指定。
    - `--name`は名前。なんでもいい。

# プラグイン作成ことはじめ
## リソース用意
`html`, `goml`を用意します。
(masterブランチにあります！)

## セットアップ
`cauldron init -n grimoirejs-hoge`

>プロジェクト名は、 `grimoirejs-`で始まる文字列を推奨  
>そのあと、 `npm install`しておきましょう。(依存がインストールされます)  
>`npm run server`で簡易Webサーバが立ちます(macのみ？)

## コンポーネントを作る
`cauldron scaffold -t component -n Rotate`で、テンプレートを生成します。
>src/Componentsにファイルができます。


### コンポーネントの中身を書く！
書き方の詳細は[ガイド](https://grimoire.gl/guide/1_essentials/05_componentsystem.html#Message-function)参照  
先頭に`$`がついた関数は、 **メッセージレシーバ** と呼ばれ、適当なタイミングで自動的に呼ばれます。  
`attributes` にはタグの属性を定義できます  
基本的には、`attributes`とメッセージレシーバを作ることがコンポーネント開発の基本的な手順です。

### `main.ts`に、登録処理を書く！
`gr.registerComponent()`

### ビルドする
`npm run build -- --env.browser`
または、
`npm run start -- --env.browser`

ビルド結果は、`/register`以下に出力されます。
その中の *[プロジェクト名].js* をブラウザで読み込みます！
