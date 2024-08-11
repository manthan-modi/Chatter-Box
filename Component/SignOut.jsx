import { Box, Stack } from '@mui/material';
import {auth} from '../FireBaseAuth'
import Button from '@mui/material/Button';
const SignOut = ()=> {
    return auth.currentUser && (
        <Button sx={{marginTop:'10px', marginRight:'10px'}} variant="contained" onClick= {()=>auth.signOut()}>signOut</Button>
    )
}

export default SignOut;