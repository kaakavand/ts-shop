import React, { useContext } from 'react'

interface CartProps {
    title: string,
    description: string,
    price: number
}

export const Cart = ({ description, price, title }: CartProps) => {


    const onClick = () => {
    }

    return (
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="w-1/3 bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')" }}></div>

            <div className="w-2/3 p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h1>
                    <button onClick={onClick} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
