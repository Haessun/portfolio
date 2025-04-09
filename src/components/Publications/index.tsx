import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { DataProps } from "@/types";

const Publications = ({ publications }: Pick<DataProps, "publications">) => {
  return (
    <>
      <div>
        <SectionTitle>Publications</SectionTitle>
        <div className="flex flex-col gap-14">
          {[...publications].reverse().map((project) => (
              <ProjectItem key={project.id} {...project} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Publications;
