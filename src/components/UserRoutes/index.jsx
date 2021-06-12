// Core
import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';

//Function
import {getUser, validateToken} from "../../sdk";

//LoadingToRedirect
import LoadingToRedirect from './LoadingToRedirect';

//Type
import {func} from "prop-types";

//Redux
import {connect} from "react-redux";

//Actions
import {loggerInUser} from "../../_actions";

const UserRoutes = ({children, loggerInUser, user, ...rest}) => {
    const userToken = localStorage.getItem('otpuskToken')
    const [ok, setOk] = useState(false);
    useEffect(() => {
        if(user.isLogin){
            setOk(true)
            return
        }
        if(userToken){
            validateToken(userToken)
                .then(res => {
                    if(res){
                        getUser(userToken)
                            .then(res => {
                                loggerInUser(res.email)
                                setOk(true)
                            })
                            .catch(err => console.log('err', err))
                    }
                })
                .catch(err => console.log(err))
        }
    }, [userToken])

    return ok ? <Route {...rest} /> : <LoadingToRedirect />
}

const mapStateToProps = ({userReducer: user}) => {
    return{user}
}

UserRoutes.prototype = {
    loggerInUser: func
}

export default connect(mapStateToProps, {loggerInUser})(UserRoutes);