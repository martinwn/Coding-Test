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
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function PaymentCard(props) {
  const { classes, data } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Payment
        </Typography>
        <StyledParagraph>PAN</StyledParagraph>
        <hr />
        <Typography component="p">{data.PAN}</Typography>
        <StyledParagraph>CVV</StyledParagraph>
        <hr />
        <Typography component="p">{data.CVV}</Typography>
        <StyledParagraph>Exp</StyledParagraph>
        <hr />
        <Typography component="p">{data.Exp}</Typography>
      </CardContent>
    </Card>
  );
}

PaymentCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaymentCard);
