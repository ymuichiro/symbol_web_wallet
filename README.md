# 開発中のメモ

## qr camera
React18では、開発モードは意図的にuseEffectが2度呼ばれる。
以下Errorは都度検証の上、問題がなければ放置すること。

```
It was not possible to play the video. DOMException: The play() request was interrupted by a new load request. https://goo.gl/LdLk22
```

## ワンクリックハーベスト箇所 参考
https://github.com/ishidad2/desktop-wallet/releases/tag/v1.0.9-d

## 次
- 秘密鍵を保持するCredentialsAPIのWrapper開発
- 各ページへSDK適用
- SDKのSW外だし版作成
- DID機能実装

## 注意点
- 別サーバーからのリダイレクト時、受け取ったURLパラメーターで不正なJavascriptが実行されないか、確認しておく事

## 調査
Credentials API はブラウザのどの領域に格納されているか
Credentials API のローカルのデータはちゃんと暗号化されているのか
Credentials API では一度ブラウザの2要素認証が走るが、このSecureStorage的なものを直接使う低レベルAPIはないのか
ブラウザリダイレクト以外に、DeepLinkさせる方法は
NFTDrive は PWA に対応しているのか
PWA（Standalone）と通常時のindexedDBは倫理的に別領域となるのか
Credentials向けに namespace を現時点で取得しておくか？
