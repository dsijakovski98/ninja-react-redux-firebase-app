import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)

    if (!isLoaded(auth)) return null;
    return children;
}

export default AuthIsLoaded