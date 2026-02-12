import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';

type FeatureProps = {
  icon?: string | null;
  title: string;
  desc: string;
  linkTitle?: any;
  linkUrl?: any;
};

const Feature = ({
  icon = null,
  title,
  desc,
  linkTitle = false,
  linkUrl = false,
}: FeatureProps) => {
  return (
    <div className="flex flex-col items-center h-full">
      {icon != null && (
        <Image
          src={icon}
          width={72}
          height={72}
          alt=""
          className="mb-5 opacity-70"
          style={{
            imageRendering: 'pixelated',
          }}
        />
      )}
      <div className="text-left w-full flex flex-col flex-1">
        <h3 className="text-white font-semibold text-xl mb-3 leading-snug">{title}</h3>
        <p className="text-slate-400 text-base mb-5 leading-relaxed flex-1">{desc}</p>
        {linkTitle && (
          <Link
            href={linkUrl}
            target={linkUrl.startsWith('https://') ? '_blank' : ''}
            className="text-blue-400 text-base font-medium hover:text-blue-300 hover:underline inline-flex items-center gap-2 group"
          >
            {linkTitle}
            <FontAwesomeIcon
              icon={faAngleRight}
              className="size-3 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Feature;
