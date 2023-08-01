import React from 'react'
import Profile from './Profile'
import SectionTitle from './SectionTitle'
export default function Testimonial() {
  return (
    <div>
      <section className='py-16'>
      <SectionTitle
        h3Text='Testimonials'
        h2Text='Trusted by Thousands of Happy Students'
      />
        <Profile />
      </section>
    </div>
  )
}
