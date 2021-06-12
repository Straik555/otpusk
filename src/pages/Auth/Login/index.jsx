//Core
import React, {useState} from "react";
import {useHistory} from 'react-router-dom';

//Actions
import {loggerInUser} from "../../../_actions";

//Redux
import {connect} from "react-redux";

//Function
import {authenticateUser} from '../../../sdk';

//Form
import {AuthLogin} from "./FormaLogin";

//Routes
import {routes} from "../../../_routes";

//Style
import {toast} from "react-toastify";

const Login = ({loggerInUser}) => {
    const [loading, setLoading] = useState(false)
    const history = useHistory();

    const handleSubmit = async(email, password, checked) => {
        setLoading(true)

        await authenticateUser(email, password)
            .then(res => {
                res.text().then(function(text) {
                    toast.success(`Hello ${JSON.parse(text).email}`)
                    if(checked){
                        localStorage.setItem('otpuskToken', JSON.parse(text).token)
                    }
                    loggerInUser(JSON.parse(text).email)
                    history.push(routes.home)
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

const mapStateToProps = () => {}

export default connect(mapStateToProps, {loggerInUser})(Login);