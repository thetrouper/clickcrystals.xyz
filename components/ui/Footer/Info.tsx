import Image from 'next/image';
import logo from '@/public/cc-full.png';
import Link from 'next/link';

export default function Info() {
  return (
    <Link href="/">
      <Image src={logo} alt="ClickCrystals" width={250} className="h-auto" />
    </Link>
  );
}
