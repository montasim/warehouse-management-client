import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading/Loading';
import SocialMediaLogin from '../../../Components/SocialMediaLogin/SocialMediaLogin';
import auth from '../../../Hooks/Firebase.Init';
import useToken from '../../../Hooks/useToken';
import loginPic from '../../../Media/Gif/login.gif';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user);
    let email;

    const login = async event => {
        event.preventDefault();

        email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
    }

    if (error) {
        toast(error?.message)
    }
    if (loading) {
        return <Loading />;
    }

    if (token) {
        toast('Welcome Back');
        navigate(from, { replace: true });
    }

    return (
        <section className="h-screen mt-24 mb-8">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src={loginPic}
                            className="w-full"
                            alt="register gif"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form onSubmit={login}>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4">Login with</p>
                                <SocialMediaLogin />
                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                    id="formEmail" name='email' autoComplete="on"
                                    placeholder="Email address"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none"
                                    id="formPassword" name='password' autoComplete="on"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-indigo-600 rounded-sm bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2" name='terms'
                                    />
                                    <label className='form-check-label inline-block text-grey-800' htmlFor="exampleCheck2"
                                    >Remember me</label
                                    >
                                </div>
                                <Link to="/forgot-password" className="text-indigo-700">Forgot password?</Link>
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="button inline-block px-7 py-3 bg-indigo-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Register
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    New to POSDash?
                                    <Link
                                        to="/register"
                                        className="text-indigo-500 hover:text-indigo-600 focus:text-red-700 transition duration-200 ease-in-out"
                                    > Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;