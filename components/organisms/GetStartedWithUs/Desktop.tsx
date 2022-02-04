import Image from 'next/image'
import { ActionItem, Space } from 'components/atoms'

type Props = {}

const GetStartedWithUs: React.FC<Props> = ({}) => {
  return (
    <section className={'mw__6 px__3 py__5'}>
      <Space />
      <div
        // style={{
        //   backgroundImage: `url(/img/lastCallBackground.png)`,
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        //   backgroundSize: 'cover',
        // }}
        className={
          'relative stage__4 rounded__2 text__center bg__white px__3 py__5'
          // 'relative stage__4 rounded__2 text__center bg__white px__3 py__5'
        }
      >
        <Image
          placeholder="empty"
          // blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIyIiB5PSIyIiB3aWR0aD0iMjk2IiBoZWlnaHQ9IjI5NiIgc3R5bGU9ImZpbGw6I2RlZGVkZTtzdHJva2U6IzU1NTU1NTtzdHJva2Utd2lkdGg6MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSwgc2Fucy1zZXJpZiIgZmlsbD0iIzU1NTU1NSI+Y2FyPC90ZXh0Pjwvc3ZnPg=="
          objectFit="cover"
          className="rounded__2"
          layout="fill"
          alt="water_portrait"
          src="/img/lastCallBackground.png" //image saved in public/home
        />
        <div className="relative z__1">
          <h2>Get Started with a Free Trial</h2>
          <p>
            No credit card required, you can cancel at any time. Sign in/Sign
            now for free.
          </p>
          <Space />
          <ActionItem
            text={'Start your Free Trial'}
            href={'#'}
            type="btn__primary"
          />
        </div>
      </div>
    </section>
  )
}

export default GetStartedWithUs
