import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';


export const useFetch = (url, n) => {
    //isMounted cambiara mediante el useEffect cuando se desmonte el componente
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        data
                    })
                }
            })
            .catch(console.log)


    }, [url, n]);

    return state;
}

useFetch.propTypes = {
    url: PropTypes.string
}