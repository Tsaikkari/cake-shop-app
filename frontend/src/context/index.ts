import React from 'react'

interface IContextProps {
  cake: {
    layers: number
  }
}

const CakeContext = React.createContext({} as IContextProps)  

export default CakeContext