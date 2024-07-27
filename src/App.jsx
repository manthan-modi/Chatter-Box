import SignIn from "../Component/SignIn";
import {auth} from "../FireBaseAuth"
import {useAuthState} from 'react-firebase-hooks/auth'
import ChatBox from "../Component/ChatBox";
function App() { 
  const [user] = useAuthState(auth);
  console.log(user)
  return (
    <>
     {user ? <ChatBox></ChatBox> : <SignIn></SignIn>}
    </>
  )
}

export default App
