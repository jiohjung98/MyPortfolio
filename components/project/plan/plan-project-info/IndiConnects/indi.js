import IndiHeader from './indi-header';
import IndiInfoSection from './indi-info-section';
import IndiImageSection from './indi-image-section';

export default function Indi() {
    return (
        <div className='flex-row'>
            <IndiHeader/>
            <section className="container mx-auto flex py-5 md:flex-row flex-col items-stretch">
                <div className="flex-1">
                    <IndiInfoSection />
                </div>
                <div className="flex-1">
                    <IndiImageSection />
                </div>
            </section>
        </div>
    );
}
