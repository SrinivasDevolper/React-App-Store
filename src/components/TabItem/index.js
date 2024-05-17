import './index.css'

const TabItems = props => {
  const {eachTabItem, tabClick, isActive} = props
  const {displayText, tabId} = eachTabItem
  const tabFunc = () => {
    console.log(tabId)
    tabClick(tabId)
  }
  const getTrueVal = isActive ? 'isActiveTab' : ''
  return (
    <li>
      <button
        type="button"
        className={`tab-button ${getTrueVal}`}
        onClick={tabFunc}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
