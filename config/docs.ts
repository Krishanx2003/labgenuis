export interface NavItem {
    title: string
    href?: string
    disabled?: boolean
    external?: boolean
    icon?: any
    label?: string
 }
 
 interface DocsConfig {
    mainNav: NavItem[]
    sidebarNav: NavItem[]
 }
 
 export const docsConfig: DocsConfig = {
    mainNav: [
       {
          title: 'Documentation',
          href: '/docs',
       },
 
       {
          title: 'GitHub',
          href: 'https://github.com/Krishanx2003',
          external: true,
       },
    ],
    sidebarNav: [
       {
          title: 'Models',
          href: '/projects',
       },
       {
          title: 'Blog',
          href: '/blog',
       },
       {
          title: 'Resource',
          href: '/resource',
       },
       {
          title: 'Community',
          href: '/community',
       },
       {
          title: 'About',
          href: '/about',
       },
      
    ],
 }
 
 
 
 