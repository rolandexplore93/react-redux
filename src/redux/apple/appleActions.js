import { BUY_APPLE } from "./appleType";

export const buyApple = (number = 1) => {

    return {
        type: BUY_APPLE,
        payload: number
    }
}