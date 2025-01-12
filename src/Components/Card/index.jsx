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

            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>{data.data.title}</span>
                <span className='text-lg font-medium'>${data.data.price}</span>
            </p>
        </div>
    )
}
export default Card