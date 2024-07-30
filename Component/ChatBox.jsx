import {useState } from "react";
import {addDoc, collection, query,getFirestore, QuerySnapshot, Firestore, getDoc, orderBy, limit} from 'firebase/firestore';
import  { auth } from '../FireBaseAuth'
import SignOut from "./SignOut";
import {useCollectionData } from "react-firebase-hooks/firestore";
import {db} from '../FireBaseAuth'
import { DisplayMessage } from "./DisplayMessage";
import { Button } from "@mui/material";
const ChatBox = ()=> {    
    const {uid, email, photoURL} = auth.currentUser;
    const [message, setMessage] = useState("");
    const q = query(collection(db,'Messages'));
    const [value, isLoading, error] = useCollectionData(q, {inField: 'id'});
    const handleMessage = async ()=>  {
        if (message.trim == "") return;
        await addDoc(collection(db,'Messages'), {
          text: message,
          uid,
          email,
          photoURL,
          time: Date.now(),
        });
        setMessage('');
    }
    return <>
        <h1>Hello</h1>
        <SignOut></SignOut>
        <div>
            {value && value.map((info)=> {
                return <DisplayMessage info = {info} key = {info.time}></DisplayMessage>
            })}
        </div>
        <input type="text" onChange={(e)=>setMessage(e.target.value)} placeholder="Enter Your name Here"/>
        <Button varinat="contained"onClick={handleMessage}>Send</Button>
    </>
}

export default ChatBox;