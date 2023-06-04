import './style.css';
import React from 'react';
function Review(props) {
  const { name } = props;
  const fragment = React.createElement(
    React.Fragment,
    null,
    name.map((value) => {
      const { title, mark, text, authorName, authorImg } = value;
      return (
        <div className="commentsContainer">
          <li class="commentWrapper">
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
          </li>
        </div>
      );
    })
  );

  return fragment;
}
export default Review;
