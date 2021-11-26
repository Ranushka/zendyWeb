import fetch from 'lib/request'
import { tempPublicationUrl } from 'lib/helpers'

// const __makeItRand = () => Math.random() >= 0.5;

// const __processData = (data) => {
//   let keywords = [];

//   const results = data.results.map((item) => {
//     const href = tempPublicationUrl(item.bibjson.title, item.id);
//     let subjects = [];

//     if (item.bibjson && item.bibjson.subject) {
//       subjects = item.bibjson.subject.map((a) => a.term);
//     }

//     return {
//       ...item.bibjson,
//       href,
//       id: item.id,
//       subjects,
//       isReviewed: __makeItRand(),
//       referenced: __makeItRand(),
//     };
//   });

//   if (results) {
//     keywords = results
//       .map((a) => a.keywords)
//       .filter((a) => a)
//       .flat()
//       .slice(0, 12);
//   }

//   return { ...data, results, keywords };
// };

const getTitleDetail = async (article_id: string) => {
  const data = await fetch(`https://doaj.org/api/v1/articles/${article_id}`)

  if (data) {
    return data
  }

  return null
}

export default getTitleDetail
