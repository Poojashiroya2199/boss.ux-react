import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'ba-utils/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Markdown from 'react-markdown';
import Grid from '@material-ui/core/Grid';
import codeStyle from 'ba-components/Code.scss';
import { SourceReader, PapperBlock } from '../../components';
import {
  StrippedTable,
  HoverTable,
  CustomTable,
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class CustomTables extends Component {
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
        <PapperBlock title="Stripped Table" desc="They (allegedly) aid usability in reading tabular data by offering the user a coloured means of separating and differentiating rows from one another">
          <div >
            <Markdown className={codeStyle.codePre} source="Simply by ``` import tableStyles from 'ba-components/Table.scss'; ``` then add the classNames ``` tableStyles.stripped ```" />
            <StrippedTable />
            <SourceReader componentName={docSrc + 'StrippedTable.js'} />
          </div>
        </PapperBlock>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Hover Table" desc="Hover tables is addition option that allows you to see what row you selected">
                <div >
                  <Markdown className={codeStyle.codePre} source="Simply by ``` import tableStyles from 'ba-components/Table.scss'; ``` then add the classNames ``` tableStyles.hover ```" />
                  <HoverTable />
                  <SourceReader componentName={docSrc + 'HoverTable.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6} xs={12}>
              <PapperBlock title="CustomTable" desc="Custom tables is addition option that allows you to see what row you selected">
                <div >
                  <Markdown className={codeStyle.codePre} source="Simply by ``` import tableStyles from 'ba-components/Table.scss'; ``` then add the classNames ``` tableStyles.hover ```" />
                  <HoverTable />
                  <SourceReader componentName={docSrc + 'HoverTable.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
        <CustomTable />
        <SourceReader componentName={docSrc + 'HoverTable.js'} />
      </div>
    );
  }
}

CustomTables.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomTables);
