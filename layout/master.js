import Head from 'next/head'
import React , {Component} from "react"
import Header from '../components/header'
import Footer from '../components/footer'
class Pages extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
        <Head>
            <title>PS Watch</title>
            <link rel="icon" href="/favicon.png" />
            <link href="https://fonts.googleapis.com/css2?family=Mitr&display=swap" rel="stylesheet"></link>
          <link
            href="/static/css/font-awesome.css"
            rel="stylesheet"
            type="text/css"
            crossOrigin="anonymous"
            integrity=""
          />
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossOrigin="anonymous"

          />
          <link
            href="/static/css/animations.css"
            rel="stylesheet"
            type="text/css"
            crossOrigin="anonymous"
            integrity=""
          />
          <link
            href="/static/css/owl.carousel.min.css"
            rel="stylesheet"
            crossOrigin="anonymous"
            integrity=""
          />
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZn"
            crossOrigin="anonymous"
            integrity=""
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossOrigin="anonymous"
            integrity=""
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossOrigin="anonymous"
            integrity=""
          ></script>
          <script src="/static/js/mixitup.min.js"></script>
          <script async defer crossorigin="anonymous" src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0" nonce="zxaabMwO"></script>
        </Head>
        <Header />
        <main>
            {this.props.children}
        </main>
        <Footer />
        </>
        
        )
    }
}
export default Pages