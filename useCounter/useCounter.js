import PropTypes from 'prop-types';
import { useState } from 'react';

export const useCounter = (initial = 0) => {

    const [state, setState] = useState(initial);

    const increment = (factor = 1) => setState(state + factor);
    const reset = () => setState(initial);
    const decrement = (factor = 1) => setState(state - factor);

    return [state, increment, reset, decrement];
}

useCounter.propTypes = {
    initial: PropTypes.number.isRequired
}