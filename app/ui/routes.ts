import {
  HomeIcon,
  SparklesIcon,
  QuestionMarkCircleIcon,
  ChatBubbleOvalLeftIcon,
  StarIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: HomeIcon,
  },
  {
    title: "Our Wines",
    href: "/wines",
    Icon: SparklesIcon,
  },
  {
    title: "About",
    href: "/about",
    Icon: QuestionMarkCircleIcon,
  },
  {
    title: "Contact",
    href: "/contact",
    Icon: ChatBubbleOvalLeftIcon,
  },
  {
    title: "Visit",
    href: "#",
    Icon: StarIcon,
  },
  {
    title: "CA Prop 65",
    href: "#",
    Icon: ExclamationCircleIcon,
  },
];
