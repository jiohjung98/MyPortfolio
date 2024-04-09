import TalkHeader from './talk-header';
import TalkInfoSection from './talk-info-section';
import TalkImageSection from './talk-image-section';

export default function Talk() {
    return (
        <div className='wrapper'>
            <TalkHeader/>
            <section className="container mx-auto flex py-5 md:flex-row flex-col items-stretch">
                <div className="flex-1">
                    <TalkInfoSection />
                </div>
                <div className="flex-1">
                    <TalkImageSection />
                </div>
            </section>
        </div>
    );
}
