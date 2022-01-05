import React from 'react';
import ReviewButton from './review-button';
import StarButton from './star-button';
import Review from './review';

let e = React.createElement;

export default class RecentReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: props.review,
            content: props.content
        };
    }
render() {
    /*let reviewOne = { 
        content: 'This is my Review',
        username: 'A',
        date: '12-15-2021'
    };

    let reviewTwo = { 
        content: 'This is a newer Review',
        username: 'B',
        date: '12-18-2021'
    };

    let reviewThree = { 
        content: 'This is the best Review',
        username: 'C',
        date: '12-20-2021'
    }; 
*/
let reviews = [];
if (this.state.review) {
    for (let review of this.state.review) {
        reviews.push(<Review {...review} />);
    }
}
    return (
        <div className="card w-75">
            <div className="card-header bg-primary text-white">
            Username and Time
            </div>
        <div className="card-body">
            {this.state.content}
            </div>        
        <div className="card-footer">
            <StarButton />
            <ReviewButton />
            {reviews}
             </div>
        </div>
    );
}
}
    
//    {class: 'card-body'},
 //   'RecentReview Content'),
//    e('div',
 //   {class: 'card-footer'},
 //   e(StarButton, {}, null),
 //   e('span', {}, ' '),
 //   e(ReviewButton, {}, null),
 //   e(Review, {}, null),
 //   e(Review, {}, null),
//e(Review, {}, null)
    
