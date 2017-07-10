import Rebase from 're-base'
import fireBase from 'firebase/app'
import database from 'firebase/database'
import 'firebase/auth'

const app = fireBase.initializeApp(
    {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR AUTH DOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
  }
)

const db = database(app)

export const auth = app.auth()

export const googleProvider = new fireBase.auth.GoogleAuthProvider()


export default Rebase.createClass(db)