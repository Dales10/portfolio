import { useEffect } from "react";
import type { AppProps } from "next/app";
import "@/styles/globals.scss";

import AOS from "aos";
import "aos/dist/aos.css";

import { DataProvider } from "@/components/Context";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SocialMedia from "@/components/SocialMedia";

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            delay: 0,
            duration: 1200,
        });
    }, []);

    return (
        <>
            <NavBar />
            <SocialMedia />
            <DataProvider>
                <Component {...pageProps} />
            </DataProvider>
            <Footer />
        </>
    );
}
