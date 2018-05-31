import React, {Component} from 'react';
import Nav from '../../components/Nav/Nav';
import SideNav from '../../components/Nav/SideNav/SideNav';
import Search from '../../components/Search/Search';
import Content from '../../components/Content/Content';
import Articles from '../../components/Content/Articles/Articles';
import axios from 'axios';
import classes from './Layout.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class Layout extends Component {
    state = {
        articles: [],
        showSideBar: false,
        topHeadlines: false,
        abc: false,
        bbc: false,
        cnn: false,
        espn: false,
        nbc: false,
        nyt: false,
        title: '',
        input: ''
    }

    headlinesToggleHandler = () => {
        this.setState({
            topHeadlines: true,
            abc: false,
            bbc: false,
            cnn: false,
            espn: false,
            nbc: false,
            nyt: false
        },function(){
            this.getData();
        })
    }

    abcToggleHandler = () => {
        this.setState({
            topHeadlines: false,
            abc: true,
            bbc: false,
            cnn: false,
            espn: false,
            nbc: false,
            nyt: false
        },function(){
            this.getData();
        })
    }

    bbcToggleHandler = () => {
        this.setState({
            topHeadlines: false,
            abc: false,
            bbc: true,
            cnn: false,
            espn: false,
            nbc: false,
            nyt: false
        },function(){
            this.getData();
        })
    }

    cnnToggleHandler = () => {
        this.setState({
            topHeadlines: false,
            abc: false,
            bbc: false,
            cnn: true,
            espn: false,
            nbc: false,
            nyt: false
        },function(){
            this.getData();
        })
    }

    espnToggleHandler = () => {
        this.setState({
            topHeadlines: false,
            abc: false,
            bbc: false,
            cnn: false,
            espn: true,
            nbc: false,
            nyt: false
        },function(){
            this.getData();
        })
    }

    nbcToggleHandler = () => {
        this.setState({
            topHeadlines: false,
            abc: false,
            bbc: false,
            cnn: false,
            espn: false,
            nbc: true,
            nyt: false
        },function(){
            this.getData();
        })
    }

    nytToggleHandler = () => {
        this.setState({
            topHeadlines: false,
            abc: false,
            bbc: false,
            cnn: false,
            espn: false,
            nbc: false,
            nyt: true
        },function(){
            this.getData();
        })
    }

    componentWillMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+API_KEY).then(response => {
            let articles = response.data.articles.slice(0, 24);
            this.setState({articles: articles, topHeadlines: true, title: 'Top Headlines'});
       })
    }

    getData() {
        if(this.state.topHeadlines) {
            axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey='+API_KEY).then(response => {
                let articles = response.data.articles.slice(0, 24);
                this.setState({articles: articles, title: 'Top Headlines'});
            })
        } else if (this.state.abc) {
            axios.get('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey='+API_KEY).then(response => {
                let articles = response.data.articles.slice(0, 24);
                this.setState({articles: articles, title: 'ABC News'});
            })
        } else if (this.state.bbc) {
            axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey='+API_KEY).then(response => {
                let articles = response.data.articles.slice(0, 24);
                this.setState({articles: articles, title: 'BBC'});
            })
        } else if (this.state.cnn) {
            axios.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey='+API_KEY).then(response => {
                let articles = response.data.articles.slice(0, 24);
                this.setState({articles: articles, title: 'CNN'});
            })
        } else if (this.state.espn) {
            axios.get('https://newsapi.org/v2/top-headlines?sources=espn&apiKey='+API_KEY).then(response => {
                let articles = response.data.articles.slice(0, 24);
                this.setState({articles: articles, title: 'ESPN'});
            })
        } else if (this.state.nbc) {
            axios.get('https://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey='+API_KEY).then(response => {
                let articles = response.data.articles.slice(0, 24);
                this.setState({articles: articles, title: 'NBC News'});
            })
        } else if (this.state.nyt) {
            axios.get('https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey='+API_KEY).then(response => {
                let articles = response.data.articles.slice(0, 24);
                this.setState({articles: articles, title: 'New York Times'});
            })
        }
    }

    setInput = (event) => {
        this.setState({input: event.target.value})
    }

    searchInput = () => {
        const https = 'https://newsapi.org/v2/everything?q=';
        const apiKey = '&apiKey='+API_KEY;
        axios.get(https+this.state.input+apiKey).then(response => {
        this.setState({articles: response.data.articles});
        })
    }

    sideBarCloseHandler = () => {
        this.setState({showSideBar: false})
    }
    
    sideBarToggle = () => {
        this.setState((prevState) => {
            return {showSideBar: !prevState.showSideBar};
        })
    }
    
    render() {

        const articles = this.state.articles.map(article => {
            return <Articles 
                img={article.urlToImage} 
                title={article.title}
                source={article.source.name}
                site={article.url}
                key={article.url} />
        })

        return (
            <React.Fragment>
                <Nav clicked={this.sideBarToggle} />
                <SideNav 
                    open={this.state.showSideBar} 
                    closed={this.sideBarCloseHandler}
                    headlinesClicked={this.headlinesToggleHandler}
                    abcClicked={this.abcToggleHandler}
                    bbcClicked={this.bbcToggleHandler}
                    cnnClicked={this.cnnToggleHandler}
                    espnClicked={this.espnToggleHandler}
                    nbcClicked={this.nbcToggleHandler}
                    nytClicked={this.nytToggleHandler} />
                <Search 
                    value={this.setInput}
                    enter={this.searchInput}
                    open={this.state.showSideBar} 
                    closed={this.sideBarCloseHandler}
                    headlinesClicked={this.headlinesToggleHandler}
                    abcClicked={this.abcToggleHandler}
                    bbcClicked={this.bbcToggleHandler}
                    cnnClicked={this.cnnToggleHandler}
                    espnClicked={this.espnToggleHandler}
                    nbcClicked={this.nbcToggleHandler}
                    nytClicked={this.nytToggleHandler} />
                <Content>
                    <h1>{this.state.title}</h1>
                    {articles}
                </Content>
                <footer>Powered by News API</footer>
            </React.Fragment>
        )
    }
}

export default Layout;