import {globalStyles} from '../styles/global';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{globalStyles}</style>
    </>
  )
}

export default MyApp
