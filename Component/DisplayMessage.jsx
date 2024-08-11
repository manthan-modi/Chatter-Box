import { Stack, Typography} from "@mui/material"
import Avatar from "@mui/material/Avatar";
export const DisplayMessage = (props)=> {
    return (
      <Stack
        sx={{
          marginTop: "30px",
          marginRight: "20px",
          width: "maxContent",
          textWrap: "true",
          wordBreak: "break-word",
          marginBottom: "2rem",
        }}
        direction="row"
      >
        <Avatar
          sx={{ marginRight: "1rem" }}
          alt="Travis Howard"
          src={props.info.photoURL}
        />
        <Typography sx={{marginTop:"0.5rem", color:'#00FFFF'}} variant="body1">{props.info.text}</Typography>
      </Stack>
    );
}

