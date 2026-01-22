import { LeadershipExperienceProps } from "@/types";

const LeadershipExperienceItem = ({ name, lecture, period }: LeadershipExperienceProps) => {
  return (
    <div className="flex flex-col mb-1.5 text-sm">
      <h5 style={{ fontSize: '16px' }}>{lecture}</h5>

      <div className="grid grid-cols-[1fr_160px] gap-4 w-full">
        <span className="break-words italic">{name}</span>
        <span className="text-gray-500 whitespace-nowrap text-right">
          {period.length === 1 ? period[0] : `${period[0]} - ${period[1]}`}
        </span>
      </div>
    </div>
  );
};

export default LeadershipExperienceItem;
