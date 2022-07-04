import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const DetailPdf: React.FC<any> = ({ pdfUrl }) => {
  const [pageCount, setPageCount] = React.useState(0)
  const [numPagesToShow, setNumPagesToShow] = React.useState(null)
  const [isFull, setIsFull] = React.useState(false)
  const pdfWrapper = React.useRef(null)

  React.useEffect(() => {
    if (isFull) {
      console.log('-----', pageCount)

      setNumPagesToShow(pageCount)
    }
  }, [isFull, pageCount])

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    const count = isFull ? nextNumPages : 3
    setPageCount(nextNumPages)
    setNumPagesToShow(count)
  }

  return (
    <div className="max-w-4xl mx-auto px-8 py-8">
      <div ref={pdfWrapper}>
        <Document
          file={`/api/getPDF?url=${pdfUrl}`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {pdfWrapper.current &&
            Array.from(new Array(numPagesToShow), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={pdfWrapper.current && pdfWrapper.current.clientWidth}
                className="shadow-sm rounded-lg mb-4 overflow-hidden"
              />
            ))}
        </Document>
      </div>
      {!isFull && (
        <div
          className="bg_nut0 relative z-10 -mt-10 text-center p-8 cursor-pointer readMoreWrapper text_pri7"
          onClick={() => setIsFull(true)}
        >
          Load full document
        </div>
      )}
    </div>
  )
}

export default DetailPdf
