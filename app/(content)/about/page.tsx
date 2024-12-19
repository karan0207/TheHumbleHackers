import React from 'react'
import Wrapper from '@/components/global/wrapper'


const Page = () => {
  return (
    <Wrapper className="mt-10 md:mt-8 gap-8 md:gap-4">
      <div className='mb-10 '>
        <h1 className='text-xl mb-4'> Meet the Founder</h1>
        <h3 className='text-lg'> <span className='text-yellow-600'>Dainis Graveris</span>, founder of The Humble Hackers, is a tech wizard with a passion for future-ready solutions. He’s the driving force behind our quirky, clever, and forward-thinking approach.</h3>
      </div>
      <div className='mb-10'>
        <h2 className='text-xl mb-4'> Who Are We?</h2>
        <h3 className='text-lg'>
          We’re not your average tech team. Here’s what makes us tick:
        </h3>
        <h3 className='text-lg'>•	Dynamic & Passionate: We live and breathe tech. From brainstorming bold ideas to turning them into reality, we love what we do.
        </h3>
        <h3 className='text-lg'>•	Curious Explorers: The future isn’t going to explore itself. We dive into the latest trends and figure out how to make them work for everyone.</h3>
        <h3 className='text-lg'>•	Zero Ego, Maximum Hustle: No drama, no fluff. Just smart people creating smarter solutions.</h3>
      </div>
      <div>
        <h3 className='text-xl mb-4'>🛠️ What We Do</h3>
        <p className='text-lg mb-2'>We’re your go-to hub for futuristic tech insights and innovations. Here’s what we bring to the table:</p>
        <p className='text-lg mb-4'>Personal guide to the world of:</p>
        <p className='text-lg mb-2'>• AI Girlfriends: Exploring how AI is reshaping relationships and companionship.</p>
        <p className='text-lg mb-2'>• Deepfake Tools & FaceSwap Apps: Unlocking creativity with jaw-dropping possibilities.</p>
        <p className='text-lg mb-2'>• AI Video Generators: Automating the future of content creation.</p>
        <p className='text-lg mb-2'>• VR Experiences: Bringing immersive, jaw-dropping entertainment to your headset.</p>
      </div>
    </Wrapper>
  )
}

export default Page
