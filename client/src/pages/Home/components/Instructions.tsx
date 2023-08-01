import signupBtn from '/singupBtn.png'
import instructionBtn from '/instruction-btn.png'
import choseLang from '/choseLang.png'
import arrow from '/arrow.png'
import SectionTitle from './SectionTitle'
export default function instruction() {
  return (
    <section className='pb-20'>

      <SectionTitle
        h3Text='How it works'
        h2Text='We make learning simple and straightforward!'
      />
      <div className="flex flex-col lg:flex-row items-center  font-['Open_Sans' text-center md:container mx-auto">
        <div className='flex flex-col items-center py-5 lg:px-0'>
          <img src={signupBtn} alt='singup icon' />
          <h6 className="font-semibold	text-2xl  text-gray-1 ">Sign Up</h6>
          <p className='font-normal	text-base	leading-7 text-gray-3'>
            Start by creating your account. It's quick, easy, and free! All you
            need is an email address,
          </p>
        </div>
        <img className='hidden lg:flex' src={arrow} alt='arrow image' />
        <div className='flex flex-col items-center py-5 lg:px-0'>
          <img src={choseLang} alt='Chose Language icon' />
          <h6 className="font-semibold	text-2xl text-gray-1 " >Choose Your Language</h6>
          <p className='font-normal	text-base	leading-7 text-gray-3'>
            Decide what to learn. You can always change your selection in your
            account settings.
          </p>
        </div >
        <img className='hidden lg:flex' src={arrow} alt='arrow image' />
        <div className='flex flex-col items-center py-5 lg:px-0'>
          <img src={instructionBtn} alt='instruction icon' />
          <h6 className="font-semibold	text-2xl  text-gray-1">Start Learning</h6>
          <p className='font-normal	text-base	leading-7 text-gray-3'>
            Now the real fun begins! You'll start with a series of interactive
            lessons designed for your skill level.
          </p>
        </div>
      </div>
    </section>
  )
}
