import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'

import Message from '../components/Message'
import { removeFromShoppingcart, addCakeQty } from '../redux/actions/cakeActions'
import { AppState } from '../types'

const CartScreen = ({ history }: any) => {
  const selectedCakes = useSelector((state: AppState) => state.cake.inCart)

  const dispatch = useDispatch()

  const removeFromCartHandler = (_id: any) => {
    dispatch(removeFromShoppingcart(_id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }
    
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {selectedCakes.length === 0 ? (
          <Message>
            Your cart is empty <Link to="/cakes">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {selectedCakes.map((item: any) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={`/${item.image}`}
                      alt={item.name}
                      className="img"
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3}>
                    <Link to={`/cake/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>EUR {item.price}</Col>
                  <Col md={2}>
                    {<Form.Control
                      as="select"
              
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      dispatch(addCakeQty(item._id, Number(e.target.value)))
                      }
                    >
                    {/* @ts-ignore */}
                    {[...Array(item.stock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                    ))}
                    </Form.Control>}
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({selectedCakes.reduce((acc: any, item: any) => acc + item.qty, 0)})
                cakes
              </h2>
              EUR{' '}
              {selectedCakes
                .reduce((acc: any, item: any) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={selectedCakes.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
