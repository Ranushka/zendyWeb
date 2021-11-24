import React from "react";
import classnames from "classnames";
import { Testimonial } from "components/molecules";
import { Space } from "components/atoms";
import styles from "./mobile.module.scss";
import { attributes as Data } from "data/widgets/testimonials.md";

type Props = {};

const Testimonials: React.FC<Props> = ({}) => {
  return (
    <section className="my__5">
      <div className="text__center mw__2">
        <h2>We are trusted by professionals around the world</h2>
        <p>
          Our library is trusted by many universities and government
          organization in GCC.
        </p>
      </div>

      <Space size={5} />
      <div
        className={classnames(styles.testimonialsWrap, "mw__6 sliderScroll")}
      >
        {Data.testimonials &&
          Data.testimonials.map(({ name, quote, title }, id) => (
            <Testimonial
              key={`uspItem${id}`}
              quote={quote}
              name={name}
              title={title}
            />
          ))}
      </div>
    </section>
  );
};

export default Testimonials;
