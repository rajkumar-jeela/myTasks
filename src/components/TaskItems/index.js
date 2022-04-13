import './index.css'

const TaskItems = props => {
  const {itemDetails, setActiveOption} = props
  const {activeOptionId, taskInput, id} = itemDetails

  const onClickSame = () => {
    setActiveOption(id)
  }

  return (
    <li className="items">
      <p className="user-input">{taskInput}</p>
      <p type="button" onClick={onClickSame} className="option">
        {activeOptionId}
      </p>
    </li>
  )
}

export default TaskItems
