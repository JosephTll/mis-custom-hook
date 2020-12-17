const { useState } = require("react")

const useForm = (initialState = {})=>{
    const [values, setValues] = useState(initialState);

    const reset = ()=>{
        setValues(initialState);
    }

    const handledInputChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return [values, handledInputChange, reset];
}

export default useForm;