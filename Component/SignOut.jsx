import {auth} from '../FireBaseAuth'
const SignOut = ()=> {
    return auth.currentUser && (
        <button onClick={()=> auth.signOut()}>Sign Out</button>
    )
}

export default SignOut;