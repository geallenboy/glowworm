import { Done, Face } from '@mui/icons-material';
import { Avatar, Chip, Paper, Stack } from '@mui/material';

import { Label } from '../../Block';

const style = {
  p: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& > *': { m: '8px !important' }
};

export default function ChipFilled() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Stack spacing={3}>
      <div>
        <Label title="Base" />
        <Paper variant="outlined" sx={style}>
          <Chip label="Basic" />
          <Chip label="Disabled" disabled />
          <Chip avatar={<Avatar>B</Avatar>} label="Clickable" onClick={handleClick} />
          <Chip
            avatar={<Avatar alt="Natacha" src="/static/mock-images/avatars/avatar_1.jpg" />}
            label="Deletable"
            onDelete={handleDelete}
          />
          <Chip
            icon={<Face />}
            label="Clickable deletable"
            onClick={handleClick}
            onDelete={handleDelete}
          />
          <Chip
            label="Custom delete icon"
            onClick={handleClick}
            onDelete={handleDelete}
            deleteIcon={<Done />}
          />
          <Chip label="Clickable Link" component="a" href="#chip" clickable />
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="Primary clickable"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<Done />}
          />
          <Chip
            icon={<Face />}
            label="Primary clickable"
            clickable
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<Done />}
          />
          <Chip label="Deletable primary" onDelete={handleDelete} color="primary" />
        </Paper>
      </div>

      <div>
        <Label title="Colors" />
        <Paper variant="outlined" sx={style}>
          <Chip
            label="Default deletable"
            avatar={<Avatar alt="Natacha" src="/static/mock-images/avatars/avatar_1.jpg" />}
            onDelete={handleDelete}
            deleteIcon={<Done />}
          />

          <Chip
            clickable
            label="Default clickable"
            avatar={<Avatar alt="Natacha" src="/static/mock-images/avatars/avatar_1.jpg" />}
            onDelete={handleDelete}
            deleteIcon={<Done />}
          />

          <Chip
            label="Primary deletable"
            avatar={<Avatar alt="Natacha" src="/static/mock-images/avatars/avatar_1.jpg" />}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<Done />}
          />

          <Chip
            clickable
            label="Primary clickable"
            avatar={<Avatar alt="Natacha" src="/static/mock-images/avatars/avatar_1.jpg" />}
            color="primary"
            onDelete={handleDelete}
            deleteIcon={<Done />}
          />

          <Chip
            icon={<Face />}
            label="Secondary deletable"
            onDelete={handleDelete}
            color="secondary"
            deleteIcon={<Done />}
          />

          <Chip
            clickable
            icon={<Face />}
            label="Secondary clickable"
            onDelete={handleDelete}
            color="secondary"
            deleteIcon={<Done />}
          />

          <Chip
            icon={<Face />}
            label="Info deletable"
            onDelete={handleDelete}
            color="info"
            deleteIcon={<Done />}
          />

          <Chip
            clickable
            icon={<Face />}
            label="Info clickable"
            onDelete={handleDelete}
            color="info"
            deleteIcon={<Done />}
          />

          <Chip icon={<Face />} label="Success deletable" onDelete={handleDelete} color="success" />
          <Chip
            clickable
            icon={<Face />}
            label="Success clickable"
            onDelete={handleDelete}
            color="success"
          />
          <Chip icon={<Face />} label="Warning deletable" onDelete={handleDelete} color="warning" />
          <Chip
            clickable
            icon={<Face />}
            label="Warning clickable"
            onDelete={handleDelete}
            color="warning"
          />
          <Chip icon={<Face />} label="Error deletable" onDelete={handleDelete} color="error" />
          <Chip
            clickable
            icon={<Face />}
            label="Error clickable"
            onDelete={handleDelete}
            color="error"
          />
        </Paper>
      </div>

      <div>
        <Label title="Size" />
        <Paper variant="outlined" sx={style}>
          <Chip avatar={<Avatar>M</Avatar>} label="Normal" onDelete={handleDelete} color="info" />
          <Chip
            size="small"
            avatar={<Avatar>M</Avatar>}
            label="Small"
            onDelete={handleDelete}
            color="info"
          />
        </Paper>
      </div>
    </Stack>
  );
}
