import './index.css'

const SearchListItem = props => {
  const {historyItem, deleteSearch} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const sendIdToDeleteSearch = () => {
    deleteSearch(id)
  }

  return (
    <li className="list-item">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="logo-title-domainUrl-delete-container">
        <div className="logo-title-domainUrl-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-domain-url-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          testid="delete"
          id="delete"
          onClick={sendIdToDeleteSearch}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchListItem
