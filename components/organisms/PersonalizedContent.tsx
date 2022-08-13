import React from 'react'
import SubTitle from 'components/organisms/SubTitle'
import PersonalizedDataItems from 'components/organisms/PersonalizedDataItems'
import useRecommendation from 'fetchHooks/useRecommendation'

export const JournalPersonalized: React.FC<{}> = () => {
  const { data } = useRecommendation()

  const jData = data && data['journalTitleFull']

  if (!jData) return <></>

  return (
    <section>
      <SubTitle
        title={'Journals You might like'}
        linkText={'See all'}
        linkHref="/journals"
      />
      <PersonalizedDataItems data={jData} />
    </section>
  )
}

export const PublishersPersonalized: React.FC<{}> = () => {
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

export const SubjectPersonalized: React.FC<{}> = () => {
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
