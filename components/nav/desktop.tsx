'use client'

import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import config from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

const components: { title: string; href: string; description: string }[] = [
   {
      title: 'About Us',
      href: '/about',
      description:
         'A modal dialog that interrupts the user with important content and expects a response.',
   },
]

export function MainNav() {
   return (
      <div className="hidden md:flex gap-4">
         <Link href="/" className="flex items-center">
            <span className="hidden font-medium sm:inline-block">
               {config.name}
            </span>
         </Link>
         <NavMenu />
      </div>
   )
}

export function NavMenu() {
   return (
      <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <Link href="/blog" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <div className="font-normal text-foreground/70">
            Blog
          </div>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/resource" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <div className="font-normal text-foreground/70">
            Resources
          </div>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/projects" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <div className="font-normal text-foreground/70">
            Projects
          </div>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/models" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <div className="font-normal text-foreground/70">
            Models
          </div>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/about" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <div className="font-normal text-foreground/70">
            About
          </div>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/community" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <div className="font-normal text-foreground/70">
            Community
          </div>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>


   )
}
