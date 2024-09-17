import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClickCrystals - Gallery',
};

import Gallery from '@/components/Sections/gallery/Gallery';

export default function GalleryPage() {
  return <Gallery />;
}
