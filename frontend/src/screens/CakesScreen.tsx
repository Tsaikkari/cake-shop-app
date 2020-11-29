import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Cake from '../components/Cake'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { wantCakes } from '../redux/actions/cakesActions'
import { AppState } from '../types'

const CakesScreen = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(wantCakes())
  }, [dispatch])  

  const allCakes = useSelector((state: AppState) => state.allCakes)
  const { loading, error, cakes } = allCakes

  return (
    <>
      <h1>Latest Cakes</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
        {cakes.map((cake: any) => (
          <Col key={cake._id} sm={12} md={6} lg={4} xl={3}>
            <Cake cake={cake} />
          </Col>
        ))}
      </Row>
      )}
    </>
  )
}

export default CakesScreen
