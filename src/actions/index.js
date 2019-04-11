export const checkLetter = id => ({
    type: 'CHECK_LETTER',
    id
})

export const resetLetters = () => ({
    type: 'RESET_LETTERS'
})

export const setActiveLetter = name => ({
    type: 'SET_ACTIVE_LETTER',
    name
})