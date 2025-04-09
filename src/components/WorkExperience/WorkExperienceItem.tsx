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
      <div>
        <h4>{name}</h4>
        <p className="text-gray-500">{`${period[0]} - ${period[1]}`}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
