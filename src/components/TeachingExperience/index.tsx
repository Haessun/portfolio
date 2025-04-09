import SectionTitle from "../SectionTitle";
import TeachingExperienceItem from "./TeachingExperienceItem";

import { DataProps } from "@/types";

const TeachingExperience = ({ teachingExperience }: Pick<DataProps, "teachingExperience">) => {
  return (
    <div>
      <SectionTitle>Teaching Experience</SectionTitle>
      <div className="flex flex-col gap-14">
        {[...teachingExperience].reverse().map((experience) => (
          <TeachingExperienceItem key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default TeachingExperience;
