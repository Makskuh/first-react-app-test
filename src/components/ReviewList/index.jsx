import './style.css';
import React from 'react';
function ReviewList(props) {
  const { title, mark, text, authorName, authorImg } = props;
  return (
    <div className="commentsContainer">
      <div className="commentWrapper">
        <article className="commentArticle">
          <div className="authorData">
            <div className="imageWrapper">
              <img className="authorImg" src={authorImg} alt={authorName} />
            </div>
            <p className="authorName">{authorName}</p>
          </div>
          <div className="commentBody">
            <h2 className="commentTitle">{title}</h2>
            <p className="mark">{mark}</p>
            <p className="commentText">{text}</p>
          </div>
        </article>
      </div>
    </div>
  );
}
export default ReviewList;
