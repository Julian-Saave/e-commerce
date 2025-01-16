import { useContext } from 'react'

import { ShoppingCarContext } from '../../Context'
import Layout from "../../Components/Layout"

function SignIn() {
  const context = useContext(ShoppingCarContext)
  const signIn = () =>{
    const signOutS = JSON.stringify(false)
    localStorage.setItem('sign-out', signOutS)
    context.setSignOut(false)
    console.log(context.signOut)
}

  return (
      <Layout>
        <div className='flex justify-center items-center w-60 mb-4' >
          <h1 className='font-medium text-xl'>Sign In</h1>
        </div>

        <form className='flex flex-col w-60'  onSubmit={()=> signIn()} action ='/'>
          <label className='mx-2'> Username</label>
          <input 
          type='text'
          className='border focus:outline-none rounded-lg m-2 px-2' />
          <label className='mx-2'> Password</label>
          <input 
          type='password'
          className='border focus:outline-none rounded-lg m-2 px-2' />
          <input 
          type='submit'
          value='Sing In'
          className='cursor-pointer border border-black rounded-lg m-2 p-2' />
        </form>

        <div className='flex justify-center items-center w-60 my-4'>
          <button className='cursor-pointer border border-black bg-gray-200 rounded-lg m-2 p-2 w-full'> 
            Register
          </button>
        </div>
      </Layout>

  )
}

export default SignIn
