import { useState } from "react";
import { addDoc, collection, query, orderBy } from "firebase/firestore";
import { Button, Stack, Box, TextField, Typography } from "@mui/material";
import { auth, db } from "../FireBaseAuth";
import SignOut from "./SignOut";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { DisplayMessage } from "./DisplayMessage";
import SendIcon from "@mui/icons-material/Send";

const ChatBox = () => {
  const { uid, email, photoURL } = auth.currentUser;
  const [message, setMessage] = useState("");

  // Ensure messages are ordered by timestamp
  const q = query(collection(db, "Messages"), orderBy("time", "asc"));
  const [value] = useCollectionData(q, { idField: "id" });

  const username = email.split("@")[0];

  const handleMessage = async (e) => {
    if (message.trim() === "") return;
    await addDoc(collection(db, "Messages"), {
      text: message,
      uid,
      email,
      photoURL,
      time: Date.now(),
    });
    setMessage("");
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          backgroundColor: "#00308F",
          padding: "1rem",
          position: "fixed",
          width: "100%",
          top: 0,
          zIndex: 1,
        }}
      >
        <Typography variant="h4" sx={{ color: "#00FFFF" }}>
          Chatter-Box
        </Typography>
        <SignOut />
      </Stack>

      {/* Scrollable Messages Container */}
      <Box
        sx={{
          marginTop: "5rem",
          padding: "1rem",
          height: "80vh",
          overflowY: "auto", // Enables scrolling
          display: "flex",
          flexDirection: "column",
        }}
      >
        {value &&
          value.map((info) => <DisplayMessage info={info} key={info.time} />)}
      </Box>

      {/* Input Field & Send Button */}
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "#00308F",
          padding: "1rem",
        }}
      >
        <TextField
          sx={{ input: { background: "#00308F", color: "#00FFFF" } }}
          variant="filled"
          size="small"
          fullWidth
          label={username}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleMessage();
            }
          }}
        />
        <Button
          variant="contained"
          disableElevation
          endIcon={<SendIcon />}
          size="medium"
          onClick={handleMessage}
          color="primary"
          sx={{ ml: 2 }}
        >
          Send
        </Button>
      </Stack>
    </>
  );
};

export default ChatBox;
