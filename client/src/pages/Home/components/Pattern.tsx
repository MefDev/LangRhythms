import pattern1 from '/pattern1.png'
import pattern2 from '/pattern2.png'
export default function Pattern() {
  return (
    <div>
      <img className='pattern1' src={pattern1} alt='amazigh mosaic' />
      <img className='pattern2' src={pattern2} alt='amazigh mosaic' />
    </div>
  )
}
