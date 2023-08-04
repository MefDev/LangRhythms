import { ReactComponent as Paper } from '@/assets/paper.svg'
import { ReactComponent as Arrow } from '@/assets/Arrow-dotted.svg'
import { ReactComponent as Pattern } from '@/assets/patterns/stars-pattern.svg'
import SectionTitle from './SectionTitle'
import { LuLogIn, LuLanguages } from 'react-icons/lu'
import { motion } from 'framer-motion'
import {
  itemSlideLeft,
  itemSlideRight,
  itemSlideUp,
  listAnimation,
} from '@/utils/Animation'
import React from 'react'

const steps = [
  {
    icon: <LuLogIn />,
    title: 'Sign Up',
    description:
      "Start by creating your account. It's quick, easy, and free! All you need is an email address,",
    variant: itemSlideRight,
    bg: 'bg-primary-100',
    shadow: 'shadow-primary-100/70',
  },
  {
    icon: <LuLanguages />,
    title: 'Choose Your Language',
    description:
      'Decide what to learn. You can always change your selection in your account settings.',
    variant: itemSlideUp,
    bg: 'bg-secondary-100',
    shadow: 'shadow-secondary-100/70',
  },
  {
    icon: <Paper />,
    title: 'Start Learning',
    description:
      "Now the real fun begins! You'll start with a series of interactive lessons designed for your skill level.",
    variant: itemSlideLeft,
    bg: 'bg-secondary-400',
    shadow: 'shadow-secondary-400/70',
  },
]

export default function HowItWorks() {
  return (
    <section className='bg-secondary-500/[3%] relative py-24 lg:px-0 px-2'>
      <Pattern className='absolute left-0 top-0 -translate-y-1/2 lg:w-auto w-40 lg:opacity-100 opacity-50' />
      <div className='max-w-screen-xl mx-auto'>
        <SectionTitle
          h3Text='How it works'
          h2Text='We make learning simple and straightforward!'
        />
        <motion.div
          initial='hidden'
          whileInView='visible'
          custom={0.2}
          variants={listAnimation}
          viewport={{ once: true }}
          className='grid lg:grid-cols-5 md:grid-cols-2 gird-cols-1 justify-center  items-center text-center'
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={step.variant}
                className={`flex flex-col items-center py-5 lg:px-0 lg:max-w-auto mx-auto max-w-[300px] ${
                  index === steps.length - 1
                    ? 'lg:col-span-1 md:col-span-2'
                    : ''
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-2xl mb-6 shadow-md ${step.shadow} flex items-center justify-center text-5xl ${step.bg} text-white`}
                >
                  {step.icon}
                </div>
                <h6 className='font-semibold	text-2xl  text-gray-1 mb-4'>
                  {step.title}
                </h6>
                <p className='text-base	leading-7 text-gray-3'>
                  {step.description}
                </p>
              </motion.div>
              {index !== steps.length - 1 && (
                <motion.div
                  className='w-[400px] lg:flex hidden'
                  variants={itemSlideUp}
                >
                  <Arrow />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
