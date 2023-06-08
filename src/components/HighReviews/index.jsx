function HighReviews(props) {
  const { review } = props;
  const HighReviewsMap = review.map((review) => (
    <div className="commentsContainer highReviews" key={review.id}>
      <div className="commentWrapper">
        <article className="commentArticle">
          <div className="authorData">
            <div className="imageWrapper">
              <img
                className="authorImg"
                src={review.authorImg}
                alt={review.authorName}
              />
            </div>
            <p className="authorName">{review.authorName}</p>
          </div>
          <div className="commentBody">
            <h2 className="commentTitle">{review.title}</h2>
            <p className="mark">{review.mark}</p>
            <p className="commentText">{review.text}</p>
          </div>
        </article>
      </div>
    </div>
  ));
  return <>{HighReviewsMap}</>;
}
export default HighReviews;
