export const letters = (state = [], action) => {
    switch (action.type) {
        case 'CHECK_LETTER':
            return state.map(letter =>
                letter.id === action.id ? {...letter, checked: true} : letter
            )
        case 'RESET_LETTERS':
            return state.map(letter => {
                return {
                    ...letter,
                    checked: false
                    }
            })
        default:
            return state
    }
}