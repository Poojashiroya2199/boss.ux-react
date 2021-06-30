import React, { Component } from 'react';
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

class PersonalDetail extends Component {
  render() {
    const {
      classes,
      handleSubmit,
      // reset,
      children
    } = this.props;
    return (
      <div>
        <Grid container spacing={24} alignItems="flex-start" direction="row" justify="center">
          <Grid item xs={8} md={5}>
            <Paper className={classes.root}>
              <header className={classes.heading}>
                <Typography variant="headline" component="h3">
                  PERSONAL DETAILS
                </Typography>
                <Typography component="p">
                  We will never sell it
                </Typography>
              </header>
              <form onSubmit={handleSubmit} className={classes.form}>
                <div>
                  <Field
                    name="firstname"
                    component={TextField}
                    placeholder="First Name"
                    label="First Name"
                    validate={[required]}
                    required
                    ref={this.saveRef}
                    withRef
                    className={classes.field}
                  />
                </div>
                <div>
                  <Field
                    name="lastname"
                    component={TextField}
                    placeholder="Last Name"
                    label="Last Name"
                    required
                    validate={[required]}
                    className={classes.field}
                  />
                </div>
                <div className={classes.fieldBasic}>
                  <Field
                    name="phonenumber"
                    component={TextField}
                    placeholder="Phone No."
                    label="Phone No."
                    required
                    validate={[required]}
                    className={classes.field}
                  />
                </div>
                <div className={classes.buttons}>
                  {/* <Button variant="raised" color="secondary" >
                    Previous
                  </Button> */}
                  <span>{children}</span>
                  <Button
                    variant="raised"
                    color="secondary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

PersonalDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  init: bindActionCreators(initAction, dispatch),
  clear: () => dispatch(clearAction),
});

const PersonalDetailMapped = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(PersonalDetail);

const reducer = 'initval';
const FormInit2 = connect(
  state => ({
    force: state,
    initialValues: state.getIn([reducer, 'formValues'])
  }),
  mapDispatchToProps,
)(PersonalDetailMapped);

export default withStyles(styles)(FormInit2);
