import React, { useRef } from "react";
import Button from "@/components/shared/Button";

interface ReportCardProps {
  title: string;
  organisation: string;
  url: string;
  logo?: string;
  background?: string;
}

const ReportCard = ({ title, organisation, url, logo, background }: ReportCardProps) => {
  const isDragging = useRef(false);

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging.current) e.preventDefault();
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseDown={() => (isDragging.current = false)}
      onMouseMove={() => (isDragging.current = true)}
      onClick={handleClick}
      className="no-underline select-none"
    >
      <Button
        tag="div"
        styleType="outlined"
        className={`
          group relative flex-shrink-0 overflow-hidden text-sea-storm border border-bluish-gray 
          p-[24px] h-[118px] md:h-[204px] w-[384px] transition-all duration-300
          ${background ? "bg-cover bg-center" : "bg-[rgba(255,255,255,0.9)]"}
        `}
        style={{ backgroundImage: background ? `url(${background})` : undefined }}
      >
        {/* Overlay */}
        {background && (
          <div className="absolute inset-0 bg-white/90 group-hover:bg-white/70 transition-colors duration-300 pointer-events-none" />
        )}

        <div className="flex flex-col justify-between h-full relative z-10">
          <h3 className="text-[16px] md:text-[24px] font-bold leading-[1.2] md:line-clamp-3 line-clamp-2">
            {title}
          </h3>

          <div className="font-medium uppercase tracking-wide">
            {logo ? (
              <img
                src={logo}
                alt={organisation}
                className="h-[16px] md:h-[24px] object-contain select-none"
              />
            ) : (
              <span className="truncate">{organisation}</span>
            )}
          </div>
        </div>
      </Button>
    </a>
  );
};

export default ReportCard;
