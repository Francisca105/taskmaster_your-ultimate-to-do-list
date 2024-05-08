import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Footer() {
    return (
        <footer id="footer-2-cols" style={{
            backgroundColor: '#000000',
            color: '#495057',
            boxShadow: '0 0 10px 0 rgba(0,0,0,.1)',
            padding: '25px 0',
        }}>
            <Container maxWidth="xl">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* First Column */}
                    <div style={{ flex: 1 }}>
                        <img src="/banner.png" alt="Logo" />
                        {/* Add more links if needed */}
                    </div>
                    {/* Second Column */}
                    <div style={{ flex: 1 }}>
                        <Typography variant="h4" color="#ffffff"  gutterBottom>
                            Links
                        </Typography><br/>

                        <Link 
                            color="#ffffff" 
                            href="https://github.com/Francisca105/taskmaster_your-ultimate-to-do-list">

                            Github

                        </Link><br/><br/>
                        <Link color="#ffffff" href="linkedin.com/in/francisca-105-almeida/">
                            Linkedin
                        </Link><br/><br/>
                        <Link color="#ffffff" href="mailto:francisca.vicente.de.almeida@tecnico.ulisboa.pt">
                            Email
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
