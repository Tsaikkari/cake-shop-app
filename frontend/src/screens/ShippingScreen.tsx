import React from 'react'
import { Form, Button } from 'react-bootstrap'

import FormContainer from '../components/FormContainer'

const ShippingScreen = () => {
  return (
    <FormContainer>
      <h1>Shipping</h1>
      <Form>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="address"
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="city"
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postal-code">
        <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Postal Code"
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="country"
            required
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
