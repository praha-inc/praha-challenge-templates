import Login from './login'
import firebase from 'firebase'
import "firebase/auth";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // todo: ここに自身のfirebaseProjectのconfig情報を挿入する
    const config = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: ""
    }
    firebase.initializeApp(config);

    // ユーザーがログインしたら、この関数が呼び出される
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // このaccessTokenをAPIに送信する
        const accessToken = await user.getIdToken()
        window.alert(`ユーザー「${user.displayName}」のアクセストークンを取得しました: ${accessToken}`)
      }
    });
  }, [])
  return (
    <div>
      <Login />
    </div>
  )
}
