import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ReportCard from "./ReportCard";
import { MLODZI_WYBORCY_REPORT } from "@/constants/reports/mlodzi-wyborcy";

const ReportCarousel = () => {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            skipSnaps: false,
            dragFree: false,
        },
        [
            Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
            }),
        ]
    );

    return (
        <div className="w-full select-none border-b border-bluish-gray py-[32px]">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-[24px] px-8">
                    {MLODZI_WYBORCY_REPORT.publications.map((pub, index) => (
                        <ReportCard
                            key={index}
                            title={pub.title}
                            organisation={pub.organisation}
                            url={pub.url}
                            logo={pub.logo}
                            background={pub.background}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReportCarousel;
