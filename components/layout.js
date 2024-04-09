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
                    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
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
                    padding: 20px; /* 내용에 대한 여백 설정 */
                }
            `}</style>
        </div>
    );
}
