const markup = (html) => {
  const minifyHtml = JSON.stringify(html)

  return { __html: minifyHtml }
}

export default markup
