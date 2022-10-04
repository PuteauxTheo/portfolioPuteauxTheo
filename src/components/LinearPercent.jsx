import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function LinearPercent(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%'}}>
      <Box sx={{ width: '100%', mr: 1, ml: 3}}>
        <LinearProgress variant="determinate" {...props} sx={{borderRadius:1,height:15, backgroundColor: `rgb(17,45,75,0.4)`, "& .MuiLinearProgress-bar": {backgroundColor: `#112D4E`}}}/>
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
            {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearPercent.propTypes = {
  value: PropTypes.number.isRequired,
};

