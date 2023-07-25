import { useDispatch,useSelector } from "react-redux";
import { createUser, googleLogin } from "./LoginSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

type AnyAction = /*unresolved*/ any
type RootState = /*unresolved*/ any

const LoginView = () => {
    const { isLoading, error, user} = useSelector((state: any) => state.user);
    console.log(isLoading, error, user?.email);
    const dispatch: ThunkDispatch<RootState, any, AnyAction> = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = (e.target as any).email.value;
        const password = (e.target as any).password.value;
        dispatch(createUser({email, password}));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {isLoading &&  <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value={"Login"} className="btn btn-primary" name="" id="" />
                        </div>
                    </form>
                    <button className="btn btn-primary m-8" onClick={()=> dispatch(googleLogin())}>Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default LoginView;