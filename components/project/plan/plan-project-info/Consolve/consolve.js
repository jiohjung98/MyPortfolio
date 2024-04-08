import ConsolveHeader from '../Consolve/consolve-header';
import ConsolveInfoSection from './consolve-info-section';
import ConsolveImageSection from './consolve-image-section';

export default function Consolve() {
    return (
        <div className='flex-row'>
            <ConsolveHeader />
            <section className="container mx-auto flex py-5 md:flex-row flex-col items-stretch">
                <div className="flex-1">
                    <ConsolveInfoSection />
                </div>
                <div className="flex-1">
                    <ConsolveImageSection />
                </div>
            </section>
        </div>
    );
}
