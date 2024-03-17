import React from 'react'
import '../checkbox/checkbox.css'
function Checkbox({label,col}) {
  return (
    <div className={`checkbox-wrapper-15 mx-2 ` + col}>
        <input className="inp-cbx" id="cbx-15" type="checkbox" />
        <label className="cbx" for="cbx-15">
        <span>
            <svg width="12px" height="9px" viewbox="0 0 12 9">
                <polyline points="1 5 4 8 11 1"></polyline>
            </svg>
        </span>
        <span>{label}</span>
        </label>
  </div>
  )
}

export default Checkbox