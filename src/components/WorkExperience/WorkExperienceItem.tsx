import Image from "next/image";
import { WorkExperienceProps } from "@/types";

const WorkExperienceItem = ({name, period, description, imgSrc}: WorkExperienceProps) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      {/* 이미지 */}
      {imgSrc && (
        <div className="w-24 h-24 relative flex-shrink-0">
          <Image
            src={imgSrc}
            fill
            alt={name}
            className="object-contain rounded-md"
          />
        </div>
      )}

      {/* 텍스트 */}
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <h4 className="h4-5">{name}</h4>
          <p className="text-sm text-gray-500 md:text-right md:mt-0 mt-1 whitespace-nowrap leading-none">
            {`${period[0]}${period[1] ? " - " + period[1] : ""}`}
          </p>
        </div>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
