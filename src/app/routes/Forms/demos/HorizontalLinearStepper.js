import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Type from 'ba-components/Typography.scss';
import FormInit1 from './AccountSetup';
import FormInit2 from './SocialProfiles';
import FormInit3 from './PersonalDetail';

const styles = theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  form: {
    marginTop: '15px',
  }
});

function getSteps() {
  return ['Account Setup', 'Social Profiles', 'Personal Details'];
}

class HorizontalLinear extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    activeStep: 0,
    altLabel: true,
    skipped: new Set(),
    valueForm: { form1: [], form2: [], form3: [] },
  };

  isStepOptional = step => (step === 1);

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  handleNext = () => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    const skipped = new Set(this.state.skipped.values());
    skipped.add(activeStep);
    this.setState({
      activeStep: this.state.activeStep + 1,
      skipped,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  showResult(values) {
    setTimeout(() => {
      this.setState(prevState => ({
        valueForm: { ...prevState.valueForm.form1 }
      }));
      console.log(this.state.valueForm);
    }, 500); // simulate server latency
    console.log(values);
  }
  showResultForm2(values) {
    setTimeout(() => {
      this.setState(prevState => ({
        valueForm: { ...prevState.valueForm.form2 }
      }));
      console.log(this.state.valueForm);
    }, 500); // simulate server latency
    console.log(values);
  }
  showResultForm3(values) {
    setTimeout(() => {
      this.setState(prevState => ({
        valueForm: { ...prevState.valueForm.form3 }
      }));
    }, 500); // simulate server latency
    console.log(values, this.state.valueForm);
  }
  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep, altLabel } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel={altLabel}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography className={Type.textCenter} variant="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className={classes.form}>
          {activeStep === 0 && (
            <div>
              <FormInit1 onSubmit={(values) => this.showResult(values)} >
                <div>
                  {activeStep === steps.length ? (
                    <div>
                      <Typography className={classes.instructions}>
                        All steps completed - you&quot;re finished
                      </Typography>
                      <Button onClick={this.handleReset} className={classes.button}>
                        Reset
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        {this.isStepOptional(activeStep) && (
                          <Button
                            variant="raised"
                            color="primary"
                            onClick={this.handleSkip}
                            className={classes.button}
                          >
                            Skip
                          </Button>
                        )}
                        <Button
                          variant="raised"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </FormInit1>
            </div>
          )}
          {activeStep === 1 && (
            <div>
              <FormInit2 onSubmit={(values) => this.showResultForm2(values)} >
                <div>
                  {activeStep === steps.length ? (
                    <div>
                      <Typography className={classes.instructions}>
                        All steps completed - you&quot;re finished
                      </Typography>
                      <Button onClick={this.handleReset} className={classes.button}>
                        Reset
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        {this.isStepOptional(activeStep) && (
                          <Button
                            variant="raised"
                            color="primary"
                            onClick={this.handleSkip}
                            className={classes.button}
                          >
                            Skip
                          </Button>
                        )}
                        <Button
                          variant="raised"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </FormInit2>
            </div>
          )}
          {activeStep === 2 && (
            <div>
              <FormInit3 onSubmit={(values) => this.showResultForm3(values)} >
                <div>
                  {activeStep === steps.length ? (
                    <div>
                      <Typography className={classes.instructions}>
                        All steps completed - you&quot;re finished
                      </Typography>
                      <Button onClick={this.handleReset} className={classes.button}>
                        Reset
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div>
                        <Button
                          disabled={activeStep === 0}
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                        {this.isStepOptional(activeStep) && (
                          <Button
                            variant="raised"
                            color="primary"
                            onClick={this.handleSkip}
                            className={classes.button}
                          >
                            Skip
                          </Button>
                        )}
                        <Button
                          variant="raised"
                          color="primary"
                          onClick={this.handleNext}
                          className={classes.button}
                        >
                          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </FormInit3>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HorizontalLinear);
