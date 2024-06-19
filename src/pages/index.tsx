import fsPromises, * as fs from "fs/promises";
import path from "path";

import { NextPage } from "next";

import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Layout from "@/components/Layout";
import Publications from "@/components/Publications";
import ResumeTitle from "@/components/ResumeTitle";
// import ScrollProgress from "@/components/ScrollProgress";
import { DataProps, InformationProps, PublicationsProps } from "@/types";
import Music from "@/components/Music";

const Home: NextPage<DataProps> = ({
  resumeTitle,
  information,
  publications,
  education,
  music,
}) => {
  return (
    <>
      {/* <ScrollProgress /> */}
      <ResumeTitle resumeTitle={resumeTitle} />
      <Layout>
        <Information information={information} />
        {/* <WorkExperience workExperience={workExperience} /> */}
        <Publications publications={publications} />
        {/* <Activity activity={activity} /> */}
        <Education education={education} />
        {/* <Certificate certificate={certificate} /> */}
        <Music music={music} />
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

  // const workExperienceWithData = objectData.workExperience.map(
  //   async (item: WorkExperienceProps) => {
  //     return getImgSrc({
  //       section: "workExperience",
  //       item: await getMd({ section: "workExperience", item }),
  //     });
  //   },
  // );

  const publicationsWithData = objectData.publications.map(async (item: PublicationsProps) => {
    return getImgSrc({ section: "publications", item: await getMd({ section: "publications", item }) });
  });

  return {
    props: {
      ...objectData,
      information: await informationWithData,
      // workExperience: await Promise.all(workExperienceWithData),
      publications: await Promise.all(publicationsWithData),
    },
  };
};

const getMd = async ({
  section,
  item,
}: {
  section: string;
  item: InformationProps | PublicationsProps;
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
  item: InformationProps | PublicationsProps;
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
