import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Header/>
            <div className="content">{children}</div>
            <Footer/>
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Black Han Sans,sans-serif;
                    overflow: hidden;
                }
                .layout {
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                    overflow: auto;
                }
                .content {
                    flex: 1;
                    overflow-y: auto;
                    padding: 20px; 
                }
            `}</style>
        </div>
    );
}
