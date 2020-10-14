import Document, { Head, Main, NextScript,Html } from 'next/document'
import '../public/static/css/styles.css'
import '../public/static/sass/style.scss'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument;