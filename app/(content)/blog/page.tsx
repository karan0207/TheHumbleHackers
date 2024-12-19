import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  title: string;
  heading: string;
  imageUrl: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Understanding Next.js",
    heading: "A comprehensive guide to Next.js",
    imageUrl: "/bgimage/bghub.webp",
  },
  {
    id: 2,
    title: "Getting Started with React",
    heading: "Learn the basics of React",
    imageUrl: "/bgimage/services.webp",
  },
  {
    id: 3,
    title: "Introduction to TypeScript",
    heading: "Why TypeScript is a game-changer",
    imageUrl: "/bgimage/services.webp",
  },
];

export default function BlogListPage() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={600}
              height={600}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600 mb-4">{blog.heading}</p>
              <Link
                href={`/blog/${blog.id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
