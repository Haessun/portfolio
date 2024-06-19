import SectionTitle from "../SectionTitle";
import MusicItem from "./MusicItem";

import { DataProps } from "@/types";

// const Music = ({ music }: Pick<DataProps, "music">) => {
//   console.log(music)
//   return (
//     <>
//       <div>
//         <SectionTitle>Music</SectionTitle>
//         <div className="flex flex-col gap-24">
//           {[...music].reverse().map((music) => (
//             <MusicItem key={music.id} {...music} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

const Music = ({ music }: Pick<DataProps, "music">) => {
  // Ensure `music` is an array, even if it's undefined or null
  const musicArray = music || [];

  return (
    <div>
      <SectionTitle>Music</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...musicArray].reverse().map((musicItem) => (
          <MusicItem key={musicItem.id} {...musicItem} />
        ))}
      </div>
    </div>
  );
};

export default Music;
