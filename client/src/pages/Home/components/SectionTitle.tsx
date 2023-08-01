interface Props {
  h2Text: string
  h3Text: string
}

const SectionTitle: React.FC<Props> = ({ h2Text, h3Text }) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 max-w-lg mx-auto mb-20'>
      <h3 className='text-center text-blue-600 font-bold text-xs leading-snug uppercase'>
        {h3Text}
      </h3>
      <h2 className='text-center text-gray-800 font-bold text-4xl leading-relaxed'>
        {h2Text}
      </h2>
    </div>
  )
}

export default SectionTitle
