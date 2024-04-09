import { useTheme } from 'next-themes';

export default function DarkmodeToggleButton() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            <button
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-50 hover:text-orange-500 dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-yellow-500 rounded text-base mt-4 md:mt-0"
                type='button'
                onClick={toggleTheme}
            >
                {/* 라이트 */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`visible dark:invisible dark:h-0 dark:w-0 h-5 w-5 ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}>
                    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>

                {/* 다크  */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`invisible dark:visible dark:h-5 dark:w-5 h-0 w-0 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}>
                    <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                </svg>
            </button>
            
            {theme === 'dark' && (
                <style jsx global>{`
                @keyframes gradient {
                    0% {
                        background-position: 0% 0%;
                    }
                    50% {
                        background-position: 100% 100%;
                    }
                    100% {
                        background-position: 0% 0%;
                    }
                }
                
                @keyframes wave {
                    2% {
                        transform: translateX(1);
                    }
                
                    25% {
                        transform: translateX(-25%);
                    }
                
                    50% {
                        transform: translateX(-50%);
                    }
                
                    75% {
                        transform: translateX(-25%);
                    }
                
                    100% {
                        transform: translateX(1);
                    }
                }
                
                body {
                    margin: auto;
                    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
                    overflow: auto;
                
                    animation: gradient 15s ease infinite;
                    background-size: 400% 400%;
                    background-attachment: fixed;
                }
                
                .wave {
                    background: linear-gradient(to bottom, rgba(255,255,255,0.1) 3%, rgba(150,150,150,0.1) 38%, rgba(100,100,100,0.1) 68%, rgba(0,0,0,0.1) 98%);
                    border-radius: 1000% 1000% 0 0;
                    position: fixed;
                    width: 200%;
                    height: 20em;
                    animation: wave 10s -3s linear infinite;
                    transform: translate3d(0, 0, 0);
                    opacity: 0.8;
                    bottom: 0;
                    left: 0;
                    z-index: -1;
                }
                
                .wave:nth-of-type(2) {
                    bottom: -1.25em;
                    animation: wave 18s linear reverse infinite;
                    opacity: 0.8;
                }
                
                .wave:nth-of-type(3) {
                    bottom: -2.5em;
                    animation: wave 20s -1s reverse infinite;
                    opacity: 0.9;
                }
                
                `}</style>
            )}
        </>
    );
}
