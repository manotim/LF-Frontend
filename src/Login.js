import React from 'react'
import { useFormik } from 'formik'

function Login({loginUser}) {
    const {values, handleChange, handleSubmit} = useFormik(

        {initialValues: {
            email: '',
            password: ''
        }, onSubmit: (values) => {
           loginUser(values)
        }}
    )
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className='form-container'>
        <label htmlFor='email'>Email Address</label>
        <input type='text' value={values.email} onChange={handleChange} id='email' name='email' />
        <br />

        <label htmlFor='password'>Password</label>
        <input type='password' value={values.password} onChange={handleChange} id='password' name='password' />
        <br />

        <button className='submit-btn' type='submit'>
          LOG IN
        </button>
      </form>
    </div>
  )
}

export default Login
