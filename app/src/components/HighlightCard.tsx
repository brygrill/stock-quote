import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const HighlightCardWrapper = ({ title }: { title: string }) => {
  return (
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(HighlightCardWrapper);
