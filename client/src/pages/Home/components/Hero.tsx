import { ReactComponent as LettersPattern } from '@/assets/patterns/letters-pattern.svg'

export default function Hero() {
  return (
    <section className='py-20 mb-32 relative'>
      <div className='relative mx-auto max-w-2xl text-center flex flex-col items-center'>
        <div className='absolute top-0 left-0 right-0 bottom-0 hero z-0' />
        <h1 className='text-3xl md:text-header font-bold mb-4 z-10 md:mb-8 leading-normal'>
          Unlock Moroccan Culture: Learn Darija and Tamazight with
          <span
            className='
      ml-2
      relative
      z-10
      after:border-2
      after:border-primary-200
      after:rotate-2
      after:w-[130%]
      after:h-[145%]
      after:rounded-[100%]
      after:absolute
      after:top-1/2
      after:left-1/2
      after:-translate-x-1/2
      after:-translate-y-1/2
      before:border-2
      before:border-primary-200
      before:-rotate-12
      before:w-[130%]
      before:h-[145%]
      before:rounded-[100%]
      before:absolute
      before:top-1/2
      before:left-1/2
      before:-translate-x-1/2
      before:-translate-y-1/2
      '
          >
            Ease!
          </span>
        </h1>
        <p className='text-gray-500 leading-normal max-w-md mb-4 z-10 md:mb-8 text-sm'>
          Dive into the rich tapestry of Moroccan culture through its vibrant
          languages, Darija and Tamazight. Start your language journey today and
          open doors to an enchanting new world.
        </p>

        <button className='relative bg-primary-100 z-10 px-6 py-3 md:px-8 md:py-4 rounded-full text-white capitalize font-bold text-sm hover:bg-primary-100/90 shadow-lg'>
          Get Started
        </button>
        <LettersPattern className='absolute md:max-w-2xl max-w-lg md:-top-20 -top-2/3 z-[-1]' />
      </div>
    </section>
  )
}
