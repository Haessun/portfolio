// import Image from "next/image";

// import { WorkExperienceProps } from "@/types";

// const WorkExperienceItem = ({ name, position, period, markdown, imgSrc }: WorkExperienceProps) => {
//   return (
//     <div className="flex flex-col md:flex-row gap-6 md:gap-0">
//       <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
//         {imgSrc && (
//           <Image
//             src={imgSrc}
//             width="200"
//             height="200"
//             alt={name}
//             className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-24 h-24"
//           />
//         )}
//         <div className="w-48">
//           <h3>{name}</h3>
//           <div className="flex flex-col">
//             <span className="m-0">{position}</span>
//             <span>{`${period[0]} - ${period[1]}`}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkExperienceItem;

import Image from "next/image";
import { WorkExperienceProps } from "@/types";

const WorkExperienceItem = ({ name, position, period, markdown, description, imgSrc }: WorkExperienceProps) => {
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
