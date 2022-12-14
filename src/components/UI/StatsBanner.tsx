const styles = {
  banner_container:
    "mb-4 xl:mt-9 xl:mb-9 grid grid-cols-4 gap-2 md:gap-8 text-xl font-bold text-txt",
  card: "flex flex-col gap-2 bg-crust p-3 rounded-2xl rounded-tl-lg",
  text_gradient:
    "text-transparent bg-clip-text bg-gradient-to-r from-white to-light_pink",
};

interface Props {
  left_top_header: string;
  left_top_content: string | number | undefined;
  right_top_header: string;
  right_top_content: string | number | undefined;
  top_row_header: string;
  top_row_content: string | number | undefined;
  btm_row_header: string;
  btm_row_content: string | number | undefined;
}

const StatsBanner = ({
  left_top_header,
  left_top_content,
  right_top_header,
  right_top_content,
  top_row_header,
  top_row_content,
  btm_row_header,
  btm_row_content,
}: Props) => {
  return (
    <div className={styles.banner_container}>
      <div className={styles.card}>
        <span>{left_top_header}</span>
        <span>{left_top_content}</span>
      </div>
      <div className={styles.card}>
        <span>{right_top_header}</span>
        <span>{right_top_content}</span>
      </div>
      <div className={styles.card}>
        <span className={styles.text_gradient}>{top_row_header}</span>
        <span className={styles.text_gradient}>{top_row_content}</span>
      </div>
      <div className={styles.card}>
        <span className={styles.text_gradient}>{btm_row_header}</span>
        <span className={styles.text_gradient}>{btm_row_content}</span>
      </div>
    </div>
  );
};

export default StatsBanner;
