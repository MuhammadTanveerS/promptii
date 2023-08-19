import '@styles/global.css'

export const metadeta = {
    title: 'Promptii',
    description: 'Discover and sharre AI-generated prompts for your next creative project.',
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout