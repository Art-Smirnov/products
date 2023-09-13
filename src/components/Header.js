import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contecsts';

const Header = () => {
  const { setLogout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const iProductCardPage = location.pathname.includes('products');

  const handleLogOut = () => {
    setLogout();
  };

  const handleLogIn = () => {
    navigate('login');
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography textAlign="center">LOGO</Typography>
          {iProductCardPage && <Link to={'/'}>HOME</Link>}
          <Button
            onClick={user ? handleLogOut : handleLogIn}
            color="secondary"
            variant="outlined">
            {user ? 'Log Out' : 'Log in'}
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
