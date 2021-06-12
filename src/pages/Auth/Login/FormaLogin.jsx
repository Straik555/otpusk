// Core
import React from 'react';

//Formik
import {Formik, Form, Field} from "formik";

//Input
import {TextField} from "../../../components/Form/TextField";

//Validation
import {validateLogin} from "../../../_utils/validation";

//Type
import {func} from "prop-types";

//Style
import './style.css'

export const AuthLogin = ({handleSubmitForm}) => {
    const handle = (values) => {
        handleSubmitForm(values.email, values.password)
    }
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                checked: false
            }}
            validateOnBlur
            onSubmit={values => handle(values)}
            validationSchema={validateLogin}
        >
            {
                formik => (
                    <div>
                        <Form>
                            <TextField label={'email'} name={'email'} type={'email'}  />
                            <TextField label={'password'} name={'password'} type={'password'} />
                            <label>
                                <Field type="checkbox" name={'checked'} className={'mr-2 mt-3'}/>
                                Запомнить меня
                            </label>
                            <button
                                type={'submit'}
                                className={'button handler'}
                            >
                                Login with email/Password
                            </button>
                        </Form>
                    </div>
                )
            }
        </Formik>
    )
}

AuthLogin.prototype = {
    handleSubmitForm: func.isRequired
}