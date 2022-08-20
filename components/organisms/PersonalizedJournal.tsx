import React from 'react'
import SubTitle from 'components/organisms/SubTitle'
import PersonalizedDataItems from 'components/organisms/PersonalizedDataItems'
import useRecommendation from 'fetchHooks/useRecommendation'

const PersonalizedJournal: React.FC<{}> = () => {
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

export default PersonalizedJournal
