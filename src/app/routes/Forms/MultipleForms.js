import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from './../../components';
import { MultipleForm } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  },
  papper: {
    background: 'linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6))',
  }
});

class MultipleForms extends React.Component {
  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const docSrc = 'routes/Forms/demos/';
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <PapperBlock title="Multiple Forms" desc="">
          <div>
            <MultipleForm />
            <SourceReader componentName={docSrc + 'MultipleForm.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(MultipleForms);
