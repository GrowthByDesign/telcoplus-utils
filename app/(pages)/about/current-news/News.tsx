import { newsData } from "./newsData";

const News = () => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-8">
      {newsData.map((news, idx) => (
        <div key={idx}>
          <div className="tw-text-xl">
            <strong>{news.title}</strong>
          </div>
          <div>{news.description}</div>
        </div>
      ))}
    </div>
  );
};

export default News;
