import SectionTitle from './SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules'
import { AiTwotoneStar } from 'react-icons/ai'

const testimonials = [
  {
    name: 'Amina El Houari',
    location: 'Marrakech, Morocco',
    rating: 5.0,
    image:
      'https://img.freepik.com/free-photo/woman-with-dark-hair-brown-eyes-wears-casual-outfit_273609-16884.jpg',
    review:
      "I'm so grateful for this app. It's helped me reconnect with my family's Darija roots in a way I never thought possible.",
  },
  {
    name: 'John Smith',
    location: 'London, UK',
    rating: 4.5,
    image:
      'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg',
    review:
      "I've been planning a trip to Morocco and this app has made it so much easier to pick up Darija. A must-have for travelers!",
  },
  {
    name: 'Houda Berrada',
    location: 'Rabat, Morocco',
    rating: 5.0,
    image:
      'https://img.freepik.com/free-photo/confident-young-businesswoman-looking-camera-with-smile_273609-28246.jpg',
    review:
      'This app has been a game changer for me. Learning Tamazight has never been easier!',
  },
  {
    name: 'Sara Davis',
    location: 'New York, USA',
    rating: 4.9,
    image:
      'https://img.freepik.com/free-photo/confident-young-businesswoman-looking-camera-with-smile_273609-28246.jpg',
    review:
      "The lessons on this app are very well structured. I've learned so much about Moroccan culture while learning Tamazight.",
  },
  {
    name: 'Abdellatif Zeroual',
    location: 'Fez, Morocco',
    rating: 4.8,
    image:
      'https://img.freepik.com/free-photo/smiling-confident-businessman-office_1303-22074.jpg',
    review:
      "This app has made learning Darija a breeze. It's like having a personal tutor in my pocket!",
  },
  {
    name: 'Li Wei',
    location: 'Beijing, China',
    rating: 4.8,
    image:
      'https://img.freepik.com/free-photo/asian-businessman-white-shirt_1301-206.jpg',
    review:
      "I've always been fascinated by the Moroccan culture. This app has made it possible for me to learn Tamazight and Darija, and I'm loving the journey!",
  },
]

export default function Testimonial() {
  return (
    <section className='sm:max-w-screen-xl mx-auto max-w-screen relative py-20 mb-20'>
      <SectionTitle
        h3Text='Testimonials'
        h2Text='Trusted by Thousands of Happy Students'
      />
      <div className='md:flex'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className='swiper_container'
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='review max-w-lg mx-auto bg-white rounded-lg shadow-lg sm:py-4'>
                <div className='py-10 px-5 text-center space-y-2 sm:text-left'>
                  <div className='flex justify-between gap-4 space-x-0.5'>
                    <div className='flex gap-2'>
                      <img
                        className=' block w-12 h-12 rounded-full sm:mx-0 sm:shrink-0'
                        src={testimonial.image}
                        alt="Person's Face"
                      />
                      <div>
                        <p className='text-base text-black font-semibold'>
                          {testimonial.name}
                        </p>
                        <p className='text-slate-500 font-medium'>
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center space-x-2'>
                      <span className='text-end font-bold'>
                        {testimonial.rating}
                      </span>
                      <span>
                        <AiTwotoneStar className='text-xl text-yellow-500' />
                      </span>
                    </div>
                  </div>
                  <p className='text-base text-gray-2 pt-2'>
                    {testimonial.review}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className='slider-controler -bottom-8 z-50'>
            <div className='swiper-button-prev static slider-arrow left-[42%] text-gray-800 rounded-full bg-white shadow-md h-8 w-8 text-lg flex items-center justify-center '>
              <BsArrowLeftShort />
            </div>
            <div className='swiper-button-next static slider-arrow text-gray-800 rounded-full bg-white shadow-md h-8 w-8 text-lg flex items-center justify-center '>
              <BsArrowRightShort />
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  )
}
