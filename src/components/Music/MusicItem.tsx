import { MusicProps } from "@/types";

const MusicItem = ({ name, date, organizer, description }: MusicProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3>{name}</h3>
          <span>{date}</span>
        </div>
        <span>{organizer}</span>
        <span className="whitespace-pre-wrap">{`${description}`}</span>
      </div>
    </div>
  );
};

export default MusicItem;
