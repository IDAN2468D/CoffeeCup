import { useReducer, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmail } from '../hooks/Authentication';
import { NavigationProp } from '@react-navigation/native';

// Define the navigation prop type
type RootStackParamList = {
    Tabs: undefined;
    // other screens
};

type AuthNavigationProp = NavigationProp<RootStackParamList, 'Tabs'>;

// Define the initial state and state type
type State = {
    email: string;
    password: string;
    authMessage: string;
    secureText: boolean;
};

const initialState: State = {
    email: '',
    password: '',
    authMessage: '',
    secureText: false,
};

// Define action types
type Action =
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'SET_AUTH_MESSAGE'; payload: string }
    | { type: 'TOGGLE_SECURE_TEXT' };

// Reducer function to manage state
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'SET_AUTH_MESSAGE':
            return { ...state, authMessage: action.payload };
        case 'TOGGLE_SECURE_TEXT':
            return { ...state, secureText: !state.secureText };
        default:
            return state;
    }
};

// Custom hook
export const useLogIn = ({ navigation }: { navigation: AuthNavigationProp }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSignIn = useCallback(async () => {
        try {
            const result = await signInWithEmail(state.email, state.password);

            if (result.error) {
                const errorMessage =
                    result.error === 'Email not confirmed'
                        ? 'Your email is not confirmed. Please check your email for the confirmation link. If you haven\'t received it, try checking your spam/junk folder or contact support.'
                        : result.error;
                dispatch({ type: 'SET_AUTH_MESSAGE', payload: errorMessage });
            } else {
                dispatch({ type: 'SET_AUTH_MESSAGE', payload: 'Sign-in successful!' });
                if (result.data?.session) {
                    await AsyncStorage.setItem('userToken', result.data.session.access_token);
                    console.log('Navigating to Tabs...');
                    navigation.navigate('Tabs');
                } else {
                    dispatch({ type: 'SET_AUTH_MESSAGE', payload: 'Failed to retrieve session. Please try again.' });
                }
            }
        } catch (error) {
            console.error('Sign-in error:', error);
            dispatch({ type: 'SET_AUTH_MESSAGE', payload: 'Sign-in failed. Please try again.' });
        }
    }, [state.email, state.password, navigation]);

    return {
        email: state.email,
        setEmail: (email: string) => dispatch({ type: 'SET_EMAIL', payload: email }),
        password: state.password,
        setPassword: (password: string) => dispatch({ type: 'SET_PASSWORD', payload: password }),
        authMessage: state.authMessage,
        secureText: state.secureText,
        setSecureText: () => dispatch({ type: 'TOGGLE_SECURE_TEXT' }),
        handleSignIn,
    };
};
