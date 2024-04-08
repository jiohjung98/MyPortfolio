import Image from 'next/image'

export default function IndiHeader() {
    return (
        <section className="container mx-auto flex">
            <a className="container mx-auto flex md:flex-row flex-col items-center" href="https://github.com/jiohjung98/Indiconnect">
                <Image src='/Indi-logo.png' alt='Indi-logo'width="60" height="60"></Image>
                <div className="ml-5 text-2xl font-semibold">IndiConnects - 뮤지션과 업주, 관객 연결 플랫폼</div>
            </a>
        </section>
    )
};