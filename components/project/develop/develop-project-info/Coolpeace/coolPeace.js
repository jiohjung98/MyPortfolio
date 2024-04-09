import Image from 'next/image'
import CoolPeaceInfoSection from './coolPeace-info-section'
import CoolPeaceImageSection from './coolPeace-image-section'
import CoolPeaceHeader from './coolPeace-header'

export default function CoolPeace() {
    return (
        <div className="wrapper">
            <CoolPeaceHeader />
            <section className="container mx-auto flex py-5 md:flex-row flex-col items-stretch">
                <div className="flex-1">
                    <CoolPeaceInfoSection />
                </div>
                <div className="flex-1">
                    <CoolPeaceImageSection />
                </div>
            </section>
        </div>
    );
}
