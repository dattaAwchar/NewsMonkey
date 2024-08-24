import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
        topic: 'world',
        pageSize: 3,
        category: 'general',
    }
    static propTypes = {
        topic: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],  // Initialize as an empty array
            loadingGif: true,
            page: 1,
            totalResults: 0
        };
        document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.topic)}`;
    }

    async updateNews() {
        // API Key 1 of codermythos@gmail.com
        const url = `https://newsapi.org/v2/top-headlines?q=${this.props.topic}&apiKey=fb8040db9d6a475b861c834e602855c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        // Random API Key 1: 389bbcdd6e22476dbbe3df02eb5cd7fa
        // DattaAwchar API Key 2: fb8040db9d6a475b861c834e602855c6
        // CoderMythos API Key 3: 973da49828eb474c847c39a733d36f5d
        

        this.setState({ loadingGif: true });

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData); // Check the API response here

        this.setState({
            articles: parsedData.articles || [], // Fallback to an empty array if no articles
            totalResults: parsedData.totalResults,
            loadingGif: false,
        });
    }

    async componentDidMount() {
        this.updateNews()
    }

    // Previous Button
    // handlePreviousClick() {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews()
    // }

    // Next Button
    // handleNextClick() {
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews()
    // }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })

        // API Key 1 of codermythos@gmail.com
        const url = `https://newsapi.org/v2/top-headlines?q=${this.props.topic}&apiKey=fb8040db9d6a475b861c834e602855c6&page=${this.state.page}&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData); // Check the API response here

        this.setState({
            articles: this.state.articles.concat(parsedData.articles || []), // Fallback to an empty array if no articles
            totalResults: parsedData.totalResults
        });
    }



    render() {
        return (
            // <div className='container my-2'>
            <>
                <h1 className="text-center my-3">NewsMonkey - Top {this.capitalizeFirstLetter(this.props.topic)} Headlines</h1>

                {this.state.loadingGif && <Spinner />}

                <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner />} >

                    <div className="container">

                        <div className="row">
                            {this.state.articles && this.state.articles.length > 0 ? (this.state.articles.map((element) => (
                                <div className="col-md-3 my-3 mx-5" key={element.url}>
                                    <NewsItem
                                        title={element.title ? element.title : ""}
                                        description={element.description ? element.description : ""}
                                        source={element.source.name}
                                        publishedAt={element.publishedAt}
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                    />
                                </div>
                            ))
                            ) : (
                                !this.state.loadingGif && <p className="text-center">No articles available.</p>
                            )}
                        </div>
                    </div>
                </InfiniteScroll>


                {/* <div className="container d-inline gap-2 col-2 mx-auto my-2">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary mx-2 my-2" style={{ width: '110px' }} onClick={this.handlePreviousClick}> &#x2190; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary mx-2 my-2" style={{ width: '110px' }} onClick={this.handleNextClick}>Next &#x2192;</button>
                </div> */}
            </>
        );
    }

}

export default News;