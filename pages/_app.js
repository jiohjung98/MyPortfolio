import "@/styles/globals.css";
import "@/styles/animation.css";

import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
        <div className="wave"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
        <Component {...pageProps} />
    </ThemeProvider>
  );
}
