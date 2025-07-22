import FacebookIcon from "@/components/icons/FacebookIcon";
import PintrestIcon from "@/components/icons/PintrestIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";

export default function SocialMediaLinks() {
  return (
    <ul className="flex justify-between">
      <li>
        <a href="#">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="#">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a href="#">
          <PintrestIcon />
        </a>
      </li>
      <li>
        <a href="#">
          <YoutubeIcon />
        </a>
      </li>
    </ul>
  );
}
