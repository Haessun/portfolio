import GithubIcon from "@/assets/Image/github.svg";
import WebIcon from "@/assets/Image/web.svg";

const Links = ({ repoUrl, webUrl }: { repoUrl: string | undefined; webUrl: string | undefined }) => {
  return (
    <div className="flex gap-1">
      {repoUrl && (
      <a target="_blank" rel="noreferrer" href={repoUrl} className="w-fit">
        <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
      </a>
      )}
      {webUrl && (
        <a target="_blank" rel="noreferrer" href={webUrl} className="w-fit">
          <WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}
    </div>
  );
};

export default Links;
