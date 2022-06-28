import React from 'react'

const DetailPdf: React.FC<any> = ({ pdfUrl }) => {
  // const [numPages, setNumPages] = React.useState(null)

  return (
    <div>
      <iframe className="w-full min-h-screen" src={pdfUrl + '#toolbar=0'} />
    </div>
  )
}

export default DetailPdf
