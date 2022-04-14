import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function PathwayDropdown({ title, handleClose }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <div style={{ display: "flex", direction: "row", alignContent: "center", }} onClick={() => { console.log("Click"); setOpen(!open) }}>
        <p style={{ height: "initial", fontSize: 14, margin: 0, borderBottom: "1px solid black", paddingBottom: 4 }}>
          {title}
          <FontAwesomeIcon icon={faPlus} style={{ marginLeft: 8, height: 14, width: 14 }} />
        </p>
      </div>
      {
        open && (<p>
          this is some content
        </p>)
      }
    </div >)
}