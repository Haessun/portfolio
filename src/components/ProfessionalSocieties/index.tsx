import SectionTitle from "../SectionTitle";
import ProfessionalSocietiesItem from "./ProfessionalSocietiesItem";
import { DataProps } from "@/types";

import { ProfessionalSocietiesProps } from "@/types";

const ProfessionalSocieties = ({
  professionalSocieties,
}: {
  professionalSocieties: ProfessionalSocietiesProps;
}) => {
  return (
    <div>
      <SectionTitle>Professional Societies</SectionTitle>
      <ProfessionalSocietiesItem {...professionalSocieties} />
    </div>
  );
};

export default ProfessionalSocieties;
