import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import PopUp from './Modal';

interface AddProps {
  api: string;
}

const Add: React.FC<AddProps> = ({ api }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Avoids the default form behavior to reload the page

    fetch(api+'create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: value }),
    })
    .then(response => response.json())
    .then(data => {
      if(data?.status) { // If the task is created successfully, reload the page
        window.location.reload();
      } else { // If there is an error, show a pop-up
        if(data.msg) window.alert(data.msg)
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>

        {/* Input for the task */}
        <TextField
          hiddenLabel
          id="create-task"
          variant="filled"
          size="small"
          style={{
            width: '60%',
          }}
          InputProps={{
            style: {
              backgroundColor: 'white'
            }   
          }}
          value={value}
          onChange={e => setValue(e.target.value)}
        />

        {/* Button to add the task */}
        <Button 
          variant="contained"
          style={{
            marginLeft: '10px',
            height: '70%',
            padding: '8px',
          }}
          type="submit"
        >
          <AddIcon/>
        </Button>
      </form>
    </Box>
  );
}

export default Add;
