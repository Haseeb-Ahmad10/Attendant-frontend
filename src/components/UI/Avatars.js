import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {  deepPurple } from '@mui/material/colors';

const LetterAvatars = ({name}) => {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar> */}
      <Avatar sx={{ bgcolor: deepPurple[500] }}>{name[0].toUpperCase()}</Avatar>
    </Stack>
  );
}

export default LetterAvatars