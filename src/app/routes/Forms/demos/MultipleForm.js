import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
// import { Link } from 'react-router-dom';
import HorizontalLinear from './HorizontalLinearStepper';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class MultipleForm extends PureComponent {
  render() {
    const { classes } = this.props;
    // const MyLink = props => <Link to="/app/forms/multiple-forms" {...props} />;
    return (
      <Fragment>
        <div>
          <HorizontalLinear />
        </div>
      </Fragment>
    );
  }
}

MultipleForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultipleForm);
