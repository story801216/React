import React from 'react'
// 用來取代原本重複的 Radio 按鈕
function RadioButton(props) {
  const { value, checkedValue, setCheckedValue } = props

  return (
    <>
      <input
        type="radio"
        value={value}
        checked={checkedValue === value}
        onChange={(e) => {
          setCheckedValue(e.target.value)
        }}
      />
      <label>{value}</label>
    </>
  )
}

export default RadioButton
