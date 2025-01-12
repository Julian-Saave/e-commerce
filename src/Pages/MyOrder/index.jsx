import { useContext } from 'react'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

import Layout from '../../Components/Layout'
import { ShoppingCarContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {

  const context = useContext(ShoppingCarContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if(index === 'last') index = context.order?.length - 1

  return (
      <Layout>
        <div className='flex justify-center items-center relative w-60 mb-6'>
          <Link to= '/my-orders' className='absolute left-0'>
            <ArrowLeftEndOnRectangleIcon className="size-6 text-black cursor-pointer" />
          </Link>
          <h1 className='font-medium text-xl'>My Order</h1>
        </div>
        <div className='flex flex-col w-80'>
                {
                    context.order?.[index].products.map(product =>(
                        <OrderCard  
                        key = {product.id}
                        id = {product.id}
                        title = {product.title}
                        image = {product.images[0]}
                        price = {product.price}
                        />
                    ))
                }
            </div>
      </Layout>
  )
}

export default MyOrder
