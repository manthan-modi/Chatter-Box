import {useState } from "react";
import {addDoc, collection, query} from 'firebase/firestore';
import { Button, Stack, Box, TextField, Typography} from "@mui/material";
import  { auth } from '../FireBaseAuth'
import SignOut from "./SignOut";
import {useCollectionData } from "react-firebase-hooks/firestore";
import {db} from '../FireBaseAuth'
import { DisplayMessage } from "./DisplayMessage";
import SendIcon from "@mui/icons-material/Send"

const ChatBox = ()=> {    
    const {uid, email, photoURL} = auth.currentUser;
    const [message, setMessage] = useState("");
    const q = query(collection(db,'Messages'));
    const [value] = useCollectionData(q, {inField: 'id'});
    const username = email.split("@")[0];
    const handleMessage = async (e)=>  {
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
    return (
      <>
        <Stack
          direction="row"
          alignItems="middle"
          justifyContent="space-between"
          sx={{
            backgroundColor: "#00308F",
            paddingLeft: "2rem",
            paddingBottom: "1rem",
            position: 'fixed',
            width:'100%',
            top:'0',
            zIndex:1
          }}
        >
          <Typography variant="h4" sx={{ marginTop: "1rem", color: "#00FFFF" }}>
            Chatter-Box
          </Typography>
          <SignOut></SignOut>
        </Stack>
        <Box>
          {value &&
            value.map((info) => {
              return (
                <DisplayMessage info={info} key={info.time} sx= {{marginBottom: '10rem'}}></DisplayMessage>
              );
            })}
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ position: "fixed", bottom: 1, width: "100%", }}
        >
          <TextField
            sx={{ input: { background: "#00308F", color:'#00FFFF' } }}
            color="primary"
            zIndex="1"
            style={{ width: "100%" }}
            id="outlined-basic"
            label={username}
            variant="filled"
            size="small"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleMessage();
              }
            }}
          />
          <Box sx={{ gap: 2 }}>
            <Button
              type="button"
              sx={{ m: 2, justifyContent: "center" }}
              variant="contained"
              disableElevation
              endIcon={<SendIcon />}
              size="medium"
              onClick={handleMessage}
              color="primary"
            >
              Message
            </Button>
          </Box>
        </Stack>
      </>
    );
}

export default ChatBox;