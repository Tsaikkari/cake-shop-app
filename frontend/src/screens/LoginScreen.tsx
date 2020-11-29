import React from 'react'
import { Form, Card, Image } from 'react-bootstrap'

import img from '../images/login-cake.jpg'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
  return (
    <FormContainer className="background">
      <h1>Sign In</h1>
      <Image src={`${img}`} fluid className="signin-image" alt="cake"></Image>
      <Form>
        <Card>
          <a 
            className="btn btn-block btn-social btn-google" 
            href="/api/v1/users/auth/google/"
          >
          <i className="fab fa-google"></i>
            Sign in with Google
          </a>
        </Card>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
