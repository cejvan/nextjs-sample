import App from "next/app";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.scss'

class MyApp extends App {

    render() {
        const {Component, pageProps } = this.props;
        return (
            <Component {...pageProps} />
        );
    }
}

export default MyApp;