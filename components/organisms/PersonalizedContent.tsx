import React from 'react'
import SubTitle from 'components/organisms/SubTitle'
import PersonalizedDataItems from 'components/organisms/PersonalizedDataItems'
import useComposed from 'fetchHooks/useComposed'

export const JournalPersonalized: React.FC<{}> = () => {
  const { data } = useComposed()

  const jData = data && data['journalTitleFull']

  if (!jData) return <></>

  return (
    <div className="px-8">
      <SubTitle
        title={'Journals You might like'}
        linkText={'See all'}
        linkHref="/journals"
      />
      <PersonalizedDataItems data={jData} />
    </div>
  )
}

export const PublishersPersonalized: React.FC<{}> = () => {
  const { data } = useComposed()

  let jData = data && data['publishersFull']

  if (!jData) return <></>

  return (
    <div className="px-8">
      <SubTitle
        title={'Publishers You might like'}
        linkText={'See all'}
        linkHref="/publishers"
      />
      <PersonalizedDataItems data={jData} />
    </div>
  )
}

export const SubjectPersonalized: React.FC<{}> = () => {
  const { data } = useComposed()

  const jData = data && data['subSubjectsFull']

  if (!jData) return <></>

  return (
    <div className="px-8">
      <SubTitle
        title={'Browse by subject'}
        linkText={'See all'}
        linkHref="/subjects"
      />
      <PersonalizedDataItems data={jData} />
    </div>
  )
}
