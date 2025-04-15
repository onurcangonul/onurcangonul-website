import React from 'react'
import Image from 'next/image'
import ProfileImage from '../../app/assent/images/onurcan-gonul.png'
import { Button } from '@/components/ui/button'
import { ArrowDownToLine } from 'lucide-react'
import About from '@/components/About'
import MyProject from '@/components/MyProjects'
import MyExperience from '@/components/MyExperience'
import PersonalAppProject from '@/components/MyProjects/PersonalAppProject'
import { informationText } from '@/data/information/informationData' 

const Home = () => {
  return (
    <>
    <section className="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center gap-8">
      {/* Smaller Profile Image */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-3 border-primary">
        <Image
          src={ProfileImage}
          alt="profile-photo"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 30vw"
          priority
        />
      </div>

      {/* Centered Text Content */}
      <div className="max-w-md space-y-4 text-center">
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Hi! I&apos;m <span>{informationText.fullName}</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-border" />
            <p className="text-base md:text-lg text-primary font-medium">{informationText.jobTitle ?? ""}</p>
            <div className="h-px w-12 bg-border" />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-base text-primary/90 leading-relaxed">
          {informationText.description ?? ""}
          </p>
        </div>
        <div>
        <div>
          <Button asChild>
            <a 
              href="/docs/resume.pdf" 
              download="Onurcan-Gonul-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-300 hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.35)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]"
            >
              <ArrowDownToLine className="mr-2 h-4 w-4" />
              Download My Resume
            </a>
          </Button>
        </div>

        </div>
      </div>
    </section>
    <About/>
    <MyProject/>
    <PersonalAppProject/>
    <MyExperience/>
    </>
    
  )
}

export default Home