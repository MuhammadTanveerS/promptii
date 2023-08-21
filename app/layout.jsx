import Nav from '@components/Nav'
import Provider from '@components/Provider'
import '@styles/global.css'

export const metadeta = {
    title: 'Promptii',
    description: 'Discover and sharre AI-generated prompts for your next creative project.',
    icons: {
        favicon: '/assets/images/favicon.png',
    }
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout