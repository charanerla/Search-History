import {Component} from 'react'

import SearchListItem from '../SearchListItem'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserHistory extends Component {
  state = {
    searchValue: '',
    isSearchValueIncluded: true,
    historyList: initialHistoryList,
  }

  deleteSearch = id => {
    const {historyList} = this.state

    const resultList = historyList.filter(eachObj => eachObj.id !== id)

    this.setState({historyList: resultList})
  }

  displaySearch = event => {
    const inputValue = event.target.value.toLowerCase()

    this.setState({searchValue: inputValue})
  }

  render() {
    const {searchValue, isSearchValueIncluded, historyList} = this.state

    const searchResults = historyList.filter(eachObj =>
      eachObj.title.toLowerCase().includes(searchValue),
    )

    let element = null

    if (isSearchValueIncluded && historyList.length > 0) {
      element = (
        <ul className="un-ordered-list">
          {searchResults.map(historyItem => (
            <SearchListItem
              historyItem={historyItem}
              key={historyItem.id}
              deleteSearch={this.deleteSearch}
            />
          ))}
        </ul>
      )
    }
    if (isSearchValueIncluded === false || searchResults.length === 0) {
      element = <p className="no-history-item">There is no history to show</p>
    }

    return (
      <div className="main-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-icon-input-element-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search history"
              className="search-input"
              value={searchValue}
              onChange={this.displaySearch}
            />
          </div>
        </div>
        <div className="history-container">{element}</div>
      </div>
    )
  }
}

export default BrowserHistory
