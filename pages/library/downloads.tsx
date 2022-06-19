import React from 'react'
import { ButtonFab } from 'components/atoms'
import { IconMore } from 'components/icons'
import { LibraryTemplate } from 'components/templates'
import { commonMessages } from 'lib/getMessages'

type DataRowProps = {
  id: number
  name: string
}

const Downloads: React.FC = () => {
  return (
    <LibraryTemplate>
      {dataSet.map((data: DataRowProps) => __dataRow(data))}
    </LibraryTemplate>
  )
}

const __dataRow = ({ id, name }: DataRowProps) => (
  <div key={id}>
    <div className="px-4 py-4 flex flex__between bg_white shadow rounded-md">
      <span className="first_letter_caps">{name}</span>
      <div className="flex__left"></div>

      <span>
        <ButtonFab classNames="bg_white" icon={<IconMore />} />
      </span>
    </div>
  </div>
)

const dataSet = [
  {
    id: 23,
    name:
      'optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut'
  },
  {
    id: 24,
    name: 'dolore veritatis porro provident adipisci blanditiis et sunt'
  },
  {
    id: 25,
    name: 'quaerat velit veniam amet cupiditate aut numquam ut sequi'
  }
]

export async function getStaticProps({ locale }) {
  const commonMsg = await commonMessages(locale)

  return {
    props: {
      messages: {
        ...commonMsg
      }
    }
  }
}

export default Downloads
