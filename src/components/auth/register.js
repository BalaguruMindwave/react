import React from "react";
import logo from "../../assets/images/register.svg";
import {
    useRegisterState,
    useRegisterDispatch,
} from "../../context/auth/RegisterContext";
function Register() {
    const state = useRegisterState();
    const dispatch = useRegisterDispatch();

    return (
        <div className="container">
            <div className="row w-100 center-form-login">
                <div className="col">
                    <h4 className="text-primary mb-3 font-weight-bolder">
                        Welcome! Register to continue
                    </h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name" className="text-secondary">
                                Name
                                <sup className="text-danger">*</sup>
                            </label>
                            <input
                                type="text"
                                className={
                                    state.name.hasError
                                        ? "is-invalid form-control"
                                        : "form-control"
                                }
                                id="name"
                                placeholder="Name"
                                onChange={(e) => {
                                    dispatch({
                                        type: "name",
                                        value: e.target.value,
                                    });
                                }}
                            />
                            {state.name.hasError ? (
                                <p className="text-danger">
                                    {state.name.message}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="age" className="text-secondary">
                                Age
                                <sup className="text-danger">*</sup>
                            </label>
                            <input
                                type="number"
                                className={
                                    state.age.hasError
                                        ? "is-invalid form-control"
                                        : "form-control"
                                }
                                id="age"
                                placeholder="Age"
                                onChange={(e) => {
                                    dispatch({
                                        type: "age",
                                        value: e.target.value,
                                    });
                                }}
                            />
                            {state.age.hasError ? (
                                <p className="text-danger">
                                    {state.age.message}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="text-secondary">
                                Email
                                <sup className="text-danger">*</sup>
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
                                <sup className="text-danger">*</sup>
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
                                onClick={(e) => {
                                    dispatch({
                                        type: "registerClick",
                                    });
                                }}
                                disabled={state.formInvalid ? true : false}
                            >
                                Register
                            </button>
                        </div>
                        <p className="d-flex justify-content-center">
                            Already have an account!
                            <a href="/"> Login</a>
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

export default Register;
