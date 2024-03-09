import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

export default function Footer() {
  return (
    <div className="bg-black text-white">
    <header className="py-10 px-8 md:px-20">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Lab Genius</h1>
        <Button className="bg-white text-black">View careers</Button>
      </div>
    </header>
    <main className="py-20 px-8 md:px-20">
      <h2 className="text-6xl font-bold leading-tight mb-12">Connect with fellow enthusiasts, share ideas, and collaborate on groundbreaking projects.</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-xl mb-4">Research</h3>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Overview
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Index
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                GPT-4
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                DALL·E 3
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Sora
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">API</h3>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Overview
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Pricing
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Docs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">ChatGPT</h3>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Overview
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Team
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Enterprise
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Pricing
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Try ChatGPT
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-xl mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Blog
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Careers
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Charter
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Security
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Customer stories
              </Link>
            </li>
            <li className="mb-2">
              <Link className="hover:underline" href="#">
                Safety
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
)
}


