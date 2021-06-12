// Core
import React from 'react';

//Formik
import {Formik, Form} from "formik";

//Input
import {TextField} from "../../../components/Form/TextField";

//Validation
import {validateLogin} from "../../../_utils/validation";

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
                password: ''
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