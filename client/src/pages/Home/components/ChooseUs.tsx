import { AiOutlineStar } from 'react-icons/ai'
import SectionTitle from './SectionTitle'
import { LuUsers } from 'react-icons/lu'
import { LuMousePointerClick } from 'react-icons/lu'

export default function ChooseUs() {
  return (
    <section className='py-20 max-w-screen-xl mx-auto'>
      <SectionTitle
        h3Text='Why choose us'
        h2Text='Enjoyable & Rewarding Experience!'
      />
      <div className='flex flex-col gap-10'>
        <article>
          <div className='flex flex-col sm:flex-row sm:items-start sm:space-y-0 sm:justify-normal items-center justify-center space-y-6 sm:space-x-6'>
            <div className='bg-secondary-200 w-20 h-20 rounded shadow-lg shadow-secondary-200 flex items-center justify-center'>
              <AiOutlineStar className='text-4xl text-white' />
            </div>
            <div className='max-w-md sm:text-left text-center'>
              <h6 className='text-2xl mb-2 font-bold text-gray-800'>
                Comprehensive & Customizable Learning
              </h6>
              <p className='text-gray-500 leading-[1.6] text-sm'>
                Our platform accommodates learners of all proficiency levels.
                Choose your preferred dialect, set your pace, and personalize
                your learning path.
              </p>
            </div>
          </div>
        </article>
        <article className='sm:self-end'>
          <div className='flex flex-col sm:flex-row sm:items-start sm:space-y-0 sm:justify-normal items-center justify-center space-y-6 sm:space-x-6'>
            <div className='bg-primary-200 w-20 h-20 rounded shadow-lg shadow-primary-200 flex items-center justify-center'>
              <LuUsers className='text-4xl text-white' />
            </div>
            <div className='max-w-md sm:text-left text-center'>
              <h6 className='text-2xl mb-2 font-bold text-gray-800'>
                Supportive Learning Community
              </h6>
              <p className='text-gray-500 leading-[1.6] text-sm'>
                Connect with fellow learners, share your experiences, ask
                questions, and practice with native speakers.
              </p>
            </div>
          </div>
        </article>
        <article>
          <div className='flex flex-col sm:flex-row sm:items-start sm:space-y-0 sm:justify-normal items-center justify-center space-y-6 sm:space-x-6'>
            <div className='bg-secondary-300 w-20 h-20 rounded shadow-lg shadow-secondary-300 flex items-center justify-center'>
              <LuMousePointerClick className='text-4xl text-white' />
            </div>
            <div className='max-w-md sm:text-left text-center'>
              <h6 className='text-2xl mb-2 font-bold text-gray-800'>
                Engaging & Interactive Content
              </h6>
              <p className='text-gray-500 leading-[1.6] text-sm'>
                With LangRhythms, you don't just learn – you interact, engage,
                and immerse yourself in a rich linguistic and cultural
                experience.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
