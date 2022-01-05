import React from 'react';
import ReviewButton from './review-button';
import StarButton from './star-button';

let e = React.createElement;

export default class Review extends React.Component {
    render() {
        return (
        <div className="card w-75">
            <div className="card-header bg-primary text-white">
            {this.props.username} {this.props.date}
            </div>
        <div className="card-body">
           {this.props.content}
            </div>        
        <div className="card-footer">
            <StarButton />
            <ReviewButton />
        </div>
        </div>
        );
    }
}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
   /*     e('div',
    {class: 'card w-75'},
    e('div',
    {class: 'card-header bg-success text-white'},
        'Username and Time'),
    e('div',
    {class: 'card-body'},
    'Review Content'),
    e('div',
    {class: 'card-footer'},
    e(StarButton, {}, null),
    e('span', {}, ' '),
    e(ReviewButton, {}, null)
    )
    );
    }
}*/

