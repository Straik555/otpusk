//Core
import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

//Function
import {authenticateUser} from '../../../sdk';

//Form
import {AuthLogin} from "./FormaLogin";

//Style
import {toast} from "react-toastify";

const Login = () => {
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const handleSubmit = async (email, password) => {
        setLoading(true)

        await authenticateUser(email, password)
            .then(res => {
                res.text().then(function(text) {
                    toast.success(`Hello ${JSON.parse(text).email}`)
                    history.push('/')
                });
            })
            .catch(error => {
                setLoading(false);

                error.text().then(function(text) {
                    toast.error(JSON.parse(text).message)
                });
            })
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