'use client'

import Image from "next/image";
import { StarRating } from "./StarRating";
import { Container } from "../../ui/Container";
import Link from "next/link";

type ReviewProps = {
  picture: string;
  name: string;
  message: string;
  rating: number;
  url?: string;
};

const Review = ({ picture, name, message, rating, url = "#" }: ReviewProps) => {
  return (
    <div className="p-6 rounded-lg bg-white border cursor-pointer">
      <div className="flex flex-row">
        <div className="flex items-center">
          <Container>
            <Link href={url} target={url === "#" ? undefined : "_blank"}>
              <Image src={picture} alt={name} className="rounded-full w-10 h-10" width={40} height={40} />
            </Link>
          </Container>
          <div className="ml-4">
            <Container><Link href={url} target={url === "#" ? undefined : "_blank"}><h4 className="text-gray-800 text-sm">{name}</h4></Link></Container>
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-800 text-sm leading-relaxed">“{message}”</p>
      </div>
    </div>
  );
};

export default Review;
