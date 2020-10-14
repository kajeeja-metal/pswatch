import Document, { Head, Main, NextScript } from 'next/document'
import '../public/static/css/styles.css'
import '../public/static/sass/style.scss'

class MyDocument extends Document {
  render() {
    return (
      <html>
        <body >
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
export default MyDocument;