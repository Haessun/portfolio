import Image from "next/image";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import Links from "./Links";

import { PublicationsProps } from "@/types";

const boldName = (text: string, name: string) => {
  const regex = new RegExp(`(${name})`, 'g');
  return text.replace(regex, '**$1**');
};

const PublicationsItem = ({
  name,
  abstract,
  repoUrl,
  webUrl,
  author,
  conference,
  stack,
  markdown,
  imgSrc,
}: PublicationsProps) => {
  const [isAbstractVisible, setIsAbstractVisible] = useState(false);
  const authorWithBoldName = boldName(author, "Haesun Joung");
  const toggleAbstractVisibility = () => {
    setIsAbstractVisible(!isAbstractVisible);
  };
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <div className="flex items-center gap-4">
        {imgSrc && (
          <Image
            src={imgSrc}
            width="200"
            height="200"
            alt={name}
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT dark:border-white border-solid w-24 h-24"
          />
        )}
        <div className="flex flex-col gap-2">
          <h4>{name}</h4>
          <div className="flex flex-col">
            <span>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {authorWithBoldName}
                </ReactMarkdown>
            </span>
            <span>{`${conference}`}</span>
          </div>
          <div className="flex items-center gap-4">
            {(repoUrl && !webUrl) && <Links repoUrl={repoUrl} webUrl={undefined} />}
            {(!repoUrl && webUrl) && <Links repoUrl={undefined} webUrl={webUrl} />}
            {(repoUrl && webUrl) && <Links repoUrl={repoUrl} webUrl={webUrl} />}
            <div className="flex gap-1 flex-wrap">
              {stack.map((stack) => (
                <span
                  key={stack}
                  className="bg-BLACK dark:bg-white py-[2px] px-1.5 rounded-md text-xs font-medium font-mono whitespace-nowrap text-white dark:text-BLACK"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={toggleAbstractVisibility}
            className="flex items-center text-primary hover:underline"
          >
            <span
              className={`transform transition-transform ${
                isAbstractVisible ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
            <span className="ml-1">{isAbstractVisible ? "Hide Abstract" : "Abstract"}</span>
          </button>
        </div>
      </div>
      {isAbstractVisible && (
        <div className="md:border-GRAY_LIGHT md:border-solid md:border-t-[1px] md:pt-4 markdown flex flex-col w-full gap-2">
          <blockquote className="whitespace-pre-wrap">{abstract}</blockquote>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default PublicationsItem;
