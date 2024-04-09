import PawPawHeader from './pawpaw-header';
import PawPawInfoSection from './pawpaw-info-section';
import PawPawImageSection from './pawpaw-image-section';

export default function PawPaw() {
    return (
        <div className="wrapper">
        <PawPawHeader/>
            <section className="container mx-auto flex py-5 md:flex-row flex-col items-stretch">
                <div className="flex-1">
                    <PawPawInfoSection />
                    </div>
                    <div className="flex-1">
                        <PawPawImageSection />
                    </div>
            </section>
        </div>
    );
}