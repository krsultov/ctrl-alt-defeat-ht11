import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Link from 'next/link';

export default function TopDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, top: open });
    };

  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
          <ListItem key={1} disablePadding>
            <ListItemButton>
                    <Link href="/Transactions">Transactions</Link>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={2} disablePadding>
            <ListItemButton>
            <Link href="/Subscriptions">Subscriptions</Link>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={3} disablePadding>
            <ListItemButton>
                <Link href="/Analytics">Analytics</Link>
            </ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem key={4} disablePadding>
            <ListItemButton>
                <Link href="/BankAccounts">Bank Accounts</Link>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><DensityMediumIcon/></Button>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
}