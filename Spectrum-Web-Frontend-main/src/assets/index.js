import Image from "next/image";
import createIcon from "@/hocs/createIcon";
// Logos
import Google from "@/assets/logos/google.svg";
import Facebook from "@/assets/logos/facebook.svg";
import Linkedin from "@/assets/logos/linkedin.svg";
import Instagram from "@/assets/logos/instagram.svg";
import X from "@/assets/logos/x.svg";
import Whatsapp from "@/assets/logos/whatsapp.svg";

// Images
import NotFoundImg from "@/assets/images/not_found.png";
import AuthCarousel_1 from "@/assets/images/auth_carousel_1.png";
import AuthCarousel_2 from "@/assets/images/auth_carousel_2.png";
import Onboarding_1 from "@/assets/images/onboarding_1.png";

// Icons
import CheckboxFilled from "@/assets/icons/check_box_filled.svg";
import EmbedStroke from "@/assets/icons/embed_stroke.svg";

export const LOGOS = {
  google: createIcon(Google),
  facebook: createIcon(Facebook),
  linkedin: createIcon(Linkedin),
  instagram: createIcon(Instagram),
  x: createIcon(X),
  whatsapp: createIcon(Whatsapp),
};

export const IMAGES = {
  not_found: NotFoundImg,
  auth_carousel_1: AuthCarousel_1,
  auth_carousel_2: AuthCarousel_2,
  onboarding_1: Onboarding_1,
};

export const ICONS = {
  check_box_filled: createIcon(CheckboxFilled),
  embed_stroke: createIcon(EmbedStroke),
};
