import { ChevronRightIcon } from '@heroicons/react/24/outline'

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props
    let renderXIcon
    
    return (
        <div className='flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg ' >
            <div className='flex justify-between w-full'>
                <div className='flex flex-col font-light'>
                    <span> 01/02/25</span>
                    <span>{totalProducts} articles</span>
                </div>
                <div className='flex items-center'>
                    <span className='font-medium text-2xl'>{totalPrice}</span>
                    <ChevronRightIcon className="size-6 text-black cursor-pointer" />
                </div>
            </div>

        </div>
    )
}

export default OrdersCard