import { connect } from 'react-redux'
import GameLayout from '../components/GameLayout'
import { checkLetter, resetLetters, setActiveLetter } from '../actions'
//sd
const getRandomLetter = letters => {
    let uncheckedLetters = letters.filter((letter) => !letter.checked);

    var randomLetter = null;
    if (uncheckedLetters.length !== 0)
        randomLetter = uncheckedLetters[Math.floor(Math.random()*uncheckedLetters.length)];

    return randomLetter;
}

const mapStateToProps = state => {
    return {
        letters: state.letters,
        activeLetter: state.activeLetter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onNextClick: (letters) => {
            let letter = getRandomLetter(letters);
            if (letter !== null) {
                dispatch(checkLetter(letter.id));
                dispatch(setActiveLetter(letter.name));
            }
        },
        onResetClick: () => {
            dispatch(resetLetters());
            dispatch(setActiveLetter('-'));
            }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameLayout)