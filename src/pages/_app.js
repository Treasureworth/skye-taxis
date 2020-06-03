import React from 'react'
import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import App from 'next/app';
import store from "../utils/store/index"
import { createWrapper } from 'next-redux-wrapper'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MyApp extends App {
 
  render () {
    const { Component, pageProps } = this.props

    return (
      
      <Provider store={store}>

        <Component {...pageProps} />

      </Provider>
    
    )
  }
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore);
//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
