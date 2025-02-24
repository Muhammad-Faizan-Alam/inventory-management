import AddProduct from './AddProduct'
import Logo from './logo'

const Navbar = () => {
  return (
    <div className='bg-sky-950 p-7 flex flex-wrap justify-between'>
      <Logo />
      <AddProduct />
    </div>
  )
}

export default Navbar