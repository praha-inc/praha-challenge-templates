# 手順
- `yarn start`　でサーバを起動
- `ngrok http 8080` でpublic-adsenseをngrokでホスティング
- public-a配下のindex.htmlとpublic-b配下のindex.htmlの13行目のngrokの向き先を修正
- `open localhost:8081` でlocalhost:8081を開く
- `open localhost:8080` でlocalhost:8080を開く
- ngrok(public-adsense)のクッキーが設定されている

- iframeを活用した3rdパーティクッキーの設定はブラウザによって挙動が異なる
  - safari/chrome: 設定されない
  - firefox: 設定される