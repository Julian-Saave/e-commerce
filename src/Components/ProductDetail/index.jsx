import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'

import { ShoppingCarContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(ShoppingCarContext)
    return (
        <aside 
        className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <button onClick={() => context.closeProductDetail()}>
                <XCircleIcon className="size-6 text-black cursor-pointer" />
                </button>
            </div>
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
        </aside>
    )
}

export default ProductDetail