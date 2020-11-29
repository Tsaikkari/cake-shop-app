import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { Collapse, CardBody } from 'reactstrap'

import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { addToShoppingcart } from '../redux/actions/cakeActions'
import CakeContext from '../context/index'
import { AppState } from '../types'

interface RouteParams {
  id: string
}

const CakeScreen = ({ history }: any) => {
  const { id } = useParams<RouteParams>()
  
  const [qty, setQty] = useState(1)
  const [incredients, setIncredients] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const dispatch = useDispatch()

  const allCakes = useSelector((state: AppState) => state.allCakes)
  const { loading, error, cakes } = allCakes
  const cake = cakes.find((c: any) => c._id === id)

  const toggle = () => setIsOpen(!isOpen)

  const addToShoppingcartHandler = () => {
    dispatch(addToShoppingcart(cake, qty))
    history.push(`/shoppingcart/${id}?qty=${qty}`)
  }

  useEffect(() => {
    if (cake) {
      let incredients = cake.incredients
      setIncredients(incredients)
    }
  }, [incredients, cake])

  if (!cake) {
    return null
  }

  return (
    <CakeContext.Provider value={{ cake }}>
      <Link className="btn btn-light my-3" to="/cakes">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={3}>
            <Image 
              src={`/${cake.image}`} 
              alt={cake.name} 
              className="image" 
              fluid />
          </Col>
          <Col md={5}>
            <ListGroup variant="flush">
              <ListGroup.Item className="cakeinfo">
                <h3>{cake.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={cake.rating}
                  text={`${cake.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                Price: EUR {cake.price}
              </ListGroup.Item>
              <ListGroup.Item>Description: {cake.description}</ListGroup.Item>
              <ListGroup.Item>
                <Button color="primary" onClick={toggle} style={{ marginBottom: '0.5rem', background: '#bbb' }}>Incredients</Button>
                <Collapse isOpen={isOpen}>
                  <Card>
                    <CardBody>
                      {incredients.map((i, index) => <li key={index}>{i}</li>)}
                    </CardBody>
                  </Card>
                </Collapse>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>EUR {cake.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>{cake.stock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    onClick={addToShoppingcartHandler}
                    className="btn-block"
                    type="button"
                    disabled={cake.stock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </CakeContext.Provider>
  )
}

export default CakeScreen
