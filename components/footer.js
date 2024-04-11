export default function Footer() {
    return (
        <footer className="body-font">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                    <h2 className="text-xl">Jioh Jung Portfolio</h2>
                </a>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start">
                    <h2 className="mr-2 text-gray-500">더 많은 정보 보러가기</h2>
                    <a href="https://github.com/jiohjung98" className="ml-3">
                        <img className="w-6 h-6" src='/github.png' alt="GitHub" />
                    </a>
                    <a href="https://nifty-straw-3ce.notion.site/cfaecb5969324faf85761e350d647b3a?pvs=4" className="ml-3">
                        <img className="w-6 h-6" src='/notion-logo.png' alt="Notion" />
                    </a>
                    <a href="https://jiohjung-dev.tistory.com/" className="ml-3">
                        <img className="w-6 h-6" src='/tistory-logo.png' alt="Tistory" />
                    </a>
                </span>
            </div>
        </footer>
    );
}
