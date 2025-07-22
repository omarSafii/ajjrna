import Image from "next/image";
import facebookImage from "/public/images/social-media/facebook.png";
import instagramImage from "/public/images/social-media/instagram.png";
import twitterImage from "/public/images/social-media/twitter.png";
import whatsappImage from "/public/images/social-media/whatsapp.png";

export default function SocialMediaLinks() {
  return (
    <ul className="flex gap-4">
      {socialMedia.map(({ name, image, href }) => (
        <li key={name}>
          <a href={href}>
            <Image src={image} alt={name} />
          </a>
        </li>
      ))}
    </ul>
  );
}

const socialMedia = [
  { image: facebookImage, name: "facebook", href: "#" },
  { image: instagramImage, name: "instagram", href: "#" },
  { image: twitterImage, name: "twitter", href: "#" },
  { image: whatsappImage, name: "whatsapp", href: "#" },
];
