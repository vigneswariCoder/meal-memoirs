import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useScrollTrigger,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: trigger ? 'background.paper' : 'transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: 0 }}>
          <Button
            sx={{
              fontSize: '1.5rem',
              fontFamily: theme.typography.h1.fontFamily,
              fontWeight: 700,
              px: 0,
              mx: 0,
              color: trigger ? theme.palette.primary.main : theme.palette.primary.light,
            }}

          >
            Meal Memoirs
          </Button>

          {isMobile ? (
            <>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <Menu />
              </IconButton>
              <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                  '& .MuiDrawer-paper': {
                    width: 240,
                    bgcolor: 'background.paper',
                  },
                }}
              >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={handleDrawerToggle}>
                    <X />
                  </IconButton>
                </Box>
                <List>
                  {navItems.map((item) => (
                    <ListItem key={item.label} component="a" href={item.href}>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                  <ListItem>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Reserve Table
                    </Button>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{
                    py: 1,
                    borderRadius: 30,
                    color: trigger ? theme.palette.primary.main : theme.palette.primary.light,
                    fontWeight: 500,
                    '&:hover': {
                      bgcolor: 'transparent',
                      border: '1px solid #2D6A4F',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
              >
                Reserve Table
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar >
  );
};

export default Navbar;