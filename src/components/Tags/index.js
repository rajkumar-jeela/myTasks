import './index.css'

const Tags = props => {
  const {itemDetails, setActiveOption} = props
  const {optionId, displayText} = itemDetails
  const onClickSame = () => {
    setActiveOption(optionId)
  }

  return (
    <li className="list">
      <button type="button" className="button-text" onClick={onClickSame}>
        {displayText}
      </button>
    </li>
  )
}

export default Tags
