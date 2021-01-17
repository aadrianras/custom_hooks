import { useState } from "react"

export const FormHook = (initialState = {}) => {
    const [formHook, setFormHook] = useState(initialState);

    const reset = () => setFormHook(initialState);

    const handleInputChange = ({ target }) => {

        setFormHook({
            ...formHook,
            [target.name]: target.value
        })
    };

    return [formHook, handleInputChange, reset];
}
