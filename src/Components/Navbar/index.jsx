import  { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

import { ShoppingCarContext } from '../../Context'


const Navbar = () => {
    const context = useContext(ShoppingCarContext)
    const activeStyle = 'underline underline-offset-4'
    const cleanFilters = () => {
        context.setSearchByCategory(null)
    }
    const signOut = () =>{
        localStorage.setItem('sign-out', JSON.stringify(true))
        context.setSignOut(true)
    }
    const signOutLS = JSON.parse(localStorage.getItem('sign-out'))
    const isSignOut = context.signOut 

    const renderView =() =>{

        if(!isSignOut){
            
            return(
                <ul className={`flex items-center gap-3`}>
                <li className='text-black/60'>
                    email@email.com 
                </li>
                <li>
                    <NavLink to='/my-orders'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        My Account
                    </NavLink>
                </li>
                <li onClick={() => signOut()}
                    className='cursor-pointer'>
                        <NavLink to='/'>
                            Sing out
                        </NavLink> 
                </li>
                
                <li className='flex items-center'>
                        <ShoppingBagIcon 
                        onClick={() => context.openChechoutSideMenu()}
                        className="size-6 text-black cursor-pointer" /> 
                    <div>{context.carProducts.length}</div>
                </li>
            </ul>
            )
        }else{
            return(
                <ul className={` flex  items-center gap-3 `}> 
                    <li>
                        <NavLink to='/sign-in'
                            className={({ isActive }) => isActive ? activeStyle : undefined }>
                            Sing in
                        </NavLink>
                    </li>
                </ul>
            )
        }
    }

     

    return (
        <nav className='flex justify-between items-center border border-b-black bg-white/90 fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'
                            onClick={() => cleanFilters()}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        onClick={() => cleanFilters()}
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                        onClick={() => context.setSearchByCategory('furnitures')}
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        onClick={() => context.setSearchByCategory('others')}
                        className={({ isActive }) => isActive ? activeStyle : undefined }>
                        Others
                    </NavLink>
                </li>
            </ul>
            {renderView()}
        </nav>
    )
}

export default Navbar