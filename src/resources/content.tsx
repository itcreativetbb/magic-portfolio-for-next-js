import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Elorm",
  lastName: "Oscar",
  name: `Elorm Oscar`,
  role: "Web Developer & Designer",
  avatar: "/images/itcreativetbblogo.jpg",
  email: "it.creative0@gmail.com",
  location: "Africa/Accra", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/itcreativetbb/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/profile.php?id=100089026633132",
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/233545210489",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/ithome.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting Digital Experiences, from Code to Creation.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Elorm Oscar, a Web Developer & Designer. At <strong>itCreative</strong>, we build beautiful, functional, and user-friendly websites and applications.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Elorm Oscar is a multi-talented creative professional, offering a diverse range of services to bring your digital vision to life. As a skilled web and app developer, he builds robust and scalable applications. His expertise as a graphic designer and video editor ensures a polished and engaging final product. Elorm also provides expert IT consultation services and offers a variety of digital products to enhance your online presence.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "itcreativetbb",
        timeframe: "2018 - Present",
        role: "Founder & Lead Developer",
        achievements: [
          <>
            Led the development of over 30 websites and applications for clients across various industries, resulting in an average of 40% increase in user engagement.
          </>,
          <>
            Built and managed a team of designers and developers to deliver high-quality digital products on time and within budget.
          </>,
          <>
            Developed and launched a successful line of digital products, generating a new revenue stream for the company.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/itcreativetbbpro.jpg",
            alt: "itCreative Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance",
        timeframe: "2018 - 2025",
        role: "Web Developer & Designer",
        achievements: [
          <>
            Designed and developed custom websites for small businesses, helping them establish a strong online presence.
          </>,
          <>
            Provided IT consultation services to clients, improving their digital infrastructure and security.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Ghana",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/itgd.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/itweb.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/itcon.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "IT Expertise & Support",
        description: (
          <>
            As an IT expert, I excel at diagnosing and resolving complex technical issues, ensuring smooth and reliable operations for my clients.
          </>
        ),
        tags: [
          {
            name: "IT Support",
            icon: "itSupport",
          },
        ],
        images: [],
      },
      {
        title: "Cybersecurity",
        description: (
          <>
            With a strong background in cybersecurity, I am dedicated to protecting digital assets and ensuring the integrity and confidentiality of sensitive information.
          </>
        ),
        tags: [
          {
            name: "Cybersecurity",
            icon: "cybersecurity",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/itgallery1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/itgallery2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/itgallery3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/itgallery4.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/itgallery5.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/itgallery6.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/itgallery7.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/itgallery8.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
