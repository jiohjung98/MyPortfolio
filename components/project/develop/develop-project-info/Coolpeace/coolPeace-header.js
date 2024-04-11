import Image from 'next/image'

export default function CoolPeaceHeader() {
    return (
        <section className="container mx-auto flex">
            <a className="container mx-auto flex md:flex-row flex-col items-center" href="https://github.com/CoolPeace-yanolza">
                <Image src='/coolPeace-logo.png' alt='Coolpeace-logo'width="50" height="50"></Image>
                <h1 className="ml-5 text-3xl font-semibold hover:underline" href="https://github.com/CoolPeace-yanolza">Coolpeace - B2B 셀프 쿠폰 백오피스</h1>
            </a>
        </section>
    )
};