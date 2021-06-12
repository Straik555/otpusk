// Core
import React, {useState, useEffect} from "react";

//Redux
import {connect} from "react-redux";

//Function
import {getFlights} from '../../sdk'

//Type
import {string} from "prop-types";

//Spinner
import Spinner from "../../components/Spinner";

//Airplane
import Airplane from "../../components/Airplane";

//Search
import LocalSearch from "../../components/LoalSearch";

const UserProfile = ({token}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [airplane, setAirplane] = useState({})
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        getFlights(token)
            .then(res => {
                res.text().then(function(text) {
                    setAirplane(Object.values(JSON.parse(text).data))
                    setIsLoading(false)
                });
            })
            .catch(err => console.log('err', err))
    }, [])

    return (
        <div>
            {
                isLoading ? <Spinner /> : (
                    <>
                        <LocalSearch keyword={keyword} setKeyword={setKeyword} />
                        <Airplane list={airplane} keyword={keyword}/>
                    </>
                )
            }
        </div>
    )
}

const mapStateToProps = ({userReducer: {user}}) => {
    return {
        token: user.token
    }
}

UserProfile.prototype = {
    token: string.isRequired
}

export default connect(mapStateToProps, {})(UserProfile)
