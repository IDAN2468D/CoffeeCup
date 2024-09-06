import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export const useCartScreen = ({ navigation }: any) => {
    const CartList = useStore((state: any) => state.CartList);
    const CartPrice = useStore((state: any) => state.CartPrice);

    const incrementCartItemQuantity = useStore((state: any) => state.incrementCartItemQuantity);
    const decrementCartItemQuantity = useStore((state: any) => state.decrementCartItemQuantity);
    const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);
    const tabBarHeight = useBottomTabBarHeight();

    const incrementItem = (id: string, size: string) => {
        // console.log("Increment item called with ID:", id, "and size:", size);
        incrementCartItemQuantity(id, size);
        calculateCartPrice();
        // console.log("CartList after increment:", CartList);
    }

    const decrementItem = (id: string, size: string) => {
        // console.log("Decrement item called with ID:", id, "and size:", size);
        decrementCartItemQuantity(id, size);
        calculateCartPrice();
        // console.log("CartList after decrement:", CartList);
    }
    const buttonPressHandler = () => {
        navigation.push("Payment", { amount: CartPrice })
    }


    return {
        incrementItem,
        decrementItem,
        buttonPressHandler,
        CartList,
        CartPrice,
        tabBarHeight
    };
};
