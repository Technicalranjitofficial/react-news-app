import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,description,imageUrl,newsUrl,author,publishedAt,source} = this.props
    return (
        <div className="card bg-dark text-white" style={{width: "20rem"}}>
        <img src={imageUrl} className="card-img-top img-n" alt="..."/>
        <div className="card-body">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source.name}
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-success">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
