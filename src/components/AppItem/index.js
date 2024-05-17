import './index.css'

const Appitem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp

  return (
    <li className="app-cont">
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default Appitem
