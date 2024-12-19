// import Wrapper from "@/components/global/wrapper";
// import Image from "next/image";

// interface Blog {
//   id: number;
//   title: string;
//   content: string;
//   imageUrl: string;
// }

// const blogs: Blog[] = [
//   {
//     id: 1,
//     title: "AI in Software Automation and Development",
//     content: `
//       Artificial Intelligence (AI) is revolutionizing the field of software development and automation. 
//       By leveraging AI-powered tools, developers can now automate repetitive tasks, enhance code quality, 
//       and reduce development time. Tools like GitHub Copilot and Tabnine act as intelligent coding assistants, 
//       offering real-time suggestions and auto-completing complex code snippets. 

//       In software testing, AI-driven platforms like Testim and Mabl enable automated testing, identifying 
//       bugs and performance bottlenecks with minimal human intervention. These tools use machine learning 
//       algorithms to adapt to application changes, ensuring that tests remain effective even as the software 
//       evolves.

//       Beyond automation, AI is empowering developers with predictive analytics, helping teams identify 
//       potential risks and optimize resource allocation. As AI continues to evolve, the integration of 
//       natural language processing (NLP) into coding environments will further streamline communication 
//       between humans and machines, opening new doors for innovation in software engineering.
//     `,
//     imageUrl: "/bgimage/bghub.webp",
//   },
//   {
//     id: 2,
//     title: "The Evolution of Virtual Reality Technology",
//     content: `
//       Virtual Reality (VR) technology has come a long way since its inception, transforming how we interact 
//       with digital environments. Initially popularized through gaming, VR has expanded its applications into 
//       fields like healthcare, education, and real estate. Modern VR systems like the Meta Quest 3 and HTC Vive 
//       Pro offer unparalleled immersion, with lifelike graphics and intuitive controls.

//       In healthcare, VR is being used for pain management, physical therapy, and surgical training, enabling 
//       doctors to practice complex procedures in a risk-free environment. In education, VR platforms like 
//       Engage and VRChat allow students to explore historical sites, conduct virtual experiments, and engage 
//       in interactive learning experiences from anywhere in the world.

//       As hardware becomes more accessible and powerful, the line between physical and virtual worlds continues 
//       to blur. The future of VR lies in creating hyper-realistic experiences through advanced haptic feedback 
//       and AI-powered adaptive environments, promising to reshape the way we live, work, and play.
//     `,
//     imageUrl: "/bgimage/services.webp",
//   },
//   {
//     id: 3,
//     title: "Content Marketing with AI: Revolutionizing Strategies",
//     content: `
//       The integration of Artificial Intelligence (AI) into content marketing has unlocked new levels of 
//       creativity and efficiency. AI-powered tools like Jasper, Copy.ai, and Writesonic are enabling marketers 
//       to generate high-quality content in a fraction of the time it would take manually. These platforms 
//       analyze target audiences, suggest relevant topics, and even optimize content for search engines.

//       Beyond content creation, AI plays a critical role in content personalization. Machine learning algorithms 
//       analyze user behavior and preferences, delivering tailored recommendations that resonate with individual 
//       consumers. Platforms like HubSpot and Marketo use AI to optimize email campaigns, social media posts, 
//       and ad placements, ensuring maximum engagement and ROI.

//       Moreover, AI-powered analytics tools provide deep insights into campaign performance, enabling marketers 
//       to fine-tune their strategies in real time. By automating repetitive tasks like scheduling and reporting, 
//       AI allows marketers to focus on what truly matters: crafting compelling stories that connect with their 
//       audience. As AI continues to evolve, it will redefine content marketing, making it smarter, faster, and 
//       more impactful than ever before.
//     `,
//     imageUrl: "/bgimage/services.webp",
//   },
// ];

// export default function BlogPage({ params }: { params: { id: string } }) {
//   const blog = blogs.find((b) => b.id === parseInt(params.id));

//   if (!blog) {
//     return (
//       <div className="container mx-auto p-6">
//         <h1 className="text-3xl font-bold">Blog not found</h1>
//       </div>
//     );
//   }

//   return (
//     <Wrapper>
//     <main className="container mx-auto px-4 py-8">
//       <Image
//         src={blog.imageUrl}
//         alt={blog.title}
//         width={1200}
//         height={800}
//         className="w-full h-auto object-cover rounded-lg mb-8"
//         priority
//       />
//       <h1 className="text-4xl font-bold mb-6 text-center">{blog.title}</h1>
//       <article className="prose lg:prose-xl mx-auto">
//         <p>{blog.content}</p>
//       </article>
//     </main>
//     </Wrapper>
//   );
// }



import Wrapper from "@/components/global/wrapper";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "AI in Software Automation and Development",
    content: `
      Artificial Intelligence (AI) is revolutionizing the field of software development and automation. 
      By leveraging AI-powered tools, developers can now automate repetitive tasks, enhance code quality, 
      and reduce development time. Tools like GitHub Copilot and Tabnine act as intelligent coding assistants, 
      offering real-time suggestions and auto-completing complex code snippets. 

      In software testing, AI-driven platforms like Testim and Mabl enable automated testing, identifying 
      bugs and performance bottlenecks with minimal human intervention. These tools use machine learning 
      algorithms to adapt to application changes, ensuring that tests remain effective even as the software 
      evolves.

      Beyond automation, AI is empowering developers with predictive analytics, helping teams identify 
      potential risks and optimize resource allocation. As AI continues to evolve, the integration of 
      natural language processing (NLP) into coding environments will further streamline communication 
      between humans and machines, opening new doors for innovation in software engineering.
    `,
    imageUrl: "/bgimage/bghub.webp",
  },
  {
    id: 2,
    title: "The Evolution of Virtual Reality Technology",
    content: `
      Virtual Reality (VR) technology has come a long way since its inception, transforming how we interact 
      with digital environments. Initially popularized through gaming, VR has expanded its applications into 
      fields like healthcare, education, and real estate. Modern VR systems like the Meta Quest 3 and HTC Vive 
      Pro offer unparalleled immersion, with lifelike graphics and intuitive controls.

      In healthcare, VR is being used for pain management, physical therapy, and surgical training, enabling 
      doctors to practice complex procedures in a risk-free environment. In education, VR platforms like 
      Engage and VRChat allow students to explore historical sites, conduct virtual experiments, and engage 
      in interactive learning experiences from anywhere in the world.

      As hardware becomes more accessible and powerful, the line between physical and virtual worlds continues 
      to blur. The future of VR lies in creating hyper-realistic experiences through advanced haptic feedback 
      and AI-powered adaptive environments, promising to reshape the way we live, work, and play.
    `,
    imageUrl: "/bgimage/services.webp",
  },
  {
    id: 3,
    title: "Content Marketing with AI: Revolutionizing Strategies",
    content: `
      The integration of Artificial Intelligence (AI) into content marketing has unlocked new levels of 
      creativity and efficiency. AI-powered tools like Jasper, Copy.ai, and Writesonic are enabling marketers 
      to generate high-quality content in a fraction of the time it would take manually. These platforms 
      analyze target audiences, suggest relevant topics, and even optimize content for search engines.

      Beyond content creation, AI plays a critical role in content personalization. Machine learning algorithms 
      analyze user behavior and preferences, delivering tailored recommendations that resonate with individual 
      consumers. Platforms like HubSpot and Marketo use AI to optimize email campaigns, social media posts, 
      and ad placements, ensuring maximum engagement and ROI.

      Moreover, AI-powered analytics tools provide deep insights into campaign performance, enabling marketers 
      to fine-tune their strategies in real time. By automating repetitive tasks like scheduling and reporting, 
      AI allows marketers to focus on what truly matters: crafting compelling stories that connect with their 
      audience. As AI continues to evolve, it will redefine content marketing, making it smarter, faster, and 
      more impactful than ever before.
    `,
    imageUrl: "/bgimage/services.webp",
  },
];

export default function BlogPage({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold">Blog not found</h1>
      </div>
    );
  }

  return (
    <Wrapper>
      <main className="container mx-auto px-4 py-12">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          width={1200}
          height={800}
          className="w-full h-auto object-cover rounded-lg mb-10"
          priority
        />
        <h1 className="text-5xl font-extrabold text-center mb-8">{blog.title}</h1>
        <article className="prose prose-lg lg:prose-xl mx-auto leading-relaxed">
          {blog.content
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
        </article>
      </main>
    </Wrapper>
  );
}
