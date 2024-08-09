import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { Container } from '../Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type SocialProps = {
  icon: IconDefinition;
  url: string;
  className: string;
}

export const Social = ({ icon, url, className }: SocialProps) => {
  return (
    <li>
      <Link href={url} target={url === "#" ? undefined : "_blank"} className="inline-flex focus:outline-0">
        <Container className='p-2'>
          <FontAwesomeIcon icon={icon} className={`size-5 my-auto bg-blue-50 hover:bg-blue-200 rounded-full p-2 transition ${className}`} />
        </Container>
      </Link>
    </li>
  )
}