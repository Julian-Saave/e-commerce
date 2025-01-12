import { useContext } from 'react'

import { ShoppingCarContext } from '../../Context'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/Productdetail'

function Home() {
  const context = useContext(ShoppingCarContext)

  const renderView = () => {
    if(context.filteredItems?.length > 0){
      return(
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item}/>
        )) 
      )
    }else{
      return(
        <div> Not fount </div>
      )
    }
  }

  return (
      <Layout>
        <div className='flex flex-col  justify-center items-center w-60 mb-4'>
          <h1 className='font-medium text-xl'>Home</h1>
          <input
            className='rounded-lg border border-black w-full p-3 mb-4 focus:outline-none' 
            onChange={(event) => context.setSearch(event.target.value)}
            type="text" 
            placeholder='Search a product'/>
        </div>
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            renderView()
          } 
        </div>
        <ProductDetail />
      </Layout>
  )
}

export default Home
