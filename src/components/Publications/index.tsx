// import SectionTitle from "../SectionTitle";
// import ProjectItem from "./ProjectItem";

// import { DataProps } from "@/types";

// const Publications = ({ publications }: Pick<DataProps, "publications">) => {
//   return (
//     <>
//       <div>
//         <SectionTitle>Publications</SectionTitle>
//         <div className="flex flex-col gap-14">
//           {[...publications].reverse().map((project) => (
//               <ProjectItem key={project.id} {...project} />
//             ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Publications;

import SectionTitle from "../SectionTitle";
import ProjectItem from "./ProjectItem";

import { DataProps, PublicationsProps } from "@/types";

const Publications = ({ publications }: Pick<DataProps, "publications">) => {
  // 연도별로 그룹화
  const grouped = publications.reduce((acc: Record<string, PublicationsProps[]>, pub) => {
    const yearMatch = pub.conference.match(/(20\d{2})/);
    const year = yearMatch ? yearMatch[1] : "Others";
    if (!acc[year]) acc[year] = [];
    acc[year].push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(grouped).sort((a, b) => +b - +a);

  return (
    <div>
      <SectionTitle>Publications</SectionTitle>
      <div className="flex flex-col gap-14">
        {sortedYears.map((year) => (
          <ProjectItem key={year} year={year} items={grouped[year]} />
        ))}
      </div>
    </div>
  );
};

export default Publications;
