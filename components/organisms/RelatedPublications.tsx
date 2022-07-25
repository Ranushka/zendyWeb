import React from 'react'
import { SearchResultItem, SubTitle } from 'components/organisms'

const RelatedPublications: React.FC<any> = () => {
  return (
    <div className="mw__5">
      <SubTitle title="Related publications" />
      <div className="px-4">
        {[1, 2, 3, 4].map((id) => {
          return (
            <SearchResultItem
              key={id}
              resultId="sss"
              href={'/'}
              publicationName={'dsad'}
              journalTitle="abc title"
              publicationYear="2020"
              publicationType="journal"
              isPremium
              downloadLink="/"
              permanentLinkId="uid"
              authors={['name one']}
              keywords={['name one']}
              subjects={['subject']}
              link={[]}
              zendyLink="#"
              title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purchases."
              abstract="Ride-hailing services provide not only alternative transportation for passengers but also job opportunities for potential drivers,  in both negative and positive effects on new car purchases. Our study assesses the impact of ride-hailing platforms' market entry on new car purchases in the presence. Entry on new ca..."
            />
          )
        })}
      </div>
    </div>
  )
}

export default RelatedPublications
