import { Stack, Typography, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useEffect, useRef } from "react";
import { auth } from "../FireBaseAuth";

export const DisplayMessage = (props) => {
  const isMine = props.info.uid === auth.currentUser?.uid;
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [props.info]);

  return (
    <>
      <Stack
        sx={{
          marginTop: "10px",
          marginX: "20px",
          maxWidth: "70%",
          wordBreak: "break-word",
          marginBottom: "1rem",
          alignItems: isMine ? "flex-start" : "flex-end",
          alignSelf: isMine ? "flex-start" : "flex-end",
        }}
        direction={isMine ? "row" : "row-reverse"}
      >
        <Avatar
          sx={{
            marginRight: isMine ? "1rem" : "0",
            marginLeft: isMine ? "0" : "1rem",
            width: 50,
            height: 50,
            border: "3px solid #00FFFF",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
          }}
          alt="User Avatar"
          src={props.info.photoURL || "/default-avatar.png"} // Fallback image
        />
        <Paper
          elevation={5}
          sx={{
            padding: "1rem",
            borderRadius: "16px",
            backgroundColor: isMine ? "#1E90FF" : "#32CD32",
            color: "#FFFFFF",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Typography
            sx={{
              wordWrap: "break-word",
              fontSize: "1rem",
              fontWeight: "600",
            }}
            variant="body1"
          >
            {props.info.text}
          </Typography>
        </Paper>
      </Stack>
      <div ref={messageEndRef} />
    </>
  );
};
