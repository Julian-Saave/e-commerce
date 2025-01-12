import { XCircleIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'

import { ShoppingCarContext } from '../../Context'

const OrderCard = props => {
    const { id, title, image, price, handleDelete} = props
    let renderXIcon
    if(handleDelete) {
        renderXIcon =  <button onClick={() => handleDelete(id)}>
                        <XCircleIcon className="size-6 text-black cursor-pointer" />
                        </button>
    }
    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img 
                    className= 'w-full h-full rounded-lg object-cover'
                    src= 'https://images.pexels.com/photos/24023639/pexels-photo-24023639/free-photo-of-craneo-humano-objeto-impreso-en-3-d.jpeg?auto=compress&cs=tinysrgb&w=400' 
                    alt= {title} />
                </figure>
                <p className='text-sm font-light'> {title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>{price}</p>
                {renderXIcon}
            </div>

        </div>
    )
}

export default OrderCard