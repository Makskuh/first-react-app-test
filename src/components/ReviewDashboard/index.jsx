import ReviewList from '../ReviewList';
import responseData from '../ReviewList/ResponceData';
import HighReviews from '../HighReviews';
import React from 'react';
class ReviewDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: structuredClone(responseData),
    };
  }
  filterHighReviews = (review) => review.mark > 8;

  mapReview = (review) => {
    return (
      <ReviewList
        key={review.id}
        title={review.title}
        mark={review.mark}
        text={review.text}
        authorName={review.authorName}
        authorImg={review.authorImg}
      />
    );
  };
  render() {
    const { review } = this.state;
    const renderReview = review.map(this.mapReview);
    const highReviewsArr = review.filter(this.filterHighReviews);
    return (
      <>
        <HighReviews review={highReviewsArr} />
        {renderReview}
      </>
    );
  }
}
export default ReviewDashboard;