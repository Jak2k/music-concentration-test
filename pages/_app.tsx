import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import styles from "../styles/Vercel.module.css";
import Image from "next/image";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}
