import css from "./Description.module.css";
const Title = () => {
  return (
    <div className={css.TitleContainer}>
      <h1 className={css.Title}>Sip Happens Café</h1>
      <p className={css.TitleSub}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Title;
