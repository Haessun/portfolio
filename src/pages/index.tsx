import fsPromises, * as fs from "fs/promises";
import path from "path";

import { NextPage } from "next";

import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Layout from "@/components/Layout";
import Publications from "@/components/Publications";
import ResumeTitle from "@/components/ResumeTitle";
import TeachingExperience from "@/components/TeachingExperience";
import WorkExperience from "@/components/WorkExperience";
import ProfessionalSocieties from "@/components/ProfessionalSocieties";

// import ScrollProgress from "@/components/ScrollProgress";
import { DataProps, InformationProps, PublicationsProps, WorkExperienceProps, TeachingExperienceProps, ProfessionalSocietiesProps } from "@/types";
import Music from "@/components/Music";
import AdditionalSkills from "@/components/AdditionalSkills/AdditionalSkills";

const Home: NextPage<DataProps> = ({
  resumeTitle,
  information,
  publications,
  education,
  workExperience,
  teachingExperience,
  professionalSocieties,
  music,
}) => {
  return (
    <>
      {/* <ScrollProgress /> */}
      <ResumeTitle resumeTitle={resumeTitle} />
      <Layout>
        <Information information={information} />
        <Education education={education} />
        <WorkExperience workExperience={workExperience}/>
        {/* <WorkExperience workExperience={workExperience} /> */}
        <Publications publications={publications} />
        {/* <Activity activity={activity} /> */}
        <TeachingExperience teachingExperience={teachingExperience} />
        <ProfessionalSocieties professionalSocieties={professionalSocieties} />

        {/* <Certificate certificate={certificate} /> */}
        <AdditionalSkills />
        {/* <Music music={music} /> */}
      </Layout>
      <Footer contact={information.contact} name={information.name} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = await fsPromises.readFile(filePath, "utf8");
  const objectData = JSON.parse(jsonData);

  const informationWithData = getImgSrc({
    section: "information",
    item: await getMd({ section: "information", item: { ...objectData.information } }),
  });

  const workExperienceWithData = objectData.workExperience.map(
    async (item: WorkExperienceProps) => {
      return getImgSrc({
        section: "workExperience",
        item: await getMd({ section: "workExperience", item: await getMd({ section: "workExperience", item }) }),
      });
    },
  );

  const teachingExperienceWithData = objectData.teachingExperience.map(
    async (item: TeachingExperienceProps) => {
      return getImgSrc({
        section: "teachingExperience",
        item: await getMd({ section: "teachingExperience", item: await getMd({ section: "teachingExperience", item }) }),
      });
    },
  );

  const publicationsWithData = objectData.publications.map(async (item: PublicationsProps) => {
    return getImgSrc({ section: "publications", item: await getMd({ section: "publications", item }) });
  });

  const professionalSocietiesWithData = objectData.professionalSocieties;

  return {
    props: {
      ...objectData,
      information: await informationWithData,
      workExperience: await Promise.all(workExperienceWithData),
      teachingExperience: await Promise.all(teachingExperienceWithData),
      professionalSocieties: await Promise.all(professionalSocietiesWithData),
      publications: await Promise.all(publicationsWithData),
    },
  };
};

const getMd = async ({
  section,
  item,
}: {
  section: string;
  item: InformationProps | PublicationsProps | WorkExperienceProps | TeachingExperienceProps | ProfessionalSocietiesProps;
}) => {
  try {
    const markdownModule = await import(
      `../../public/markdown/${section}/${"id" in item ? item.id : "introduce"}.md`
    );
    return { ...item, markdown: markdownModule.default as string };
  } catch {
    console.log("no markdown");
    return item;
  }
};

const getImgSrc = async ({
  section,
  item,
}: {
  section: string;
  item: InformationProps | PublicationsProps | WorkExperienceProps | TeachingExperienceProps | ProfessionalSocietiesProps;
}) => {
  const imgSrc = `/images/${section}/${"id" in item ? item.id : "profile"}.png`;
  const filePath = path.join(process.cwd(), "public", imgSrc);
  try {
    await fs.stat(filePath);
    return { ...item, imgSrc: imgSrc };
  } catch {
    console.log("no img");
    return item;
  }
};
