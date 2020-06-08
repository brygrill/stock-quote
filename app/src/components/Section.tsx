import React, { ReactElement } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { breakpoint } from '../config';

const useStyles = makeStyles(() =>
  createStyles({
    sectionDesktop: {
      padding: '1rem',
    },
    section: {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
    },
  }),
);

const SectionWrapper = ({ children }: { children: ReactElement }) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery(breakpoint);
  return (
    <section className={isDesktop ? classes.sectionDesktop : classes.section}>
      {children}
    </section>
  );
};

export default React.memo(SectionWrapper);
