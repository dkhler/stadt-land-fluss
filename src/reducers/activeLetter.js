export const activeLetter = (state = '-', action) => {
    switch (action.type) {
        case 'SET_ACTIVE_LETTER':
            return action.name
        default:
            return state
    }
}