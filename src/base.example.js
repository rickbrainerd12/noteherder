import Rebase from 're-base'
import fireBase from 'firebase/app'
import database from 'firebase/database'

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

export default Rebase.createClass(db)