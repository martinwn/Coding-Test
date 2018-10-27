import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PayeeCard from "./PayeeCard/PayeeCard";
import PaymentCard from "./PaymentCard/PaymentCard";
import RemittanceCard from "./RemittanceCard/RemittanceCard";
import Paper from "@material-ui/core/Paper";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, data } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {data.map(data => {
              return (
                <Tab key={data.Remittance.InvoiceNo} label={data.Payee.Name} />
              );
            })}
          </Tabs>
        </AppBar>

        {data.map((data, index) => {
          return (
            value === index && (
              <TabContainer key={data.Remittance.InvoiceNo}>
                <Grid container spacing={24}>
                  <Grid item md={8} xs={12}>
                    <Paper className={classes.paper}>
                      <PayeeCard data={data.Payee} />
                    </Paper>
                  </Grid>
                  <Grid item md={4} xs={8}>
                    <Paper className={classes.paper}>
                      <PaymentCard data={data.Payment} />
                    </Paper>
                  </Grid>

                  {data.Remittance.map((remittance, index) => {
                    return (
                      <Grid
                        key={remittance.InvoiceNo}
                        item
                        md={4}
                        sm={6}
                        xs={12}
                      >
                        <RemittanceCard data={data.Remittance[index]} />
                      </Grid>
                    );
                  })}
                </Grid>
              </TabContainer>
            )
          );
        })}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
