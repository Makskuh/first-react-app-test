import React from 'react';
import Review from './components/Review';
import responseData from './components/Review/ResponceData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: structuredClone(responseData),
    };
  }
  mapReview = (review) => {
    return (
      <Review
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
    return <>{renderReview}</>;
  }
}
export default App;
