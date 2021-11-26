import { Space } from 'components/atoms'

type Props = {
  quote: string
  name: string
  title: string
}

const Testimonial: React.FC<Props> = (props) => {
  const {
    quote = '“Zendy is an excellent resource, and can be especially useful to keep up with latest devolopmets legal comunity.”',
    name = 'Bolta Zayed',
    title = 'Some legal firm',
  } = props

  return (
    <div className={'mw__2'}>
      <div className={'bg__white rounded__1 stage__1 my__2  mx__2 py__3 px__3'}>
        <h4 className="color__nut7">{quote}</h4>
        <Space size={3} />
        <p>{name}</p>
        <p className="small">{title}</p>
      </div>
    </div>
  )
}

export default Testimonial
