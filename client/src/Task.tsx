import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { TextField } from '@mui/material';

import PopUp from './Modal';

interface TaskProps {
  id: number;
  task: string;
  status: boolean;
  date: string;
  api: string;
}

const Task: React.FC<TaskProps> = ({ id, task, date, status, api }) => {
  const [value, setValue] = React.useState(task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    fetch(api+'update/'+id, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: value }),
    })
    .then(response => response.json())
    .then(data => {
      if(data?.status) {
        window.location.reload();
      } else {
        if(data.msg) window.alert(data.msg)
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <Card sx={{ margin: '10%', marginTop: 0, marginBottom: 3 }}>
      <div 
      style={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center' 
        }}>
        
        {/* Checkbox for task status */}
        <CardActions
          style={{ 
            justifyContent: 'center', 
            flexDirection: 'column', 
            paddingBottom: 0
          }}
        >
          <Checkbox 
            defaultChecked={status}
            onClick={() => {
              const element = document.getElementById("t-" + id);
              console.log(element?.style.textDecoration);

              if (element) {
                const style = element?.style.textDecoration

                if (style == 'line-through') {
                  element.style.textDecoration = 'none';
                } else {
                  element.style.textDecoration = 'line-through';
                }
              }

              fetch(api+"status/"+id)
                .then(res => res.json())
            }}
          />
        </CardActions>
        
        {/* Text field for task */}
        <CardContent style={{ width: '100%' }}>
          <TextField 
            id={"t-"+id} 
            variant="standard" 
            // defaultValue={task}
            style={{ 
              textDecoration: status ? 'line-through' : 'none',
              width: '100%',
            }}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </CardContent>

        {/* Actions for task */}
        <CardActions
          style={{ justifyContent: 'center', flexDirection: 'column', paddingBottom: 0}}
        >
          {/* Wrap the buttons in a form */}
          <form onSubmit={handleSubmit}>
            <Button 
              type="submit" // Submit the form on button click
              size="small" 
              color="inherit"
            >
              <EditIcon/>
            </Button>
          </form>
          <Button 
            size="small" 
            color='error'
            onClick={() => {
              fetch(api+"delete/"+id)
                .then(res => res.json())
                .then(data => {
                  window.location.reload()
                })
            }}
          >
            <DeleteIcon/>
          </Button>
        </CardActions>
      </div>

      {/* Display task date */}
      <CardActions
        style={{ justifyContent: 'center', color: 'gray', padding: 0}}
      >
        <p>
          {date}
        </p>
      </CardActions>
    </Card>
  );
}

export default Task;
