import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Box } from '@mui/material';

const MarkdownRenderer = ({ markdownText }) => {
  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        color: '#333',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: 1.6,
      }}
    >
      <ReactMarkdown>
        {markdownText}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;
