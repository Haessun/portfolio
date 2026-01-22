import { LeadershipExperienceProps } from "@/types";

const LeadershipExperienceItem = ({ name, lecture, period }: LeadershipExperienceProps) => {
  return (
    <div className="flex flex-col mb-4">
      <h5>{lecture}</h5>

      <div className="flex justify-between items-center w-full">
        <span>{name}</span>
        <span className="text-gray-500">{`${period[0]} - ${period[1]}`}</span>
      </div>
    </div>
  );
};

export default LeadershipExperienceItem;
