import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, publishedAt, source} = this.props;

        // Extract just the date part from publishedAt
        let date = publishedAt ? publishedAt.split("T")[0] : "Unknown date";

        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imageUrl} className="card-img-top" alt="Article thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        
                        <p className="card-text"><small className='text-muted'>Source: <span className='badge bg-success'>{source}</span></small><br/><small className="text-muted">Published on: {date}</small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read Full Article</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
