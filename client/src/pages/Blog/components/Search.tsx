import { itemSlideUp } from '@/utils/Animation'
import { motion } from 'framer-motion'
import { ChangeEvent } from 'react'
import { LuSearch } from 'react-icons/lu'

type Props = {
  setSearchTerm: (searchTerm: string) => void
  searchTerm: string
}

const Search = ({ setSearchTerm, searchTerm }: Props) => {
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <motion.form
      variants={itemSlideUp}
      onSubmit={handleFormSubmit}
      className='mx-auto w-80'
    >
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative'>
        <input
          type='text'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full focus:outline-none outline-none p-2.5'
          placeholder='Search posts...'
          value={searchTerm}
          onChange={handleSearchChange}
          required
        />
        <button
          type='submit'
          className='absolute top-0 right-0 bottom-0 p-3 text-white bg-primary-100 rounded-r-lg border border-primary-100 hover:bg-primary-100/80 h-auto'
        >
          <LuSearch />
          <span className='sr-only'>Search</span>
        </button>
      </div>
    </motion.form>
  )
}

export default Search
