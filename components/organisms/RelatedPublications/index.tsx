import { NextPage } from 'next'
import { Space } from 'components/atoms'
import { SearchResultItem, SubTitle } from 'components/molecules'

const RelatedPublications: NextPage<any> = () => {
  return (
    <div className="mw__5">
      <Space size={4} />
      <SubTitle title="Related publications" />
      <div className="px__3">
        <SearchResultItem
          id="dasda"
          href={'/'}
          journal="abc title"
          year="2020"
          downloadLink="/"
          permanentLinkId="uid"
          author={[]}
          keywords={'keyword'}
          subjects={['subject']}
          link={[]}
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purchases."
          abstract="Ride-hailing services provide not only alternative transportation for passengers but also job opportunities for potential drivers,  in both negative and positive effects on new car purchases. Our study assesses the impact of ride-hailing platforms' market entry on new car purchases in the presence. Entry on new ca..."
        />

        <SearchResultItem
          id="dasds"
          href={'/'}
          journal="abc title"
          year="2020"
          downloadLink="/"
          permanentLinkId="uid"
          author={[]}
          keywords={'keyword'}
          subjects={['subject']}
          link={[]}
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purchases."
          abstract="Ride-hailing services provide not only alternative transportation for passengers but also job opportunities for potential drivers,  in both negative and positive effects on new car purchases. Our study assesses the impact of ride-hailing platforms' market entry on new car purchases in the presence. Entry on new ca..."
        />

        <SearchResultItem
          id="dasdd"
          href={'/'}
          journal="abc title"
          year="2020"
          downloadLink="/"
          permanentLinkId="uid"
          author={[]}
          keywords={'keyword'}
          subjects={['subject']}
          link={[]}
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purchases."
          abstract="Ride-hailing services provide not only alternative transportation for passengers but also job opportunities for potential drivers,  in both negative and positive effects on new car purchases. Our study assesses the impact of ride-hailing platforms' market entry on new car purchases in the presence. Entry on new ca..."
        />

        <SearchResultItem
          id="dasdf"
          href={'/'}
          journal="abc title"
          year="2020"
          downloadLink="/"
          permanentLinkId="uid"
          author={[]}
          keywords={'keyword'}
          subjects={['subject']}
          link={[]}
          title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purchases."
          abstract="Ride-hailing services provide not only alternative transportation for passengers but also job opportunities for potential drivers,  in both negative and positive effects on new car purchases. Our study assesses the impact of ride-hailing platforms' market entry on new car purchases in the presence. Entry on new ca..."
        />
      </div>
    </div>
  )
}

export default RelatedPublications
