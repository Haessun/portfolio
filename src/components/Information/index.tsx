import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import Image from "next/image";
import profile from "@/assets/Image/profile.jpeg";

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          {
              <Image
                src={profile}
                width={130}
                height={150}
                alt={information.name}
                className="rounded-full border-[1px] border-GRAY_LIGHT dark:border-white"
              />
          }
        <h1 className="leading-[1.15]">
          Music AI Researcher 🎶
          <br />
          <span className="text-PRIMARY_NAME font-semibold">{"Haesun Joung"}</span>
        </h1>
        </div>
        <div className="flex gap-1">
          {information.contact.map((contact) => (
            <ContactItem
              key={contact.id}
              className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
              {...contact}
            >
              {contact.name}
            </ContactItem>
          ))}
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
