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
          {news.linkText && news.link && (
            <div>
              <a
                className="tw-bg-yellow-300 tw-underline"
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {news.linkText}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default News;
