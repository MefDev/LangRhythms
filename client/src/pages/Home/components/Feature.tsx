import stars from '/stars.png'
import light from '/light.png'
import roule from '/roule.png'
import SectionTitle from './SectionTitle'

export default function Feature() {
  return (
    <section className='py-32'>
      <SectionTitle
        h3Text='Our Features'
        h2Text='Features That Makes Learning Fun'
      />

      <div className='grid md:grid-cols-3 md:w-auto w-96 gap-10 max-w-screen-xl mx-auto'>
        <div className=' p-10 bg-primary-100/20  shadow-lg shadow-primary-100/30 rounded-lg'>
          <img className='mb-6' src={stars} alt='stars icon' />
          <h4 className='mb-2 font-bold text-black-3 text-xl'>
            Interactive Lessons
          </h4>
          <p className='text-base	text-gray-2'>
            Our lessons are designed to make learning an engaging experience.
          </p>
        </div>
        <div className='p-10 bg-secondary-400/20  shadow-lg shadow-secondary-400/30 rounded-lg'>
          <img className='mb-6' src={light} alt='light icon' />
          <h4 className='mb-2 font-bold text-black-3 text-lg'>
            Personalized Learning{' '}
          </h4>
          <p className='text-base	text-gray-2'>
            Tailor your learning path to your needs and pace
          </p>
        </div>
        <div className='p-10 bg-secondary-100/20  shadow-lg shadow-secondary-100/30 rounded-lg'>
          <img className='mb-6' src={roule} alt='roule' />
          <h4 className='mb-2 font-bold text-black-3'>Community Support</h4>
          <p className='text-base	text-gray-2'>
            Connect with fellow learners and native speakers for real-time
            practice.
          </p>
        </div>
      </div>
    </section>
  )
}
