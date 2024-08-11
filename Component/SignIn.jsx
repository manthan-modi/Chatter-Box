import { GoogleAuthProvider } from "firebase/auth"
import { signInWithPopup } from "firebase/auth";
import {auth} from '../FireBaseAuth'
import {Button, Stack} from '@mui/material'

const SignIn = ()=> {
    const handleGoogle = async ()=> {
        const provider =  await new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    return (
      <>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          flexDirection={"column"}
        >
          <h1 style={{ color: "#00FFFF" }}>Welcome To Chat Bot</h1>
          <Button
            type="button"
            sx={{ m: 2, justifyContent: "center" }}
            variant="contained"
            disableElevation
            size="medium"
            color="primary"
            onClick={handleGoogle}
          >
            Sign In
          </Button>
          <p style={{ color: "#00FFFF" }}>Authenticate using Google</p>
        </Stack>
      </>
    );
}

export default SignIn;

