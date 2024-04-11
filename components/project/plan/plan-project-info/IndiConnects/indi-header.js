import Image from 'next/image'

export default function IndiHeader() {
    return (
        <section className="container mx-auto flex">
            <a className="container mx-auto flex md:flex-row flex-col items-center" href="https://github.com/jiohjung98/Consolveconnect">
                <Image src='/Indi-logo.png' alt='Indi-logo'width="60" height="60"></Image>
                <h1 className="ml-5 text-3xl font-semibold">IndiConnects - 뮤지션과 업주, 관객 연결 플랫폼</h1>
            </a>
        </section>
    )
};