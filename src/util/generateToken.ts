import jwt from 'jsonwebtoken'

// Create and sign a json token with a secret key for accessing protected routes
// Add user id as the payload in the token
const generateToken = (id: any) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '15d'
  }) 
}

export default generateToken