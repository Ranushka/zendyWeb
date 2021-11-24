import { ActionItem } from "components/atoms";

type Props = {
  href: string;
  title: React.ReactNode;
};

const CardSubject: React.FC<Props> = (props) => {
  const { href, title } = props;

  return (
    <ActionItem
      href={href}
      className="block__inline mx__1 my__1 rounded__1 bg__white stage__2 px__3 py__2"
    >
      <>{title}</>
    </ActionItem>
  );
};

export default CardSubject;
