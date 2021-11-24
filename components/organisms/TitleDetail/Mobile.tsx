import React from "react";
import classnames from "classnames";
import debounce from "lodash/debounce";
import Router from "next/router";
import styles from "./mobile.module.scss";
import Skeleton from "react-loading-skeleton";
import get from "lodash/get";
import useTitleDetail from "fetchHooks/useTitleDetail";
import {
  IconCite,
  IconBookmark,
  IconSocialLinkedIn,
  IconSocialTwitter,
  IconSocialFacebook,
} from "components/icons";
import { ActionItem, ButtonFab, Space, FeaturedChip } from "components/atoms";
import { NextArticle } from "components/molecules";
import PublicationIssueJsonLd from "analytics/PublicationIssueJsonLd";

interface publicationTypeProps {
  type: string;
  id: string;
}

// interface pageProps {
//   title: string;
//   type: string;
//   authors: string[];
//   body: string;
//   publicationYear: string;
//   subjects: string[];
//   publicationType: publicationTypeProps;
// }

const __renderTitle = (title = "") => {
  return (
    <>
      <h1 className={classnames("first_letter_caps", styles.title)}>{title}</h1>
      <div className={"pull__l1"}>
        <FeaturedChip type={"reviewed"} /> <FeaturedChip type={"referenced"} />
      </div>
    </>
  );
};

const __renderContentType = (title, journal, year) => {
  return (
    <div className="py__2">
      <strong className="color__nut7">Journal - {year}</strong>
      <ActionItem
        className="px__2"
        text={title}
        href={`/search?q=${journal.title}`}
        type="link__small"
      />
    </div>
  );
};

const __renderAbstract = (abstract) => {
  return (
    <div className="py__2 text__justify">
      <div dangerouslySetInnerHTML={{ __html: abstract }} />
    </div>
  );
};

const __renderAuthors = (authors: []) => {
  return (
    authors && (
      <div className="py__2">
        <small>By </small>
        {authors
          .map<React.ReactNode>(({ name }, id) => (
            <ActionItem key={id} text={name} href={"/"} type="link__small" />
          ))
          .reduce((prev, curr) => [prev, ", ", curr])}
      </div>
    )
  );
};

const __renderKeywords = (keywords: []) => {
  return (
    keywords && (
      <div className="py__2">
        <span className="mute">keywords </span>
        {keywords
          .map<React.ReactNode>((name, id) => (
            <ActionItem key={id} text={name} href={"/"} />
          ))
          .reduce((prev, curr) => [prev, ", ", curr])}
      </div>
    )
  );
};

const __renderHead = () => {
  return (
    <div
      className={classnames("flex__align_center py__3", styles.headerAction)}
    >
      <ActionItem
        text={"← Back to results"}
        onClick={() => Router.back()}
        type="btn__small"
        className="pl__0"
      />

      <span className="flex__left" />
      <ButtonFab icon={<IconSocialFacebook />} small />
      <ButtonFab icon={<IconSocialLinkedIn />} small />
      <ButtonFab icon={<IconSocialTwitter />} small />
    </div>
  );
};

const FooterActions = ({ link }) => {
  const href = get(link, "[0].url");
  const [visible, visibleSet] = React.useState(true);
  let oldPoss = 0;

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = debounce(() => {
    const newPoss = window.pageYOffset || document.documentElement.scrollTop;

    if (newPoss > oldPoss) {
      visibleSet(true);
    } else {
      visibleSet(false);
    }
    oldPoss = newPoss <= 0 ? 0 : newPoss;
  }, 200);

  return (
    <div
      className={classnames(
        "px__3 stage__3",
        styles.actions,
        visible && styles.actionsHide
      )}
    >
      <ButtonFab icon={<IconCite />} />
      <ButtonFab icon={<IconBookmark />} />
      <Space size={2} />
      <ActionItem text={"Download"} href={"#"} type="btn__secondary" />
      <ActionItem newWindow text={"Read"} href={href} type="btn__primary" />
    </div>
  );
};

const __renderContent = (props) => {
  const { title, author, year, abstract, keywords, journal, link } = props;

  return (
    <div className="mw__3 px__3">
      <PublicationIssueJsonLd
        authorName={author}
        name={title}
        datePublished={year}
        description={abstract}
        issueNumber={year}
        publisher={title}
      />
      <Space size={2} />
      {__renderHead()}
      {__renderTitle(title)}
      {__renderContentType(title, journal, year)}
      {__renderAbstract(abstract)}
      {__renderAuthors(author)}
      {__renderKeywords(keywords)}
      <FooterActions {...props} />
      <div className="py__3 flex__space_between">
        <div className={styles.prevPublication}>
          <NextArticle
            url="/"
            prev
            title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
          />
        </div>

        <div className={styles.nextPublication}>
          <NextArticle
            url="/"
            title="Platform Competition in the Sharing Economy: Understanding How Ride-Hailing Services Influence New Car Purch..."
          />
        </div>
      </div>
    </div>
  );
};

const __renderLoading = () => {
  return (
    <div className={"mw__3 px__3"}>
      <div className="gaps__5" />
      <Skeleton />
      <div className="gaps__3" />
      <Skeleton height="80px" />
      <div className="gaps__4" />
      <Skeleton />
      <div className="gaps__4" />
      <Skeleton count={8} />
      <div className="gaps__4" />
      <Skeleton />
      <div className="gaps__4" />
      <Skeleton height="40px" />
    </div>
  );
};

const MobileTitleDetail: React.FC = () => {
  const { data } = useTitleDetail();

  if (!data) {
    return __renderLoading();
  }

  return <div>{__renderContent(data)}</div>;
};

export default MobileTitleDetail;
