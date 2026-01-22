import SectionTitle from "../SectionTitle";
import TeachingExperienceItem from "./LeadershipExperienceItem";

import { DataProps } from "@/types";

const LeadershipExperience = ({ leadershipExperience }: Pick<DataProps, "leadershipExperience">) => {
  return (
    <div>
      <SectionTitle>Leadership Experience & Extracurricular Activities</SectionTitle>
      <div className="flex flex-col gap-14">
        {[...leadershipExperience].reverse().map((experience) => (
          <LeadershipExperienceItem key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default LeadershipExperience;