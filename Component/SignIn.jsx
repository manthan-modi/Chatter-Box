import { GoogleAuthProvider } from "firebase/auth"
import { signInWithPopup } from "firebase/auth";
import {auth} from '../FireBaseAuth'

const SignIn = ()=> {
    const handleGoogle = async ()=> {
        const provider =  await new GoogleAuthProvider();
        signInWithPopup(auth, provider)
    }
    return <>
        <h1>Welcome To Chat Bot</h1>
        <button onClick={handleGoogle}>Sign In</button>
        <p>Kindly Sign In with Your Google Account to Continue</p>
    </>
}

export default SignIn;

