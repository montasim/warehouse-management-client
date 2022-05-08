import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Components/Loading/Loading';
import auth from './Firebase.Init';

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth);
    let location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );

    if (sending) {
        toast("Sending Verification Email");
    }

    if (loading) {
        return <Loading />
    }
    else {
        if (!user) {
            // Redirect them to the /login page, but save the current location they were
            // trying to go to when they were redirected. This allows us to send them
            // along to that page after they login, which is a nicer user experience
            // than dropping them off on the home page.
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
    }

    if (user?.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='mt-32 mb-10'>
            <h3 className='text-2xl text-gray-700 text-center'>Your Email Is Not Verified</h3>
            <p className='text-red-500 text-center mt-5'>{error?.message}</p>
            <button onClick={async () => {
                await sendEmailVerification();
            }} className='block mx-auto bg-slate-600 text-white hover:bg-orange-200 hover:text-gray-600 px-4 py-2 my-8 rounded-full'>Send Email Verification</button>
        </div>
    }

    return children;
}

export default RequireAuth;