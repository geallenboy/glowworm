import {
  BeachAccess,
  Bluetooth,
  Comment,
  Drafts,
  ExpandLess,
  ExpandMore,
  Image,
  Inbox,
  Send,
  StarBorder,
  Wifi,
  Work
} from '@mui/icons-material';
import {
  Avatar,
  Box,
  Checkbox,
  Collapse,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Paper,
  Switch
} from '@mui/material';
import { styled } from '@mui/styles';
import { useState } from 'react';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { PATH_PAGE } from '@/routes/paths';

import { Block } from '../Block';

const RootStyle = styled(Page)(({ theme }: any) => ({
  paddingTop: theme.spacing(11),
  paddingBottom: theme.spacing(15)
}));

const ListWrapperStyle = styled(Paper)(({ theme }: any) => ({
  width: '100%',
  border: `solid 1px ${theme.palette.divider}`
}));

function ListItemLink(props: any) {
  return <ListItemButton component="a" {...props} />;
}

export default function ListsComponent() {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [checked, setChecked] = useState<number[]>([0]);
  const [toggle, setToggle] = useState(['wifi']);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event: any, index: any) => {
    setSelectedIndex(index);
  };

  const handleCheck = (value: any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleToggle = (value: any) => () => {
    const currentIndex = toggle.indexOf(value);
    const newChecked = [...toggle];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setToggle(newChecked);
  };

  return (
    <RootStyle title="Components: Lists | Minimal-UI">
      <Box
        sx={{
          pt: 6,
          pb: 1,
          mb: 10,
          bgcolor: (theme: any) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800')
        }}
      >
        <Container maxWidth="lg">
          <HeaderBreadcrumbs
            heading="Lists"
            links={[{ name: 'Components', href: PATH_PAGE.components }, { name: 'Lists' }]}
            moreLink="https://next.material-ui.com/components/lists"
          />
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Block title="Simple">
              <ListWrapperStyle>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton>
                    <ListItem>
                      <Inbox />
                    </ListItem>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItem>
                      <Drafts />
                    </ListItem>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </List>

                <Divider />

                <List component="nav" aria-label="secondary mailbox folders">
                  <ListItemButton>
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                  <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                  </ListItemLink>
                </List>
              </ListWrapperStyle>
            </Block>
          </Grid>

          <Grid item xs={12} md={6}>
            <Block title="Nested">
              <ListWrapperStyle>
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                      Nested List Items
                    </ListSubheader>
                  }
                >
                  <ListItemButton>
                    <ListItem>
                      <Send />
                    </ListItem>
                    <ListItemText primary="Sent mail" />
                  </ListItemButton>
                  <ListItemButton>
                    <ListItem>
                      <Drafts />
                    </ListItem>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                  <ListItemButton onClick={handleClick}>
                    <ListItem>
                      <Inbox />
                    </ListItem>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButton>
                        <ListItem>
                          <StarBorder />
                        </ListItem>
                        <ListItemText primary="Starred" />
                      </ListItemButton>
                    </List>
                  </Collapse>
                </List>
              </ListWrapperStyle>
            </Block>
          </Grid>

          <Grid item xs={12} md={6}>
            <Block title="Folder">
              <ListWrapperStyle>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Image />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Work />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                  </ListItem>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <BeachAccess />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                  </ListItem>
                </List>
              </ListWrapperStyle>
            </Block>
          </Grid>

          <Grid item xs={12} md={6}>
            <Block title="Selected">
              <ListWrapperStyle>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event: any) => handleListItemClick(event, 0)}
                  >
                    <ListItem>
                      <Inbox />
                    </ListItem>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event: any) => handleListItemClick(event, 1)}
                  >
                    <ListItem>
                      <Drafts />
                    </ListItem>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </List>

                <Divider />

                <List component="nav" aria-label="secondary mailbox folder">
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event: any) => handleListItemClick(event, 2)}
                  >
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event: any) => handleListItemClick(event, 3)}
                  >
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </List>
              </ListWrapperStyle>
            </Block>
          </Grid>

          <Grid item xs={12} md={6}>
            <Block title="Controls">
              <ListWrapperStyle>
                <List>
                  {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                      <ListItemButton
                        key={value}
                        role={undefined}
                        dense
                        onClick={handleCheck(value)}
                      >
                        <ListItem>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItem>
                        <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                        <ListItemSecondaryAction>
                          <IconButton edge="end">
                            <Comment />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                    );
                  })}
                </List>
              </ListWrapperStyle>
            </Block>
          </Grid>

          <Grid item xs={12} md={6}>
            <Block title="Switch">
              <ListWrapperStyle>
                <List subheader={<ListSubheader>Settings</ListSubheader>}>
                  <ListItem>
                    <ListItem>
                      <Wifi />
                    </ListItem>
                    <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={toggle.indexOf('wifi') !== -1}
                        inputProps={{
                          'aria-labelledby': 'switch-list-label-wifi'
                        }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItem>
                      <Bluetooth />
                    </ListItem>
                    <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                    <ListItemSecondaryAction>
                      <Switch
                        edge="end"
                        onChange={handleToggle('bluetooth')}
                        checked={toggle.indexOf('bluetooth') !== -1}
                        inputProps={{
                          'aria-labelledby': 'switch-list-label-bluetooth'
                        }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </ListWrapperStyle>
            </Block>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
