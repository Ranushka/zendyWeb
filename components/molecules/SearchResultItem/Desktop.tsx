import classnames from "classnames";
import striptags from "striptags";
import Ellipsis from "react-ellipsis-pjs";
import card from "./desktop.module.scss";
import get from "lodash/get";
import { SearchResultItemProps } from "types";
import {
  CheckBox,
  ActionItem,
  ButtonFab,
  Space,
  FeaturedChip,
} from "components/atoms";
import { IconCite, IconBookmark, IconLink } from "components/icons";

const __renderChips = (isReviewed, isReferenced) => {
  if (!isReviewed && !isReferenced) return;

  return (
    <div className={"pull__l1"}>
      {isReviewed && <FeaturedChip type={"reviewed"} />}
      {isReferenced && <FeaturedChip type={"referenced"} />}
    </div>
  );
};

const __renderTitle = (props) => {
  const {
    title = "",
    href = "/",
    isReviewed = true,
    isReferenced = true,
  } = props;

  return (
    <div
      className={classnames(
        "first_letter_caps py__2 pt__0",
        card.article__title
      )}
    >
      <ActionItem
        text={striptags(title.toString())}
        href="/title/[id]"
        as={`/title/${href}`}
        type="link__title"
      />
      {__renderChips(isReviewed, isReferenced)}
    </div>
  );
};

const __renderContentType = (title, journal, year) => {
  return (
    <div className="py__3 pt__0 lh__5">
      <strong className="color__nut7 small">Journal - {year}</strong>
      <ActionItem
        className="px__2"
        text={title}
        href={`/search?q=${journal.title}`}
        type="link__small"
      />
    </div>
  );
};

const __renderAbstract = (content) => {
  return (
    <div className="block py__2 pt__0">
      <div
        className={classnames(card.article__abstract, "color__nut7")}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

const __renderAuthors = (authors: []) => {
  const authorsList = authors.map(({ name }) => name).join("; ");

  return (
    authors && (
      <div className="py__1">
        <small className="flex">
          <small className="px__2 pl__0 mute">By - </small>
          <Ellipsis text={authorsList} suffix="...[et al.]" />
        </small>
      </div>
    )
  );
};

const __renderKeywords = (keywords: [string]) => {
  return (
    keywords && (
      <div className="py__1">
        <small className="px__2 pl__0 mute">keywords - </small>
        {keywords
          .map<React.ReactNode>((name, id) => (
            <ActionItem key={id} text={name} href={"/"} type="link__small" />
          ))
          .reduce((prev, curr) => [prev, ", ", curr])}
      </div>
    )
  );
};

const __renderSubjects = (keywords: [string]) => {
  return (
    keywords && (
      <div className="py__1">
        <small className="px__2 pl__0 mute">Subjects - </small>
        {keywords
          .map<React.ReactNode>((name, id) => (
            <ActionItem key={id} text={name} href={"/"} type="link__small" />
          ))
          .reduce((prev, curr) => [prev, ", ", curr])}
      </div>
    )
  );
};

const __renderActions = (link: [], id) => {
  const href = get(link, "[0].url");

  return (
    <section className={classnames("px__4 pr__0", card.article__actions)}>
      <div className={card.article__actions__sub}>
        <Space size={1} />
        <CheckBox className={"my__0"} id={"it_id" + id} />
        <div className="flex">
          <ButtonFab icon={<IconCite />} small />
          <ButtonFab icon={<IconLink />} small />
          <ButtonFab icon={<IconBookmark />} small />
        </div>
      </div>
      <ActionItem text={"Download"} href={"#"} type="btn__secondary" block />
      <Space size={3} />
      <ActionItem
        text={"⠀⠀Read⠀⠀"}
        href={href}
        onClick={() => window.open(href)}
        type={"btn__primary"}
        block
      />
    </section>
  );
};

const CardCurated: React.FC<SearchResultItemProps> = (props) => {
  const {
    id,
    href,
    title,
    abstract,
    journal,
    year,
    author,
    keywords,
    link,
    isReviewed,
    isReferenced,
    subjects,
  } = props;

  return (
    <article>
      <div className="flex py__4">
        <section className="mw__3 ml__0 mr__0">
          {__renderTitle({ title, href, isReviewed, isReferenced })}
          {__renderContentType(title, journal, year)}
          {abstract && __renderAbstract(abstract)}
          {keywords && __renderKeywords(keywords)}
          {subjects && __renderSubjects(subjects)}
          {author && __renderAuthors(author)}
        </section>

        {__renderActions(link, id)}
      </div>
    </article>
  );
};

export default CardCurated;
