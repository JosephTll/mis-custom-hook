const { useState } = require("react")

const useCounter = (stateInicial = 10)=>{
    const [counter, setCounter] = useState(stateInicial);

    const increment = ()=>{
        setCounter(counter + 1);
    }

    const reset = ()=>{
        setCounter(stateInicial);
    }

    const decrement = ()=>{
        setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        reset,
        decrement
    }
}

export default useCounter;