//Core
import React, {useState} from "react";
import {useHistory} from 'react-router-dom';


//Form
import {AuthLogin} from "./FormaLogin";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const handleSubmit = (email, password) => {
               console.log('email', email)
               console.log('password', password)
    }

    return (
        <div className={'container p-5'}>
            <div className="row">
                <div className="col-md-6 offset-md-3">

                    {
                        !loading ? <h4>Login</h4> : <h4 className="text-danger">Loadding...</h4>
                    }

                    <AuthLogin handleSubmitForm={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}


export default Login;