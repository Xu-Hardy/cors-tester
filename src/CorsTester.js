import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, MenuItem, Box, Typography } from '@mui/material';

const CorsTester = () => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [headers, setHeaders] = useState('');
  const [body, setBody] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const handleHeadersChange = (event) => {
    setHeaders(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleRequest = async () => {
    try {
      const parsedHeaders = headers ? JSON.parse(headers) : {};
      const parsedBody = body ? JSON.parse(body) : null;
      
      const response = await axios({
        url: url,
        method: method,
        headers: parsedHeaders,
        data: parsedBody,
      });
      console.log('Response:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: '0 auto', marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        CORS Tester
      </Typography>
      <TextField
        fullWidth
        label="URL"
        value={url}
        onChange={handleUrlChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        select
        fullWidth
        label="Method"
        value={method}
        onChange={handleMethodChange}
        margin="normal"
        variant="outlined"
      >
        <MenuItem value="GET">GET</MenuItem>
        <MenuItem value="POST">POST</MenuItem>
        <MenuItem value="PUT">PUT</MenuItem>
        <MenuItem value="DELETE">DELETE</MenuItem>
        <MenuItem value="PATCH">PATCH</MenuItem>
      </TextField>
      <TextField
        fullWidth
        label="Headers (JSON)"
        value={headers}
        onChange={handleHeadersChange}
        margin="normal"
        variant="outlined"
        multiline
        minRows={4}
        helperText="Please enter valid JSON string for headers"
      />
      <TextField
        fullWidth
        label="Request Body (JSON)"
        value={body}
        onChange={handleBodyChange}
        margin="normal"
        variant="outlined"
        multiline
        minRows={4}
        helperText="Please enter a valid JSON string for body"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleRequest}
        sx={{ marginTop: 2 }}
      >
        Send Request
      </Button>
    </Box>
  );
};

export default CorsTester;
