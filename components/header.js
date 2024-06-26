import Link from 'next/link';
import DarkmodeToggleButton from './darkmode-toggle-button';

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" legacyBehavior>
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="w-10 h-10" src='/Main-logo.png' alt="MainLogo" />
                    <h2 className="ml-3 text-2xl">정지오 포트폴리오</h2>
                    </a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/" legacyBehavior>
                    <h2 className="px-5 hover:text-gray-500 cursor-pointer font-bold text-xl">Home</h2>
                </Link>
                <Link href="/project" legacyBehavior>
                    <h2 className="hover:text-gray-500 cursor-pointer font-bold text-xl">Project</h2>
                </Link>
                <Link href="/aboutMe" legacyBehavior>
                    <h2 className="px-5 hover:text-gray-500 cursor-pointer font-bold text-xl">Awards</h2>
                </Link>
                </nav>
                <DarkmodeToggleButton/>
            </div>
            </header>
        </>
    )
}