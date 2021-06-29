import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Markdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import codeStyle from 'ba-components/Code.scss';
import { SourceReader, PapperBlock } from './../../components';
import { Table } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Tables extends Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'routes/Tables/demos/';
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
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Hover Table" desc="Hover tables is addition option that allows you to see what row you selected">
                <div >
                  <Markdown className={codeStyle.codePre} source="Simply by ``` import tableStyles from 'ba-components/Table.scss'; ``` then add the classNames ``` tableStyles.hover ```" />
                  <Table />
                  <SourceReader componentName={docSrc + 'HoverTable.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Tables.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tables);
