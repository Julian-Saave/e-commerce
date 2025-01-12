import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingCarContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCarContext)

    const handleDelete = (id) => {
        const filteredProducts = context.carProducts.filter(product => product.id != id)
        context.setCarProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01/02/24',
            products: context.carProducts,
            totalProducts: context.carProducts.length,
            totalPrice: totalPrice(context.carProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCarProducts([])
        context.setSearch(null)
    }


    return (
        <aside 
        className={`${context.isChechoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6 '>
                <h2 className='font-medium text-xl'>My order</h2>
                <button onClick={() => context.closeChechoutSideMenu()}>
                <XCircleIcon className="size-6 text-black cursor-pointer" />
                </button>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.carProducts.map(product =>(
                        <OrderCard  
                        key = {product.id}
                        id = {product.id}
                        title = {product.title}
                        image = {product.images[0]}
                        price = {product.price}
                        handleDelete = {handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl'>${totalPrice(context.carProducts)}</span>
                </p>
                <Link to= '/my-orders/last'>
                <button 
                className='w-full bg-green-500 py-3 mb-6 text-white rounded-lg'
                onClick={() => handleCheckout()}
                >Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu