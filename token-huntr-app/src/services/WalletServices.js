import TokenHuntr from './'

export const getWallet = async () => {
    try {
        const res = await TokenHuntr.get('/wallets')
        console.log(res, 'getting wallet')
        return res.data
    } catch (error) {
        throw error
    }
}