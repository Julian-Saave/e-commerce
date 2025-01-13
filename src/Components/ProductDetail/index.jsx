import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'

import { ShoppingCarContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCarContext)
    const addProducts = (product) => {
        context.setCarProducts([...context.carProducts, product])
        context.closeProductDetail()
        console.log('CART: ',context.carProducts )
    }
    const renderIcon = (id) => {
        const isInCart = context.carProducts.filter(product => product.id === id).length > 0

        if(isInCart){
            return (
                <button 
                className= 'absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2'
                >
                <CheckBadgeIcon 
                className="size-10 text-green-600"/> 
                </button>
            )
        } else{
            return(
                <button 
                    className= 'absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'
                    onClick={(event) => addProducts(event, data.data)}
                >
                <PlusCircleIcon 
                className="size-10 text-black"/> 
                </button>
            )
        }
    }

    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button onClick={() => context.closeProductDetail()}>
                <XCircleIcon className="size-6 text-black cursor-pointer" />
                </button>
            </div>
            <div className='px-4 overflow-y-scroll flex-1'>
                <figure className='px-6'>
                    <img
                    className='w-full h-full rounded-lg' 
                    src= "https://images.pexels.com/photos/24023639/pexels-photo-24023639/free-photo-of-craneo-humano-objeto-impreso-en-3-d.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt= {context.productToShow.title} />
                </figure>
                <p className='flex flex-col p-6 mb-2'>
                    <span className='font-medium text-2xl'>${context.productToShow.price}</span> 
                    <span className='font-medium text-md'>{context.productToShow.title}</span> 
                    <span className='font-light text-sm'>{context.productToShow.description}</span> 
                </p>
            </div>
            <div className='px-6'>
                <button 
                className={`${!context.signOut ? ' bg-green-500' : 'bg-gray-300'} w-full py-3 mb-6 text-white rounded-lg`}
                onClick={(event) => addProducts(context.productToShow)}
                disabled = {context.signOut}
                >Add</button>
            </div>
        </aside>
    )
}

export default ProductDetail