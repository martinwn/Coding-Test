import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const StyledParagraph = styled.p`
  font-weight: 600;
  margin: 5px 0;
`;

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function RemittanceCard(props) {
  const { classes, data } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {data.PayorName}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        />
        <Typography className={classes.pos} color="textSecondary">
          InvoiceNo: {data.InvoiceNo}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          ID: {data.PayorId}
        </Typography>

        <StyledParagraph>Amount</StyledParagraph>
        <hr />
        <Typography component="p">{data.Amount}</Typography>
        <StyledParagraph>Description</StyledParagraph>
        <hr />
        <Typography component="p">{data.Description}</Typography>
      </CardContent>
    </Card>
  );
}

RemittanceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RemittanceCard);
