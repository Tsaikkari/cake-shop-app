import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import Rating from './Rating'

const Cake = ({ cake }: any) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/cake/${cake._id}`}>
        <Card.Img src={`/${cake.image}`} variant="top" height="300" width="auto"/>
      </Link>

      <Card.Body>
        <Link to={`/cake/${cake._id}`}>
          <Card.Title as="div">
            <strong>{cake.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating 
            value={cake.rating} 
            text={`${cake.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">
          EUR {cake.price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Cake
