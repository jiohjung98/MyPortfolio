import ShimpyoHeader from './shimpyo-header'
import ShimpyoInfoSection from './shimpyo-info-section'
import ShimpyoImageSection from './shimpyo-image-section'

export default function Shimpyo() {
    return (
        <div className="wrapper">
            <ShimpyoHeader/>
            <section className="container mx-auto flex py-5 md:flex-row flex-col items-stretch">
                <div className="flex-1">
                    <ShimpyoInfoSection />
                </div>
                <div className="flex-1">
                    <ShimpyoImageSection />
                </div>
            </section>
        </div>
    );
}
