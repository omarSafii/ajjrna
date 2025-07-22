import routes from "@/config/routes";
import { CircleHelpIcon, HomeIcon, ImagesIcon, InfoIcon, PackageSearchIcon, PhoneIcon, ShoppingCartIcon } from "lucide-react";

const navigation = [
  { name: "Home", href: routes.index, Icon: HomeIcon },
  { name: "About", href: routes.about.index, Icon: InfoIcon },
  { name: "Contact us", href: routes.contactUs.index, Icon: PhoneIcon },
  { name: "FAQ", href: routes.faq.index, Icon: CircleHelpIcon },
  { name: "Gallery", href: routes.gallery.index, Icon: ImagesIcon },
  { name: "Payment", href: routes.payment.index, Icon: ShoppingCartIcon },
  { name: "Products", href: routes.products.index, Icon: PackageSearchIcon },
];

export default navigation;
