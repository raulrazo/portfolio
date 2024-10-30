import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Want to <span className="text-blue-300">contact</span> me?
            </h1>
            <p className="text-white-200 md:mt-10 my-5 text-center">
                Reach out to me today!
            </p>
            <a href="mailto:raulrazopro@gmail.com">
                <MagicButton 
                    title="Email Me"
                    icon={<FaLocationArrow />}
                    position="right"
                />
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-small md:font-normal font-light lg:pb-0 pb-10">
                Copyright © 2024 Raul
            </p>

            <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
                <a
                key={profile.id}
                href={profile.url} // Add the link here
                target="_blank" // Opens link in new tab
                rel="noopener noreferrer" // Prevents security risks
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                <img src={profile.img} alt="icon" width={20} height={20} />
                </a>
            ))}
            </div>

        </div>
    </footer>
  )
}

export default Footer