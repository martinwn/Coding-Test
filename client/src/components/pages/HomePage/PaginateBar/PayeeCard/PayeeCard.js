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

const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 1rem;
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

function PayeeCard(props) {
  const { classes, data } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography style={{ fontWeight: 600 }} variant="h5" component="h2">
          {data.Name}
        </Typography>
        <StyledSpan id="attention" style={{ float: "right" }}>
          {data.Attention}
        </StyledSpan>
        <Typography className={classes.pos} color="textSecondary">
          {data.SubmissionDate}
        </Typography>
        <StyledParagraph>Address</StyledParagraph>
        <hr />
        <Typography style={{ marginBottom: 10 }} component="p">
          {`${data.Address.Address1}, `}
          {data.Address.Address2.length > 0 ? `${data.Address.Address2}, ` : ""}
          {`${data.Address.City}, `}
          {`${data.Address.StateOrProvince}, `}
          {`${data.Address.Country} `}
          {data.Address.PostalCode}
        </Typography>
        <StyledParagraph>Phone</StyledParagraph>
        <hr />
        <Typography style={{ marginBottom: 10 }} component="p">
          {data.Phone}
        </Typography>
        <StyledParagraph>Fax</StyledParagraph>
        <hr />
        <Typography style={{ marginBottom: 10 }} component="p">
          {data.Fax}
        </Typography>
      </CardContent>
    </Card>
  );
}

PayeeCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PayeeCard);
