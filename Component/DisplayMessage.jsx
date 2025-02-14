import { Stack, Typography, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { auth } from "../FireBaseAuth";

export const DisplayMessage = (props) => {
  const isMine = props.info.uid === auth.currentUser?.uid;

  return (
    <Stack
      sx={{
        marginTop: "10px",
        marginRight: "20px",
        maxWidth: "60%",
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
          width: 40,
          height: 40,
        }}
        alt="User Avatar"
        src={props.info.photoURL || "/default-avatar.png"} // Fallback image
      />
      <Paper
        elevation={3}
        sx={{
          padding: "0.8rem 1rem",
          borderRadius: "12px",
          backgroundColor: isMine ? "#00308F" : "#008000", // Different color for other user
        }}
      >
        <Typography
          sx={{ color: "#00FFFF", wordWrap: "break-word" }}
          variant="body1"
        >
          {props.info.text}
        </Typography>
      </Paper>
    </Stack>
  );
};
