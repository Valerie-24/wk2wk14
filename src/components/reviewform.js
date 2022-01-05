import React from 'react';
import StarButton from './star-button';
import ReviewButton from './review-button';
import Review from './review';
import RecentReviews from './recent-reviews';

let e = React.createElement;

export default class ReviewForm extends React.Component {
    render() {
        let review = [
            { 
            content: 'This is my Review',
            username: 'A',
            date: '12-15-2021'
        },
    {
            content: 'This is a newer Review',
            username: 'B',
            date: '12-18-2021'
        },
        {
    
            content: 'This is the best Review',
            username: 'C',
            date: '12-20-2021'
        }
    ];

return (
    <div className="container">
        <RecentReviews {...{review: review, content: 'This is my content!' }}/>
        <RecentReviews/>
        <RecentReviews/>
    </div>
);
}
}




   /*     return e('div',
    {class: 'card w-75'},
    e('div',
    {class: 'card-header bg-success text-white'},
        'Username and Time'),
    e('div',
    {class: 'card-body'},
    'ReviewForm Content'),
    e('div',
    {class: 'card-footer'},
    e(StarButton, {}, null),
    e('span', {}, ' '),
    e(ReviewButton, {}, null),
    e('br', ' ', null),
    e(Review, {}, null),
    e(Review, {}, null)
    )
    );
    }
}*/
