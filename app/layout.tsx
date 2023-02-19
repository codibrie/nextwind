export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Hello world!</title>
      </head>
      <body className='p-4'>{children}</body>
    </html>
  )
}
