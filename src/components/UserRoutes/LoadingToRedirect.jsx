// Core
import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';

//Routes
import {routes} from "../../_routes";

const LoadingToRedirect = () => {
    const [count, setCount] = useState(5);
    const history = useHistory();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(currentCount => --currentCount)
        }, 1000)
        //    redirect once count is equal to 0
        count === 0 && history.push(routes.login)
        //    cleanup
        return () => clearInterval(interval)
    }, [count, history])

    return (
        <div className={'p-5 text-center'}>
            <p>Redirecting you in {count} seconds</p>
        </div>
    )
}

export default LoadingToRedirect;