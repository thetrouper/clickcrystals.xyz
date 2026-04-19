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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col h-full p-7 rounded-2xl transition-colors duration-300"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)' }}
      />

      {icon != null && (
        <div className="mb-6">
          <Image
            src={icon}
            width={44}
            height={44}
            alt=""
            className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3
          className="text-white font-bold text-xl mb-3 leading-tight"
          style={{ letterSpacing: '-0.01em' }}
        >
          {title}
        </h3>
        <p className="text-slate-400 group-hover:text-slate-300 text-sm leading-7 mb-6 flex-1 transition-colors duration-300">
          {desc}
        </p>
        {linkTitle && (
          <Link
            href={linkUrl}
            target={linkUrl.startsWith('https://') ? '_blank' : ''}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium inline-flex items-center gap-2 group/link mt-auto"
          >
            {linkTitle}
            <FontAwesomeIcon
              icon={faAngleRight}
              className="size-3 group-hover/link:translate-x-1 transition-transform"
            />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Feature;
