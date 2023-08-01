import signupBtn from '/singupBtn.png'
import instructionBtn from '/instruction-btn.png'
import choseLang from '/choseLang.png'
import arrow from '/arrow.png'
import SectionTitle from './SectionTitle'

export default function HowItWorks() {
  return (
    <section className='relative py-24 max-w-screen-xl mx-auto'>
      <div className='absolute top-0 left-0 right-0 bottom-0 hero z-0' />
      <div className='relative z-10'>
        <SectionTitle
          h3Text='How it works'
          h2Text='We make learning simple and straightforward!'
        />
        <div className='flex flex-col lg:flex-row items-center text-center'>
          <div className='flex flex-col items-center py-5 lg:px-0'>
            <img src={signupBtn} alt='singup icon' />
            <h6 className='font-semibold	text-2xl  text-gray-1 mb-4'>Sign Up</h6>
            <p className='text-base	leading-7 text-gray-3'>
              Start by creating your account. It's quick, easy, and free! All
              you need is an email address,
            </p>
          </div>
          <img className='hidden lg:flex' src={arrow} alt='arrow image' />
          <div className='flex flex-col items-center py-5 lg:px-0'>
            <img src={choseLang} alt='Chose Language icon' />
            <h6 className='font-semibold	text-2xl text-gray-1 '>
              Choose Your Language
            </h6>
            <p className='font-normal	text-base	leading-7 text-gray-3'>
              Decide what to learn. You can always change your selection in your
              account settings.
            </p>
          </div>
          <img className='hidden lg:flex' src={arrow} alt='arrow image' />
          <div className='flex flex-col items-center py-5 lg:px-0'>
            <img src={instructionBtn} alt='instruction icon' />
            <h6 className='font-semibold	text-2xl  text-gray-1'>
              Start Learning
            </h6>
            <p className='font-normal	text-base	leading-7 text-gray-3'>
              Now the real fun begins! You'll start with a series of interactive
              lessons designed for your skill level.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
