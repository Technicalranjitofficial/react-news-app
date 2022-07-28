import React, { Component } from "react";
import Loading from "./Loading";

import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&country=${this.props.country}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.setState({ page: this.state.page });
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.setState({ page: this.state.page + 1 });
      this.updateNews();
    }
  };

  render() {
    return (
      <>
        <div className="container my-3">
          {this.state.loading && <Loading />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md my-2" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://www.niddk.nih.gov/-/media/Images/Components/Default-Social-Media-Images/News-Card.png"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      publishedAt={element.publishedAt}
                      source={element.source}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}

                <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item" >
                    <button className="page-link" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>Previous</button>
                    </li>
                    <li className="page-item"><span className="page-link">{this.state.page}</span></li>
                    <li className="page-item">
                    <button className="page-link" disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            } onClick={this.handleNextClick} >Next</button>
                    </li>
                </ul>
                </nav>
      </>
    );
  }
}

export default News;
