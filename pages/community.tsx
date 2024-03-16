import React from 'react'
import Layout from './layout'
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

const community = () => {
  return (
    <Layout>
   <div className="bg-[#121212] min-h-screen text-white">
      
      <header className="text-center py-16">
        <h2 className="text-4xl font-bold mb-6">Learn, share and collaborate with the Lightning AI community</h2>
        <div className="flex justify-center space-x-4">
          <Button className="bg-[#3d405c]">Discord</Button>
          <Button className="bg-[#21252e]">Docs</Button>
          <Button className="bg-[#7289DA]">Blog</Button>
          <Button className="bg-[#4F545C]">Forums</Button>
          <Button className="bg-[#5865F2]">AI Education</Button>
        </div>
      </header>
      <main className="px-4 py-8">
        <div className="grid grid-cols-2 gap-8">
          <Card className="bg-[#232323]">
            <CardHeader>
              <CardTitle>Discord</CardTitle>
              <CardDescription>Chat with Lightning community members!</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                alt="Discord preview"
                className="rounded-md"
                height="200"
                src="/post2.png"
                style={{
                  aspectRatio: "350/200",
                  objectFit: "cover",
                }}
                width="350"
              />
            </CardContent>
          </Card>
          <Card className="bg-[#232323]">
            <CardHeader>
              <CardTitle>Forums</CardTitle>
              <CardDescription>Ask technical questions about any Lightning product</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                alt="Forums preview"
                className="rounded-md"
                height="200"
                src="/post2.png"
                style={{
                  aspectRatio: "350/200",
                  objectFit: "cover",
                }}
                width="350"
              />
            </CardContent>
          </Card>
          <Card className="bg-[#232323]">
            <CardHeader>
              <CardTitle>Docs</CardTitle>
              <CardDescription>
                Glossary, tutorials, and code samples to guide you as you build with Lightning.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                alt="Docs preview"
                className="rounded-md"
                height="200"
                src="/post2.png"
                style={{
                  aspectRatio: "350/200",
                  objectFit: "cover",
                }}
                width="350"
              />
            </CardContent>
          </Card>
          <Card className="bg-[#232323]">
            <CardHeader>
              <CardTitle>AI Education</CardTitle>
              <CardDescription>Learn deep learning with a modern open source stack.</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                alt="AI Education preview"
                className="rounded-md"
                height="200"
                src="/post2.png"
                style={{
                  aspectRatio: "350/200",
                  objectFit: "cover",
                }}
                width="350"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
    </Layout>
  )
}

export default community
