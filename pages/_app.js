import { Provider } from 'react-redux'
import 'react-quill/dist/quill.snow.css'

import { store } from '../features/store'


export default function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Provider store={store}><Component {...pageProps} /></Provider>)
  }
