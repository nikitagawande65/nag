import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Review extends Component {
    renderStars(n) {
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push(<i key={i} className="fa fa-star"></i>);
        }
        return stars;
    }
    render() {
        let { review } = this.props;
        return (
            <div className="row">
                <div className="col-6 col-sm-8 col-md-8">
                    <div className="alert alert-info">
                        <span>{this.renderStars(review.stars)}</span> &mdash; <span>{review.author}</span>
                        <hr class="my-4"/>
                        <p>{review.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}
Review.propTypes = {
    review: PropTypes.object.isRequired
}

export default Review;