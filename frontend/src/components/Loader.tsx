import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div>
      <h5>Waking up Heroku to fetch you some cakes! Bear with me. :)</h5>
      <Spinner 
        animation="border" 
        role="status" 
        style={{ 
          width: "100px", 
          height: "100px", 
          margin: "auto", 
          display: "block"}}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loader
