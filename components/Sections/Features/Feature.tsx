import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FeatureProps = {
  icon: React.ElementType;
  title: string;
  desc: string;
  linkTitle: string;
  linkUrl: string;
}

const Feature = ({ icon: Icon, title, desc, linkTitle, linkUrl }: FeatureProps) => {
  return (
    <div className="text-center mb-8">
      <Icon className="text-blue-600 w-12 h-12 mb-4 mx-auto" />
      <h2 className="text-white font-bold text-2xl mb-4">{title}</h2>
      <p className="text-gray-400 mb-4">
        {desc}
      </p>
      <a href={linkUrl} className="text-blue-500 text-sm font-medium group">{linkTitle}
        <FontAwesomeIcon icon={faAngleRight} className="size-3 ml-[2px] inline-flex text-blue-500 group-hover:ml-2 transition-all duration-75" />
      </a>
    </div>
  )
}

export default Feature;
