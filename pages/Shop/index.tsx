import { Cart } from '@/components/Cart'
import NavbarLayout from '@/components/NavbarLayout'
import React, { useContext } from 'react'
import {CartContext} from '../../context/CartContext'

const index = () => {  

  return (
    <NavbarLayout>
      <div className="columns-4 mt-4">
        <Cart
          description='Product 1'
          title='Description 1'
          price={224}
        />
        <Cart
          description='Product 1'
          title='Description 1'
          price={224}
        />
        <Cart
          description='Product 1'
          title='Description 1'
          price={224}
        />
        <Cart
          description='Product 1'
          title='Description 1'
          price={224}
        />
      </div>
      <div className="columns-4 mt-4">
        <Cart
          description='Product 1'
          title='Description 1'
          price={224}
        />
        <Cart
          description='Product 1'
          title='Description 1'
          price={224}
        />
        <Cart
          description='Product 1'
          title='Description 1'
          price={224}
        />
        <Cart
          description='Product 1'
          title='Description 1'
          price={224}
        />
      </div>
    </NavbarLayout>
  )
}

export default index