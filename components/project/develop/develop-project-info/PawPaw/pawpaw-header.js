import Image from 'next/image'

export default function PawPawHeader() {
    return (
        <section className="container mx-auto flex">
            <a className="container mx-auto flex md:flex-row flex-col items-center" href="https://github.com/jiohjung98/HanyangCapston">
                <Image src='/PawPaw-logo.png' alt='PawPaw-logo'width="50" height="50"></Image>
                <h1 className="ml-5 text-3xl font-semibold">PawPaw - AI 기술을 활용한 실종 반려견 찾기</h1>
            </a>
        </section>
    )
};