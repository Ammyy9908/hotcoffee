

import { AppContextProvider } from '../store/_appContext'

import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return <AppContextProvider><Component {...pageProps} /></AppContextProvider>
}

export default MyApp
