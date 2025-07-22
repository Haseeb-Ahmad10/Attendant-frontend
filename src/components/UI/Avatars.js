import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {  deepPurple } from '@mui/material/colors';

const LetterAvatars = ({name}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepPurple[300] }}>{name[0].toUpperCase()}</Avatar>
    </Stack>
  );
}

export default LetterAvatars