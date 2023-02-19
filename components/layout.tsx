import Menu from './menu'

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Menu />
      <div className='p-4'>{children}</div>
    </div>
  )
}

export default Layout
