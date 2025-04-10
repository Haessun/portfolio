// const EducationItem = ({ name, description, period, thesis, researchArea }: {
//   name: string;
//   description?: string;
//   period: string[];
//   thesis?: string;
//   researchArea?: string;
// }) => {
//   const [title, school] = name.split(" @ ");

//   return (
//     // <div className="flex flex-col md:flex-row gap-2 md:gap-1 reduced-spacing">
//     <div className="flex flex-col md:flex-row gap-2 md:gap-1 mb-1">
//       <div className="flex flex-col gap-1">
//         <div className="flex flex-col">
//           <h4 className="h4-5">
//             {title}
//             {school && (
//               <span className="ml-1 text-sm italic text-gray-500">@ {school}</span>
//             )}
//           </h4>
//           <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
//         </div>
//         {description && <span className="whitespace-pre-wrap">{description}</span>}
//         {thesis && (
//           <span className="whitespace-pre-wrap">
//             {thesis.startsWith("Thesis:") ? (
//               <>
//                 <strong>Thesis:</strong>{" "}
//                 {thesis.replace(/^Thesis:\s*/, "")}
//               </>
//             ) : (
//               thesis
//             )}
//           </span>
//         )}
//         {researchArea && <span className="whitespace-pre-wrap">{researchArea}</span>}
//       </div>
//     </div>
//   );
// };

// export default EducationItem;

const EducationItem = ({
  name,
  description,
  period,
  thesis,
  researchArea,
}: {
  name: string;
  description?: string;
  period: string[];
  thesis?: string;
  researchArea?: string;
}) => {
  const [title, school] = name.split(" @ ");

  return (
    <div className="flex flex-col gap-1 mb-4">
      <div className="flex flex-wrap justify-between items-start gap-x-4">
        <h4 className="h4-5 min-w-0">
          {title}
          {school && (
            <span className="ml-1 text-sm italic text-gray-500">
              @ {school}
            </span>
          )}
        </h4>
        <span className="text-sm text-gray-600 whitespace-nowrap self-start">
          {`${period[0]}${period[1] ? " - " + period[1] : ""}`}
        </span>
      </div>

      {description && (
        <span className="whitespace-pre-wrap">{description}</span>
      )}

      {thesis && (
        <span className="whitespace-pre-wrap">
          {thesis.startsWith("Thesis:") ? (
            <>
              <strong>Thesis:</strong>{" "}
              {thesis.replace(/^Thesis:\s*/, "")}
            </>
          ) : (
            thesis
          )}
        </span>
      )}

      {researchArea && (
        <span className="whitespace-pre-wrap">{researchArea}</span>
      )}
    </div>
  );
};
