import React, { useReducer, useEffect } from "react";

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function MyBigForm() {
    function bigFormReducer(state, action) {
        switch (action.type) {
            case "emailImmediately": {
                return {
                    ...state,
                    email: {
                        ...state.email,
                        value: action.value,
                        hasErrors: false,
                    },
                };
            }
            case "emailError": {
                return {
                    ...state,
                    email: {
                        ...state.email,
                        message: action.value,
                        hasErrors: true,
                    },
                };
            }
            default:
                return { ...state };
        }
    }

    const initialState = {
        email: {
            value: "",
            hasErrors: false,
            message: "",
        },
        username: {
            value: "",
            hasErrors: false,
            message: "",
        },
        password: {
            value: "",
            hasErrors: false,
            message: "",
        },
    };
    const [state, dispatch] = useReducer(bigFormReducer, initialState);

    useEffect(() => {
        if (state.email.value) {
            const delay = setTimeout(() => {
                // query the backend API
                if (!validateEmail(state.email.value)) {
                    dispatch({
                        type: "emailError",
                        value: "Should be a valid email address",
                    });
                }
            }, 750);

            return () => {
                clearTimeout(delay);
            };
        }
    }, [state.email.value]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <h1>My Big Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Email:{" "}
                        {state.email.hasErrors && (
                            <span style={{ color: "red" }}>
                                {" "}
                                {state.email.message}{" "}
                            </span>
                        )}
                        <input
                            type="email"
                            value={state.email.value}
                            onChange={(e) =>
                                dispatch({
                                    type: "emailImmediately",
                                    value: e.target.value,
                                })
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Username:
                        <input type="text" value={state.username.value} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" value={state.password.value} />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default MyBigForm;
