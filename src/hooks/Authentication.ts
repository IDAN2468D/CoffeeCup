import { supabase } from '../screens/Authentication/Supabase';

// Sign-Up Function
export const signUpWithEmail = async (email: string, password: string, confirmPassword: string, fullName: string) => {
    if (password !== confirmPassword) {
        return { error: 'Passwords do not match.' };
    }

    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName
                }
            }
        });

        if (error) {
            console.error('Error signing up:', error.message);
            return { error: error.message };
        }

        console.log('Sign-up successful:', data);
        return { message: 'Sign-up successful. Please check your email to verify your account.' };
    } catch (error) {
        console.error('Unexpected error during sign-up:', error);
        return { error: 'Unexpected error during sign-up' };
    }
};

// Sign-In Function
export const signInWithEmail = async (email: string, password: string) => {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            if (error.message === 'Email not confirmed') {
                console.error('Error signing in: Email not confirmed. Please verify your email.');
                return { error: 'Email not confirmed. Please verify your email.' };
            }

            console.error('Error signing in:', error.message);
            return { error: error.message };
        }

        console.log('Sign-in successful:', data);
        return { data };
    } catch (error) {
        console.error('Unexpected error during sign-in:', error);
        return { error: 'Unexpected error during sign-in' };
    }
};

// Sign-Out Function
export const signOut = async () => {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.error('Error signing out:', error.message);
            return { error: error.message };
        }

        console.log('Sign-out successful');
        return { message: 'Sign-out successful' };
    } catch (error) {
        console.error('Unexpected error during sign-out:', error);
        return { error: 'Unexpected error during sign-out' };
    }
};