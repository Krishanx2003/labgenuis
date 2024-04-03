'use client'

import { CommandMenu } from '@/components/composites/command'
import { MobileNav } from '@/components/nav/mobile'
import { MainNav } from '@/components/nav/desktop'
import { Button } from '@/components/ui/button'


import { useTheme } from 'next-themes'
import Link from 'next/link'
import { LogInIcon } from 'lucide-react'
import { ModeToggle } from './toggle'

export default function Header() {
  

   return (
      <header className="supports-backdrop-blur:bg-background/90 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur mb-4 px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
         <div className="flex h-14 items-center">
            <MainNav />
            <MobileNav />
            <div className="flex flex-1 items-center space-x-2 justify-end">
               <div className="flex-none">
                  <CommandMenu />
               </div>
               
              <ModeToggle/>
               
            </div>
         </div>
      </header>
   )
}



function LoginDialog() {
   return (
      <Link href="/login">
         <Button className="font-medium flex gap-2">
            <LogInIcon className="h-4" />
            <p>Login</p>
         </Button>
      </Link>
   )
}

