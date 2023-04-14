import type { AppProps } from "next/app";
import "@/styles/globals.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialMedia from "./../components/SocialMedia";
import { DataProvider } from "./../components/Context/index";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            delay: 0,
            duration: 1200,
        });
    }, []);

    return (
        <>
            <Header />
            <SocialMedia />
            <DataProvider>
                <Component {...pageProps} />
            </DataProvider>
            <Footer />
        </>
    );
}
