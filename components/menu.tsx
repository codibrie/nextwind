import Link from 'next/link'
import User from './user'

export const Menu = () => {
  return (
    <div className='text-white p-4 border-b border-white border-opacity-10 border-dotted'>
      <div className='container flex flex-row justify-between mx-auto max-w-5xl'>
        <Link href='/'>
          <span>🍃 Nextwind</span>
        </Link>
        <User />
      </div>
    </div>
  )
}

export default Menu
