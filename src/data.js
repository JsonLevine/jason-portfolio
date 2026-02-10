import jsIcon from "./assets/icons/Javascript-logo.svg";
import tsIcon from "./assets/icons/Typescript-logo.svg";
import reactIcon from "./assets/icons/React-logo.svg";
import nodeIcon from "./assets/icons/NodeJS-logo.svg";
import tailwindIcon from "./assets/icons/TailwindCSS-logo.svg";
import figmaIcon from "./assets/icons/Figma-logo.svg";
import photoshopIcon from "./assets/icons/Photoshop-logo.svg";
import illustratorIcon from "./assets/icons/Illustrator-logo.svg";
import officeIcon from "./assets/icons/Office-logo.svg";
import jiraIcon from "./assets/icons/Jira-logo.svg";
import confluenceIcon from "./assets/icons/Confluence-logo.svg";
import gtmIcon from "./assets/icons/GTM-logo.webp";
import gaIcon from "./assets/icons/Google-analytics-logo.svg";
import segmentIcon from "./assets/icons/Segment-logo.svg";
import optimizelyIcon from "./assets/icons/Optimizely-logo.svg";
import wordpressIcon from "./assets/icons/Wordpress-logo.svg";
import jlingoImg from "./assets/projects/jlingo.png";
import strongholdImg from "./assets/projects/stronghold.png";
import fiverrGigImg from "./assets/projects/fiverrGig.png";
import comingSoonTapeImg from "./assets/projects/comingSoonTape.png";
import chrisHeadshot from "./assets/Chris_headshot.jpg";
import adityaHeadshot from "./assets/Aditya_headshot.jpg";
import {
  ClipboardDocumentCheckIcon,
  KeyIcon,
  PresentationChartBarIcon,
  RectangleGroupIcon,
  ScaleIcon,
  UsersIcon,
  SwatchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

export const projects = [
  {
    title: "JLingo",
    subtitle: "React + Typescript",
    description:
      "A recreation of the original 'Wordle' game, originally made famous by the game show 'Lingo', and recently brought back by the New York Times - played by millions.",
    image: jlingoImg,
    link: "/jlingo",
    code: "https://github.com/JsonLevine/JLingo2",
    newTab: false,
  },
  {
    title: "Stoughton Stronghold",
    subtitle: "Wordpress",
    description:
      "Sometimes we don't want all of the overhead of creating and owning a library of code. This website that I made for my own home gym was built using exclusively Wordpress.",
    image: strongholdImg,
    link: "https://stoughtonstronghold.com/",
    newTab: true,
  },
  {
    title: "Find me on Fiverr",
    subtitle: "Accessibility Audits",
    description:
      "I have an open freelance gig posted on Fiverr where I run accessibility audits for smaller websites. I work to provide them feedback and actional improvement steps to address accessibility concerns",
    image: fiverrGigImg,
    link: "https://www.fiverr.com/json_levine/run-an-accessibility-audit-and-provide-clear-actionable-feedback",
    newTab: true,
  },
  {
    title: "More Coming Soon!",
    subtitle: "???",
    description:
      "I currently have a few more projects in the works that I can't wait to share with you! Stay tuned for updates.  In the meantime, you can check out my other projects above.",
    image: comingSoonTapeImg,
  },
];

export const testimonials = [
  {
    quote:
      '"Working with Jason was always a pleasure. He consistently demonstrated professionalism, reliability, and a positive attitude. His problem-solving skills and creativity were truly impressive, making him a valuable asset to the team. I feel fortunate to have worked alongside such a talented individual."',
    image: chrisHeadshot,
    name: "Christopher Cook",
    company: "Chewy",
    title: "Senior Software Engineer",
  },
  {
    quote:
      '"It was a genuine pleasure to work with Jason, whom I had the privilege of directly managing. As a seasoned UI developer, Jason took on the role of experimentation lead for our analytics team, showcasing his adeptness in steering medium to large-sized projects with remarkable independence. His expertise shone brightly as he efficiently addressed and resolved any experimentation-related queries, earning him the reputation of a subject matter expert. Jason’s proficiency in React is outstanding, and his ability to dive deep into complex problems sets him apart. Above all, his quick learning ability and collaborative spirit make him an invaluable asset to any team."',
    image: adityaHeadshot,
    name: "Aditya Jain",
    company: "Chewy",
    title: "Associate Director",
  },
];

export const skills = [
  { name: "JavaScript", icon: jsIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "React", icon: reactIcon },
  { name: "NodeJS", icon: nodeIcon },
  { name: "TailwindCSS", icon: tailwindIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "Adobe Photoshop", icon: photoshopIcon },
  { name: "Adobe Illustrator", icon: illustratorIcon },
  { name: "Microsoft Office", icon: officeIcon },
  { name: "JIRA", icon: jiraIcon },
  { name: "Confluence", icon: confluenceIcon },
  { name: "GTM", icon: gtmIcon },
  { name: "Google Analytics", icon: gaIcon },
  { name: "Segment.io", icon: segmentIcon },
  { name: "Optimizely", icon: optimizelyIcon },
  { name: "Wordpress", icon: wordpressIcon },
];

export const softskills = [
  {
    name: "Mentorship",
    icon: (
      <UsersIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4" />
    ),
  },
  {
    name: "Accessibility Testing",
    icon: (
      <SwatchIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4" />
    ),
  },
  {
    name: "Product Management",
    icon: (
      <RectangleGroupIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4" />
    ),
  },
  {
    name: "Stakeholder Management",
    icon: (
      <UserGroupIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4" />
    ),
  },
  {
    name: "Project Estimation",
    icon: (
      <PresentationChartBarIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4" />
    ),
  },
  {
    name: "Agile Methodologies",
    icon: (
      <ClipboardDocumentCheckIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4" />
    ),
  },
  {
    name: "A/B Testing",
    icon: (
      <ScaleIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4" />
    ),
  },
  {
    name: "Data Analytics",
    icon: (
      <KeyIcon className="text-stronghold-red-accessible w-6 h-6 flex-shrink-0 mr-4" />
    ),
  },
];
