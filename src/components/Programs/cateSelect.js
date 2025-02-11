import React from "react";
import { Checkbox, Grid, Typography } from "@mui/material";

export default function CateList({
  cates,  // list of categories/filter options to display
  selected,  // array representing currently selected options
  handleChoose,  // cb function triggered when user selects/deselects option
}) {

  return (
    <Grid container direction="column" spacing={1}>
      {cates.map((cate, i) => (
        <Grid item key={i} style={{ cursor: "pointer" }} onClick={() => handleChoose(cate.id)}>
          {/* <div
            onClick={() => handleChoose(cate.id)}
            style={{
              // padding: "4px 10px",
              border: "0.5px solid #ddd",
              height: 20,
              width: 20,
              borderColor:
                selected?.includes(cate.id) ? "#004978" :
                  "#ddd",
              backgroundColor: selected?.includes(cate.id) && "#d6efff",
              borderRadius: 4,
            }}
          > */}
          <Grid container justifyContent={"flex-start"} alignItems="center">
            <Checkbox
              size="small"
              // onChange={() => handleChoose(cate.id)}
              style={{
                fontSize: 8,
                padding: 0, marginRight: 8,
                color: selected?.includes(cate.id) ? "#004978" : "#ddd",
              }}
              checked={selected?.includes(cate.id) === true} />
            <Grid item>
              <Typography>{cate.name}</Typography>
            </Grid>
          </Grid>
          {/* </div> */}
        </Grid>
      ))}
    </Grid>
  );
}
