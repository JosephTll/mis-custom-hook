const { useState, useEffect, useRef } = require("react")

const useFetch = (url) =>{

    const isMounted = useRef(true);

    const [state, setState] = useState({
        loading: true,
        data: null,
        error: null
    })

    useEffect(() => {
    
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(()=>{
         
        setState({
            loading: true,
            data: null,
            error: null
        })

            fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    if(isMounted.current){
                        setState({
                            loading: false,
                            data,
                            error: null
                        })
                    }
                })
                .catch(()=>{
                    setState({
                        data: null,
                        loading: false,
                        error: 'No se puedo obtener una informacion'
                    })
                })
    }, [url])

    return state;
}

export default useFetch;