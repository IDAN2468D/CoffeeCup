// hooks/useSignUpForm.ts
import { useReducer } from 'react';
import { signUpWithEmail } from './Authentication'; // Ensure this path is correct

interface SignUpFormState {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    secureText: boolean;
    authMessage?: string;
}

type SignUpFormActions =
    | { type: 'SET_FIELD'; payload: { field: keyof SignUpFormState; value: string } }
    | { type: 'TOGGLE_SECURE_TEXT' }
    | { type: 'SET_AUTH_MESSAGE'; payload: string };

const initialState: SignUpFormState = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    secureText: false,
};

const reducer = (state: SignUpFormState, action: SignUpFormActions): SignUpFormState => {
    switch (action.type) {
        case 'SET_FIELD':
            return { ...state, [action.payload.field]: action.payload.value };
        case 'TOGGLE_SECURE_TEXT':
            return { ...state, secureText: !state.secureText };
        case 'SET_AUTH_MESSAGE':
            return { ...state, authMessage: action.payload };
        default:
            return state;
    }
};

const useSignUpForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSignUp = async () => {
        const { email, password, confirmPassword, fullName } = state;
        const result = await signUpWithEmail(email, password, confirmPassword, fullName);
        if (result.error) {
            dispatch({ type: 'SET_AUTH_MESSAGE', payload: result.error });
        } else {
            dispatch({ type: 'SET_AUTH_MESSAGE', payload: 'Sign-up successful!' });
        }
    };

    return {
        state,
        dispatch,
        handleSignUp,
    };
};

export default useSignUpForm;
