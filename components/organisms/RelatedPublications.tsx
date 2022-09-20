import React from 'react'
import { SubTitle } from 'components/organisms'
import SearchResultItemCompact from 'components/organisms/SearchResultItemCompact'

const RelatedPublications: React.FC<any> = () => {
  return (
    <div className="max-w-3xls mx-auto">
      <SubTitle title="Related publications" />
      <div className="hideScrollBar overflow-y-scroll whitespace-nowrap p-4">
        <div className="flex px-4">
          {[1, 2, 3, 4].map((id) => {
            return (
              <div key={id} className="w-60 min-w-fit whitespace-normal px-2">
                <SearchResultItemCompact
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
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RelatedPublications
