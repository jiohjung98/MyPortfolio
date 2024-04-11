import Image from 'next/image'

export default function TalkHeader() {
    return (
        <section className="container mx-auto flex">
            <a className="container mx-auto flex md:flex-row flex-col items-center" href="https://github.com/TOY-2-9/chat">
                <Image src='/Talk-logo.png' alt='Talk-logo'width="50" height="50"></Image>
                <h1 className="ml-5 text-3xl font-semibold">Talk - 소켓을 이용한 체탱 웹앱 서비스</h1>
            </a>
        </section>
    )
};