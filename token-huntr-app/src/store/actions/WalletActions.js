import { getWallet } from "../../services/WalletServices";
import { GET_WALLET } from "../types";


export const LoadWallet = () => {

    return async (dispatch) => {
        try {
            const wallet = await getWallet()

            dispatch({
                type: GET_WALLET,
                payload: wallet
            })
        } catch (error) {
            throw error
        }
    }
}