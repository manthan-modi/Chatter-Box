import SignIn from "../Component/SignIn";
import {auth} from "../FireBaseAuth"
import {useAuthState} from 'react-firebase-hooks/auth'
import ChatBox from "../Component/ChatBox";
import { ThemeProvider, createTheme, Paper, CssBaseline} from "@mui/material";
function App() { 
  const [user] = useAuthState(auth);
  const theme = createTheme({
    palette:{
      mode:"dark",
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Paper>
      {user ? <ChatBox></ChatBox> : <SignIn></SignIn>}
      </Paper>
      </ThemeProvider>
  )
}

export default App
