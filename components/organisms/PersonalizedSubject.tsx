import React from 'react'
import SubTitle from 'components/organisms/SubTitle'
import PersonalizedDataItems from 'components/organisms/PersonalizedDataItems'
import useRecommendation from 'fetchHooks/useRecommendation'

export const PersonalizedSubject: React.FC<{}> = () => {
  const { data } = useRecommendation()

  const jData = data && data['subSubjectsFull']

  if (!jData) return <></>

  return (
    <section>
      <SubTitle
        title={'Browse by subject'}
        linkText={'See all'}
        linkHref="/subjects"
      />
      <PersonalizedDataItems data={jData} />
    </section>
  )
}

export default PersonalizedSubject
