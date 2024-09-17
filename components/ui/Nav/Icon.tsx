import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type IconProps = {
  icon: IconDefinition;
  url: string;
};

export const Icon = ({ icon, url }: IconProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="focus:text-gray-700 hover:text-gray-700 inline-flex items-center p-2.5 rounded-lg text-sm transition-custom"
    >
      <FontAwesomeIcon icon={icon} className="size-5 text-gray-400" />
    </Link>
  );
};
