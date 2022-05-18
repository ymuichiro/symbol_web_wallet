# メモ

- 開発モードは意図的にuseEffectが2度呼ばれる。以下Errorは検証の上、問題がなければ放置すること。
```
It was not possible to play the video. DOMException: The play() request was interrupted by a new load request. https://goo.gl/LdLk22
```
- ワンクリックハーベスト箇所 参考
https://github.com/ishidad2/desktop-wallet/releases/tag/v1.0.9-d

次
- authページを作成
- 秘密鍵を保持するCredentialsAPIのWrapper開発
- 各ページへSDK適用
- SDKのSW外だし版作成
- DID機能実装

# Authページの要素
※ これはサイドバーに表示する必要はない

ログイン依頼時
- 接続中のサーバー情報
- どこのWebサイトからのログイン依頼か
- 提供するCrendential情報
- 認証開始BTN（いきなり認証に入ると、誤って認証する可能性がある）
- 認証時、一度接続先URLが相違ないか確認を入れる事
- ボタンではなくスライドによる開始（誤クリック防止）
- botによる自動認証防止となる CAPTCHA

注意点
- 別サーバーからのリダイレクト時、受け取ったURLパラメーターで不正なJavascriptが実行されないか、確認しておく事
