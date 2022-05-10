import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Fade, Grid, Zoom } from '@mui/material';



export default function PathwayDropdown({ title, children, level }) {
  const [open, setOpen] = useState(false)
  if (level == null) {
    level = 0;
  }

  return (
    <div>
      <div style={{ display: "flex", direction: "row", alignContent: "center", paddingBottom: 12 }} >
        <p style={{ height: "initial", fontSize: 14, margin: 0, borderBottom: level ? "" : "1px solid black", paddingBottom: 4, }}>
          <Grid container direction='row' alignItems='center'>
            <Grid style={{ fontSize: 18 - level * 1, cursor: "pointer" }} item onClick={() => { console.log("Click"); setOpen(!open) }}>
              <b>{title}</b>
            </Grid>
            <Grid item>
              <Grid container style={{ marginLeft: 16, cursor: "pointer" }} onClick={() => { console.log("Click"); setOpen(!open) }}>
                <Zoom in={!open} style={{ transitionDelay: '200ms' }}>
                  <Grid>
                    <FontAwesomeIcon icon={faPlus} style={{ marginLeft: 0, height: 14, width: 14 }} />
                  </Grid>
                </Zoom>
                <Zoom in={open} style={{ marginLeft: -14, transitionDelay: '200ms' }}>
                  <Grid>
                    <FontAwesomeIcon icon={faMinus} style={{ marginLeft: 0, height: 14, width: 14 }} />
                  </Grid>
                </Zoom>
              </Grid>
            </Grid>
          </Grid>
        </p>
      </div>
      <Collapse in={open}>
        <Grid container style={{ marginBottom: 8, marginLeft: 32 }}>
          {children}
        </Grid>
      </Collapse>
    </div >)
}