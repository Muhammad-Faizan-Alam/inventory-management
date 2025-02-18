import { PlusIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const AddProduct = () => {
  return (
    <Link
      href="/addProduct"
      className="flex h-10 items-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
    >
      <span className="hidden md:block">Add Product</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  )
}

export default AddProduct