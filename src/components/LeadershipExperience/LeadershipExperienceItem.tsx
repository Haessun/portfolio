import { LeadershipExperienceProps } from "@/types";

const LeadershipExperienceItem = ({ name, lecture, period }: LeadershipExperienceProps) => {
  return (
    <div className="flex flex-col mb-2 text-sm">
      <h5 className="text-sm">{lecture}</h5>

      <div className="flex justify-between items-start w-full gap-4">
        <span className="break-words">{name}</span>
        <span className="text-gray-500 whitespace-nowrap flex-shrink-0">
          {period.length === 1 ? period[0] : `${period[0]} - ${period[1]}`}
        </span>
      </div>
    </div>
  );
};

export default LeadershipExperienceItem;
