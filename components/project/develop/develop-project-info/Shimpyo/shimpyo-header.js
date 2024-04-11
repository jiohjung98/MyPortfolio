import Image from 'next/image'

export default function ShimpyoHeader() {
    return (
        <section className="container mx-auto flex">
            <a className="container mx-auto flex md:flex-row flex-col items-center" href="https://github.com/Shimpyo-House/Shimpyo_FE">
                <Image src='/Shimpyo-logo.png' alt='Shimpyo-logo'width="50" height="50"></Image>
                <h1 className="ml-5 text-3xl font-semibold hover:underline">Shimpyo - Open API 숙소 예약 웹앱 서비스</h1>
            </a>
        </section>
    )
};