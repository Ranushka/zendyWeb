import classnames from 'classnames'
import { ActionItem, Space } from 'components/atoms'

type Props = {}

const GetStartedWithUs: React.FC<Props> = ({}) => {
  return (
    <section className={'mw__6 px__3 py__5'}>
      <Space />
      <div
        style={{
          backgroundImage: `url(/img/lastCallBackground.png)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className={classnames(
          'stage__4 rounded__2 text__center bg__white px__3 py__5'
        )}
      >
        <h2>Get Started with a Free Trial</h2>
        <p>
          No credit card required, you can cancel at any time. Sign in/Sign now
          for free.
        </p>
        <Space />
        <ActionItem
          text={'Start your Free Trial'}
          href={'#'}
          type="btn__primary"
        />
      </div>
    </section>
  )
}

export default GetStartedWithUs
