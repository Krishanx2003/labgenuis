import React from 'react';
import Layout from './layout';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AvatarImage, Avatar } from '@/components/ui/avatar';
import { CardContent, Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Project = () => {
  return (
    <Layout>
     <div className="flex h-screen bg-[#dccccc] text-white">
        <nav className="bg-[#937474] shadow flex flex-col w-[250px] space-y-6 py-4 px-3">
          <Button className="text-left">Create new Studio</Button>
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-semibold uppercase text-[#9CA3AF]">Explore</span>
            <Link className="block hover:text-[#6B7280]" href="#">
          Featured
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Trending
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Recent
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          All studios
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Educational
        </Link>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <span className="text-xs font-semibold uppercase text-[#9CA3AF]">Blogs</span>
        <Link className="block  hover:text-[#6B7280]" href="/blog">
          Papers
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Tutorials
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Workflows
        </Link>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <span className="text-xs font-semibold uppercase text-[#9CA3AF]">Data processing</span>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Endpoints
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Training
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Serving
        </Link>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <span className="text-xs font-semibold uppercase text-[#9CA3AF]">Other</span>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Model types
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Audio
        </Link>
        <Link className="block  hover:text-[#6B7280]" href="#">
          Image
        </Link>
      </div>
    </nav>
          <main className="flex-2 overflow-y-auto">
            <h1 className="text-3xl font-bold mb-4">Studio templates</h1>
            <p className="mb-6">Hackable, open source templates to jumpstart AI projects - Lightning fast.</p>
            <p className="mb-6">Customize from the browser or local IDE with zero setup.</p>
            <p className="mb-6">New users get 22 free GPU hours monthly.</p>
            {/* Assuming Input is the correct component */}
            <Input className="mb-6 bg-[#333333] text-white" placeholder="Search Studio templates" />
            <div className="grid grid-cols-3 gap-6">
              
              <Card className="bg-[#333333]">
              <img
                alt="Studio template"
                className="w-full h-auto mb-4"
                height="200"
                src="/post2.png"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h5 className="text-lg font-bold mb-2">Talk with Claude 3</h5>
              <Badge className="mb-4" variant="secondary">
                Featured
              </Badge>
              <div className="flex items-center justify-between ">
                <EyeIcon className="text-gray-400 " />
                <span className="mr-4">92</span>
                <StarIcon className="text-gray-400" />
                <span className="mr-4">2.36K</span>
                <GitBranchIcon className="text-gray-400 " />
                <span>94</span>
              </div>
            </Card>
            <Card className="bg-[#333333]">
              <img
                alt="Studio template"
                className="w-full h-auto mb-4"
                height="200"
                src="/post2.png"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h5 className="text-lg font-bold mb-2">Talk with Claude 3</h5>
              <Badge className="mb-4" variant="secondary">
                Featured
              </Badge>
              <div className="flex items-center justify-between ">
                <EyeIcon className="text-gray-400 " />
                <span className="mr-4">92</span>
                <StarIcon className="text-gray-400" />
                <span className="mr-4">2.36K</span>
                <GitBranchIcon className="text-gray-400 " />
                <span>94</span>
              </div>
            </Card>
            <Card className="bg-[#333333]">
              <img
                alt="Studio template"
                className="w-full h-auto mb-4"
                height="200"
                src="/post2.png"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <h5 className="text-lg font-bold mb-2">Talk with Claude 3</h5>
              <Badge className="mb-4" variant="secondary">
                Featured
              </Badge>
              <div className="flex items-center justify-between ">
                <EyeIcon className="text-gray-400 " />
                <span className="mr-4">92</span>
                <StarIcon className="text-gray-400" />
                <span className="mr-4">2.36K</span>
                <GitBranchIcon className="text-gray-400 " />
                <span>94</span>
              </div>
            </Card>
            </div>
          </main>
        </div>
      
    </Layout>
  );
}

export default Project;


function GitBranchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="6" y1="3" y2="15" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M18 9a9 9 0 0 1-9 9" />
    </svg>
  )
}
function CloudLightningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function EyeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function GitForkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
      <path d="M12 12v3" />
    </svg>
  )
}
