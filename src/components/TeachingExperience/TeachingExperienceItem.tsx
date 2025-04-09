import { TeachingExperienceProps } from "@/types";

const TeachingExperienceItem = ({ name, lecture, period }: TeachingExperienceProps) => {
  return (
    <div className="flex flex-col mb-4">
      <h4>{lecture}</h4>

      <div className="flex justify-between items-center w-full">
        <span className="font-medium text-base">{name}</span>
        <span className="text-sm text-gray-500">{`${period[0]} - ${period[1]}`}</span>
      </div>
    </div>
  );
};

export default TeachingExperienceItem;
