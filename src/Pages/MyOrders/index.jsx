import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ShoppingCarContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"

function MyOrders() {
  const context = useContext(ShoppingCarContext)

  return (
      <Layout>
        <div className='flex justify-center items-center w-60 mb-4' >
          <h1 className='font-medium text-xl'>My Orders</h1>
        </div>
      {
        context.order.map((order, index) =>(
          <Link key={index}to = {`/my-orders/${index}`}>
          <OrdersCard 
          totalPrice = {order.totalPrice} 
          totalProducts = {order.totalProducts}
          />  
          </Link>
        ))
      }
      </Layout>
  )
}

export default MyOrders
