import User from './user'

export const Menu = () => {
  return (
    <div className='flex flex-row justify-between text-white bg-indigo-500 border-b-4 border-indigo-600 p-4'>
      <div>🍃 Nextwind</div>
      <User />
    </div>
  )
}

export default Menu
