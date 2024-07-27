import { useState } from "react";
import {addDoc, collection, doc, getFirestore, setDoc} from 'firebase/firestore';
import fireBaseApp, { auth } from '../FireBaseAuth'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import SignOut from "./SignOut";
const db = getFirestore(fireBaseApp);
const ChatBox = ()=> {
    const {uid, email, photoURL} = auth.currentUser;
    const [message, setMessage] = useState("");
    console.log(uid, email, photoURL, message);
    const handleMessage = async ()=>  {
        if (message.trim == "") return;
        await addDoc(collection(db, "Messages"), {
          text: message,
          uid,
          email,
          photoURL,
        });
        setMessage('');
    }
    return <>
        <h1>Hello</h1>
        <SignOut></SignOut>
        <input type="text" onChange={(e)=>setMessage(e.target.value)} placeholder="Enter Your name Here"/>
        <button onClick={handleMessage}>Send</button>
    </>
}

export default ChatBox;