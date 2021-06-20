import { useEffect } from 'react';
import firebase from 'firebase'

export default function Login() {
  useEffect(async () => {
    // memo: next.jsのようなSSRフレームワークだと、firebaseuiをeffectの外で初期化するとwindowが見つからず初期化に失敗する
    const firebaseui = await import('firebaseui')
    const ui = new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        uiShown: function () {
          document.getElementById('loader').style.display = 'none';
        },
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // memo: trueだとredirectが行われるため。今回は不要なのでfalseを返しておく
          return false;
        }
      },
    });
  })

  return (
    <div>
      <h1>Welcome to My Awesome App</h1>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  )
}