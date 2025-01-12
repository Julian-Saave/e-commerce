import { useContext } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

import { ShoppingCarContext } from '../../Context'

const Card = (data) => {
    const context = useContext(ShoppingCarContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProducts = (event, product) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCarProducts([...context.carProducts, product])
        context.openChechoutSideMenu()
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
        <div 
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'
        onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                {data.data.category.name}
                </span>
                < img className='w-full h-full object-cover rounded-lg' 
                    src = "https://images.pexels.com/photos/24023639/pexels-photo-24023639/free-photo-of-craneo-humano-objeto-impreso-en-3-d.jpeg?auto=compress&cs=tinysrgb&w=400" alt= {data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}
export default Card