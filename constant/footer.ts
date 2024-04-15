export interface FooterLink {
    title: string;
    href: string;
  }
  
  export interface FooterSection {
    title: string;
    links: FooterLink[];
  }
  
  export const footerData: FooterSection[] = [
    {
      title: "Research",
      links: [
        { title: "Overview", href: "#" },
        { title: "Index", href: "#" },
        { title: "GPT-4", href: "#" },
        { title: "DALL·E 3", href: "#" },
        { title: "Sora", href: "#" },
      ],
    },
    {
      title: "API",
      links: [
        { title: "Overview", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Docs", href: "#" },
      ],
    },
    {
      title: "ChatGPT",
      links: [
        { title: "Overview", href: "#" },
        { title: "Team", href: "#" },
        { title: "Enterprise", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Try ChatGPT", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Charter", href: "#" },
        { title: "Security", href: "#" },
        { title: "Customer stories", href: "#" },
        { title: "Safety", href: "#" },
      ],
    },
  ];
  