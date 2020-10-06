import React, { createContext, useContext, useReducer } from "react";

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const RegisterStateContext = createContext();
const RegisterDispatchContext = createContext();

function registerReducer(state, action) {
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
            if (!action.value) {
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
        case "name":
            if (!action.value) {
                return {
                    ...state,
                    formInvalid: true,
                    password: {
                        ...state.name,
                        hasError: true,
                        message: "Name is required",
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
        case "age":
            if (!action.value) {
                return {
                    ...state,
                    formInvalid: true,
                    password: {
                        ...state.age,
                        hasError: true,
                        message: "Age is required",
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
        case "registerClick":
            return (window.location.href = "/dashboard");
        default:
            return { ...state };
    }
}

function RegisterProvider({ children }) {
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
        age: {
            value: "",
            hasError: "",
            message: "",
        },
        name: {
            value: "",
            hasError: "",
            message: "",
        },
    };

    const [state, dispatch] = useReducer(registerReducer, initialState);

    return (
        <RegisterStateContext.Provider value={state}>
            <RegisterDispatchContext.Provider value={dispatch}>
                {children}
            </RegisterDispatchContext.Provider>
        </RegisterStateContext.Provider>
    );
}

function useRegisterState() {
    const context = useContext(RegisterStateContext);
    if (context === undefined) {
        throw new Error("useLoginState must be used within a LoginProvider");
    }
    return context;
}

function useRegisterDispatch() {
    const context = useContext(RegisterDispatchContext);
    if (context === undefined) {
        throw new Error("useLoginState must be used within a LoginProvider");
    }
    return context;
}

export { RegisterProvider, useRegisterState, useRegisterDispatch };
