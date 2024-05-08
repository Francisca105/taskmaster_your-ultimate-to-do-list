import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';

function Header() {

return (
    <AppBar position="static" sx={{ backgroundColor: "#000000", color: "white" }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#header"
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 750,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Taskmaster
                    </Typography>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
);
}
export default Header;