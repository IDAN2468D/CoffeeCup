import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthStatus = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const userToken = await AsyncStorage.getItem('userToken');
                setIsSignedIn(!!userToken);

            } catch (e) {
                console.error('Failed to load token', e);
            } finally {
                setTimeout(() => setIsLoading(false), 5000);
            }
        };

        checkAuthStatus();
    }, []);

    return { isLoading, isSignedIn };
};

export default useAuthStatus;
