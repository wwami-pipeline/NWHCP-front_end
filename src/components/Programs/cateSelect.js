import React from "react";
import { Grid, Typography } from "@mui/material";

export default function CateList({
  cates,
  selected,
  handleChoose,
}) {

  return (
    <Grid container spacing={1}>
      {cates.map((cate, i) => (
        <Grid item key={i} style={{ cursor: "pointer" }}>
          <div
            onClick={() => handleChoose(cate.id)}
            style={{
              padding: "4px 10px",
              border: "0.5px solid #ddd",
              borderColor:
                selected?.includes(cate.id) ? "#004978" :
                  "#ddd",
              backgroundColor: selected?.includes(cate.id) && "#d6efff",
              borderRadius: 4,
            }}
          >
            <Typography
              color={(selected?.includes(cate.id) && "#004978") || "#7B7B7C"}
            >
              {cate.name}
            </Typography>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
