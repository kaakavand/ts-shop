import { Card } from '@/components/Card'
import NavbarLayout from '@/components/NavbarLayout'
import React from 'react'

const index = () => {
  return (
    <NavbarLayout>
        <div className="columns-4 mt-4">
          <Card
            description='Product 1'
            title='Description 1'
            price={224}
          />
          <Card
            description='Product 1'
            title='Description 1'
            price={224}
          />
          <Card
            description='Product 1'
            title='Description 1'
            price={224}
          />
          <Card
            description='Product 1'
            title='Description 1'
            price={224}
          />
      </div>
        <div className="columns-4 mt-4">
          <Card
            description='Product 1'
            title='Description 1'
            price={224}
          />
          <Card
            description='Product 1'
            title='Description 1'
            price={224}
          />
          <Card
            description='Product 1'
            title='Description 1'
            price={224}
          />
          <Card
            description='Product 1'
            title='Description 1'
            price={224}
          />
      </div>
    </NavbarLayout>
  )
}

export default index