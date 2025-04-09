import SectionTitle from "../SectionTitle";
import ProfessionalSocietiesItem from "./ProfessionalSocietiesItem";

import { DataProps } from "@/types";

const ProfessionalSocieties = ({ professionalSocieties }: Pick<DataProps, "professionalSocieties">) => {
  return (
    <div>
      <SectionTitle>Professional Societies</SectionTitle>
      <div className="flex flex-col gap-14">
        {[...professionalSocieties].reverse().map((experience) => (
          <ProfessionalSocietiesItem key={experience.id} {...experience} />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalSocieties;
