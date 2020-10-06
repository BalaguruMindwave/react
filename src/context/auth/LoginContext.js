import React, { createContext, useContext, useReducer } from "react";

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const LoginStateContext = createContext();
const LoginDispatchContext = createContext();

function loginReducer(state, action) {
    switch (action.type) {
        case "email":
            if (!validateEmail(action.value)) {
                return {
                    ...state,
                    formInvalid: true,
                    email: {
                        ...state.email,
                        hasError: true,
                        message: "Invalid email address",
                    },
                };
            } else {
                return {
                    ...state,
                    formInvalid: false,
                    email: {
                        ...state.email,
                        value: action.value,
                        hasError: false,
                    },
                };
            }
        case "password":
            if (!action.value || action.value === "") {
                return {
                    ...state,
                    formInvalid: true,
                    password: {
                        ...state.password,
                        hasError: true,
                        message: "Password is required",
                    },
                };
            } else {
                return {
                    ...state,
                    formInvalid: false,
                    password: {
                        ...state,
                        value: action.value,
                        hasError: false,
                    },
                };
            }
        case "loginClick":
            window.location.href = "/dashboard";
            return { ...state };
        default:
            return { ...state };
    }
}

function LoginProvider({ children }) {
    const initialState = {
        formInvalid: true,
        email: {
            value: "",
            hasError: "",
            message: "",
        },
        password: {
            value: "",
            hasError: "",
            message: "",
        },
    };

    const [state, dispatch] = useReducer(loginReducer, initialState);

    return (
        <LoginStateContext.Provider value={state}>
            <LoginDispatchContext.Provider value={dispatch}>
                {children}
            </LoginDispatchContext.Provider>
        </LoginStateContext.Provider>
    );
}

function useLoginState() {
    const context = useContext(LoginStateContext);
    if (context === undefined) {
        throw new Error("useLoginState must be used within a LoginProvider");
    }
    return context;
}

function useLoginDispatch() {
    const context = useContext(LoginDispatchContext);
    if (context === undefined) {
        throw new Error("useLoginState must be used within a LoginProvider");
    }
    return context;
}

export { LoginProvider, useLoginState, useLoginDispatch };
