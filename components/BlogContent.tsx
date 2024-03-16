import Link from "next/link";
import { Post } from '../types'
import Image from "next/image";
import { urlFor } from "@/lib/createClient";
import { Card } from "./ui/card";


interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post?._id} className="w-full">
              <Link href={`/post/${post?.slug?.current}`}>
            
                  {post?.mainImage && (
                    <Image
                      alt="Cover image"
                      className="w-full h-48 object-cover"
                      src={urlFor(post?.mainImage).url()}
                      height={200}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  )}
              
              </Link>
              <div className="p-4">
                <div className="flex space-x-2 text-sm text-gray-500">
                  {/* <div className="flex items-center space-x-2">
                    {post?.author?.image && (
                      <Image
                        alt="Author"
                        className="rounded-full"
                        src={urlFor(post?.author?.image).url()}
                        width={24}
                        height={24}
                      />
                    )}
                  <div className="ml-2">
                    <div className="text-white leading-none">{post?.author?.name}</div>
                    <div className="text-gray-600">{post?.datetime}</div>
                    </div>
                  </div> */}
                </div>
                <div className="mt-4">
                  {post?.categories.map((item) => (
                    <span key={item?._id} className="inline-block bg-gray-800 text-gray-100 px-2 py-1 rounded-full text-xs uppercase mr-2">{item?.title}</span>
                  ))}
                </div>
                <h3 className="mt-2 text-xl font-bold text-gray-100">{post?.title}</h3>
                <p className="mt-2 text-gray-300">{post?.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
  
  );
}

export default BlogContent;
