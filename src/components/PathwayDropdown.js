import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function PathwayDropdown({ title, handleClose }) {
  const [open, setOpen] = useState(false)

  return (
    <div>

      <div style={{ display: "flex", direction: "row", alignItems: "center" }} onClick={() => { console.log("Click"); setOpen(!open) }}>
        <p style={{ height: "initial" }}>
          <FontAwesomeIcon icon={faPlus} />
          {title}
        </p>
      </div>
      {open && (<p>
        this is some content
      </p>)}
    </div>)
}