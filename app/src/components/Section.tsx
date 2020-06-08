import React, {ReactElement} from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    section: {
      margin: '1rem'
    },
  }),
);

const SectionWrapper = ({ children }: { children: ReactElement }) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      {children}
    </section>
  );
};

export default React.memo(SectionWrapper);