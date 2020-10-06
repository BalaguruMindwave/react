import React from "react";
import logo from "../../assets/images/login.svg";
import {
    useLoginDispatch,
    useLoginState,
} from "../../context/auth/LoginContext";
function Login() {
    const state = useLoginState();
    const dispatch = useLoginDispatch();

    return (
        <div className="container">
            <div className="row w-100 center-form-login">
                <div className="col">
                    <h4 className="text-primary mb-3 font-weight-bolder">
                        Hello There! Login to continue
                    </h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email" className="text-secondary">
                                Email
                            </label>
                            <input
                                type="text"
                                className={
                                    state.email.hasError
                                        ? "is-invalid form-control"
                                        : "form-control"
                                }
                                id="email"
                                placeholder="Email"
                                onChange={(e) => {
                                    dispatch({
                                        type: "email",
                                        value: e.target.value,
                                    });
                                }}
                            />
                            {state.email.hasError ? (
                                <p className="text-danger">
                                    {state.email.message}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="password"
                                className="text-secondary"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                className={
                                    state.password.hasError
                                        ? "is-invalid form-control"
                                        : "form-control"
                                }
                                id="password"
                                placeholder="password"
                                onChange={(e) => {
                                    dispatch({
                                        type: "password",
                                        value: e.target.value,
                                    });
                                }}
                            />
                            {state.password.hasError ? (
                                <p className="text-danger">
                                    {state.password.message}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="d-flex justify-content-center mb-2">
                            <button
                                type="button"
                                className="btn btn-outline-primary btn-lg"
                                disabled={state.formInvalid ? true : false}
                                onClick={(e) => {
                                    dispatch({
                                        type: "loginClick",
                                    });
                                }}
                            >
                                Login
                            </button>
                        </div>
                        <p className="d-flex justify-content-center">
                            New Here!
                            <a href="/register"> Register</a>
                        </p>
                    </form>
                </div>
                <div className="col split-line d-none d-lg-block">
                    <div className="d-flex justify-content-center">
                        <img src={logo} alt="Logo" width="300px" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
