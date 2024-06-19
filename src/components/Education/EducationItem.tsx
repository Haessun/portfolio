const EducationItem = ({ name, description, period }: {
  name: string;
  description: string;
  period: string[];
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-1">
      <div className="flex flex-col gap-1">
        <div className="flex flex-col">
          <h4>{name}</h4>
          <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
        </div>
        <span className="whitespace-pre-wrap">{`${description}`}</span>
      </div>
    </div>
  );
};

export default EducationItem;
