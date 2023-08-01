import React from 'react'
import Card from './Card'
import SectionTitle from './SectionTitle'
export default function Feature() {
  return (
    <section className='py-32'>
      <SectionTitle
        h3Text='Our Features'
        h2Text='Features That Makes Learning Fun'
      />
      <Card />
    </section>
  )
}
