import Image from 'next/image'

export default function ConsolveHeader() {
    return (
        <section className="container mx-auto flex">
            <a className="container mx-auto flex md:flex-row flex-col items-center" href="https://github.com/jiohjung98/Indiconnect">
                <Image src='/Consolve-logo.png' alt='Consolve-logo'width="60" height="60"></Image>
                <div className="ml-5 text-2xl font-semibold">Consolve - 콘텐츠 자격 증명 플랫폼</div>
            </a>
        </section>
    )
};