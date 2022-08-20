import React from 'react'
import SubTitle from 'components/organisms/SubTitle'
import PersonalizedDataItems from 'components/organisms/PersonalizedDataItems'
import useRecommendation from 'fetchHooks/useRecommendation'

export const PersonalizedPublishers: React.FC<{}> = () => {
  const { data } = useRecommendation()

  let jData = data && data['publishersFull']

  if (!jData) return <></>

  return (
    <section>
      <SubTitle
        title={'Publishers You might like'}
        linkText={'See all'}
        linkHref="/publishers"
      />
      <PersonalizedDataItems data={jData} />
    </section>
  )
}

export default PersonalizedPublishers
