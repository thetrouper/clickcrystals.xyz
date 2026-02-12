import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

type IconProps = {
  icon: IconDefinition;
  url: string;
  hoverColor?: string;
};

export const Icon = ({ icon, url, hoverColor = 'hover:text-gray-700' }: IconProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      className={`focus:text-gray-700 ${hoverColor} inline-flex items-center p-2.5 rounded-lg text-sm transition-custom`}
    >
      <FontAwesomeIcon icon={icon} className="size-5 text-gray-400" />
    </Link>
  );
};
