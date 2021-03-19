# Firebase Authentication 削除
tl:dr;
  firebaseのauthenticationを画面上から一括で削除できない＋CLIが存在しなかったので、一括で削除するNode.jsのscriptを作成した。

## Setup
firebaseの管理画面にログインして、firebase-adminのcredentialファイルをダウンロードし、ローカルに配置する。  
.env.exampleを参考に、.envファイルを定義する。


## How to use
`npm i`
`npm run delete`  


### メモ
とりあえず試してみたい方は、firebaseで適当なprojectを立てて、`npm run create`を実行してください。  
100個ダミーのアカウントが追加されます。