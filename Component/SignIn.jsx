import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../FireBaseAuth";
import { Button, Stack, Typography } from "@mui/material";

const SignIn = () => {
  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      spacing={2}
    >
      <Typography variant="h4" sx={{ color: "#00FFFF", fontWeight: "bold" }}>
        Welcome To Chat Bot
      </Typography>
      <Button
        type="button"
        sx={{ m: 2, padding: "10px 20px", fontSize: "1rem" }}
        variant="contained"
        disableElevation
        size="large"
        color="primary"
        onClick={handleGoogle}
      >
        Sign In with Google
      </Button>
      <Typography variant="body2" sx={{ color: "#00FFFF" }}>
        Authenticate using Google
      </Typography>
    </Stack>
  );
};

export default SignIn;
