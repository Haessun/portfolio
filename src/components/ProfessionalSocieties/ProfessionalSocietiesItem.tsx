import { ProfessionalSocietiesProps } from "@/types";


const ProfessionalSocietiesItem = ({ review, membership }: ProfessionalSocietiesProps) => {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <div>
        <h5 className="font-semibold border-b border-dotted border-gray-200 mb-1">
          Academic Paper Reviewer
        </h5>
        <ul className="list-disc list-inside">
          {review.map((item, idx) => (
            <li key={`review-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="font-semibold border-b border-dotted border-gray-200 mb-1">
          Membership
        </h5>
        <ul className="list-disc list-inside">
          {membership.map((item, idx) => (
            <li key={`member-${idx}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfessionalSocietiesItem;
