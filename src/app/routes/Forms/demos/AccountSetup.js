import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Field, reduxForm } from 'redux-form/immutable';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { TextField } from 'redux-form-material-ui';
import { initAction, clearAction } from '../../../actions/ReduxFormActions';

// validation functions
const required = value => (value == null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);
const password = value => (
  value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value)
    ? 'Invalid password'
    : undefined
);

const confirmpassword = value => (
  value && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value)
    ? 'Invalid confirm password'
    : undefined
);

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 30
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  heading: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 0',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
});

class AccountSetup extends Component {
  render() {
    const {
      classes,
      handleSubmit,
    //   pristine,
    //   reset,
      submitting,
      children,
    } = this.props;
    return (
      <div>
        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={8} md={5}>
            <Paper className={classes.root}>
              <header className={classes.heading}>
                <Typography variant="headline" component="h3">
                  CREATE YOUR ACCOUNT
                </Typography>
                <Typography component="p">
                  This is step 1
                </Typography>
              </header>
              <form onSubmit={handleSubmit} className={classes.form}>
                <div>
                  <Field
                    name="email"
                    component={TextField}
                    placeholder="Email"
                    label="Email"
                    validate={[required, email]}
                    required
                    ref={this.saveRef}
                    withRef
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="password"
                    component={TextField}
                    placeholder="Password"
                    label="Password"
                    required
                    type="password"
                    validate={[required, password]}
                    className={classes.field}
                  />
                </div>
                <div className={classes.fieldBasic}>
                  <Field
                    name="confirmpassword"
                    component={TextField}
                    placeholder="Confirm Password"
                    label="Confirm Password"
                    required
                    type="password"
                    validate={[required, confirmpassword]}
                    className={classes.field}
                  />
                </div>
                <div className={classes.buttons}>
                  <span>{children}</span>
                  <Button variant="raised" color="secondary" type="submit" disabled={submitting}>
                    Submit
                  </Button>
                  {/* <Button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}
                  >
                    Reset
                  </Button> */}
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AccountSetup.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const AccountSetupMapped = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(AccountSetup);

const reducer = 'initval';
const FormInit1 = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(AccountSetupMapped);

export default withStyles(styles)(FormInit1);
