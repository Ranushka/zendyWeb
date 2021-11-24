import useSWR from "swr";
import { useRouter } from "next/router";
import { tempPublicationUrl } from "lib/helpers";

const fetcher = (url) => {
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return __processData(data);
    });
};

const __makeItRand = () => Math.random() >= 0.5;

const __processData = (data) => {
  let keywords = [];

  const results = data.results.map((item) => {
    const href = tempPublicationUrl(item.bibjson.title, item.id);
    let subjects = [];

    if (item.bibjson && item.bibjson.subject) {
      subjects = item.bibjson.subject.map((a) => a.term);
    }

    return {
      ...item.bibjson,
      href,
      id: item.id,
      subjects,
      isReviewed: __makeItRand(),
      referenced: __makeItRand(),
    };
  });

  if (results) {
    keywords = results
      .map((a) => a.keywords)
      .filter((a) => a)
      .flat()
      .slice(0, 12);
  }

  return { ...data, results, keywords };
};

const useSearchResults = () => {
  const router = useRouter();
  const queryString: any = router.query.q;

  const url = `https://doaj.org/api/v1/search/articles/${queryString}`;

  return useSWR(url, fetcher);
};

export default useSearchResults;
