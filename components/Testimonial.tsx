import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Grid2,
} from "@mui/material";
import { styled } from "@mui/system";

const RoundedCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  padding: theme.spacing(2),
  maxWidth: 500,
  margin: "20px auto",
}));

const Testimonial = ({ reviewer }) => {
  return (
    <RoundedCard>
      <CardContent>
        <Grid2 container spacing={2}>
          <Grid2>
            <Avatar
              alt={reviewer.name}
              src={reviewer.image}
              sx={{ width: 56, height: 56 }}
            />
          </Grid2>
          <Grid2>
            <Typography variant="h6">{reviewer.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {reviewer.role}
            </Typography>
          </Grid2>
        </Grid2>
        <Typography variant="body1" style={{ marginTop: "10px" }}>
          {reviewer.testimonial}
        </Typography>
      </CardContent>
    </RoundedCard>
  );
};

export default Testimonial;
