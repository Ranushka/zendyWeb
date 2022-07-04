import React from 'react'
// import { Document, Page, pdfjs } from 'react-pdf'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const DetailPdf: React.FC<any> = ({ pdfUrl }) => {
  // const [numPages, setNumPages] = React.useState(null)

  // function onDocumentLoadSuccess({ numPages: nextNumPages }) {
  //   setNumPages(nextNumPages)
  // }

  // function onLoadError() {
  //   fetch(pdfUrl, {
  //     headers: {
  //       Accept: 'application/octet-stream'
  //     }
  //   })
  //     .then((res) => {
  //       return res.arrayBuffer()
  //     })
  //     .then((data) => {
  //       console.log('--------------')
  //       console.log(data)
  //     })
  //     .catch((err) => {
  //       return err.Message
  //     })
  // }

  return (
    <div>
      {/* 
      <embed className="w-full min-h-screen" src={pdfUrl + '#toolbar=0'} /> 
      */}

      {pdfUrl}

      {/* <embed src={pdfUrl} type="application/pdf" height={800} width={500} /> */}

      {/* <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onLoadError}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document> */}
    </div>
  )
}

export default DetailPdf
