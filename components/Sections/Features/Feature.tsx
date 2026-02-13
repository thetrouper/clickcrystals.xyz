'use client';

import { motion } from 'framer-motion';
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
  index: number;
};

const Feature = ({
  icon = null,
  title,
  desc,
  linkTitle = false,
  linkUrl = false,
  index,
}: FeatureProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full p-6 rounded-xl bg-slate-800/30 border border-slate-700/40 hover:border-slate-600/60 transition-colors"
    >
      {icon != null && (
        <div className="mb-4">
          <Image
            src={icon}
            width={48}
            height={48}
            alt=""
            className="opacity-90"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="text-white font-semibold text-2xl mb-3 leading-tight">{title}</h3>
        <p className="text-slate-300 text-base mb-6 leading-relaxed flex-1">{desc}</p>
        {linkTitle && (
          <Link
            href={linkUrl}
            target={linkUrl.startsWith('https://') ? '_blank' : ''}
            className="text-blue-400 text-base font-medium hover:text-blue-300 inline-flex items-center gap-2 group mt-auto"
          >
            {linkTitle}
            <FontAwesomeIcon
              icon={faAngleRight}
              className="size-3 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Feature;
