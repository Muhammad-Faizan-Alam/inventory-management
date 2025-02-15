import AddProduct from '@/components/AddProduct'
import ProductList from '@/components/ProductList'
import Search from '@/components/Search'
import React from 'react'

const page = () => {
  return (
    <div className='md:p-12 p-2'>
      <div className='flex items-center justify-between gap-2 md:my-8 my-4'>
        <Search />
        <AddProduct />
      </div>
      <ProductList />
    </div>
  )
}

export default page