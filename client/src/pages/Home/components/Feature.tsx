import { ReactComponent as Stars } from '@/assets/hand-stars.svg'
import { ReactComponent as Target } from '@/assets/target-star.svg'
import { ReactComponent as Globe } from '@/assets/glob.svg'
import { ReactComponent as Pattern } from '@/assets/patterns/zellige-pattern.svg'
import SectionTitle from './SectionTitle'

export default function Feature() {
  return (
    <section className='py-20 mb-20 bg-secondary-500/[1%] relative'>
      <Pattern className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      <SectionTitle
        h3Text='Our Features'
        h2Text='Features That Makes Learning Fun'
      />

      <div className='grid md:grid-cols-3 max-w-[369px] gap-20 sm:max-w-screen-xl mx-auto'>
        <div className=' p-10 bg-primary-100  shadow-lg shadow-primary-100/40 rounded-lg text-white'>
          <Stars className='mb-8' />
          <h4 className='mb-4 font-bold  text-xl'>Interactive Lessons</h4>
          <p className='text-sm	'>
            Our lessons are designed to make learning an engaging experience.
          </p>
        </div>
        <div className='p-10 bg-secondary-400  shadow-lg shadow-secondary-400/40 rounded-lg text-white'>
          <Target className='mb-8' />
          <h4 className='mb-4 font-bold text-lg'>Personalized Learning</h4>
          <p className='text-sm	'>
            Tailor your learning path to your needs and pace
          </p>
        </div>
        <div className='p-10 bg-secondary-100  shadow-lg shadow-secondary-100/40 rounded-lg text-white'>
          <Globe className='mb-8' />
          <h4 className='mb-4 font-bold '>Community Support</h4>
          <p className='text-sm	'>
            Connect with fellow learners and native speakers for real-time
            practice.
          </p>
        </div>
      </div>
    </section>
  )
}
