import { Button, Container } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contecsts';
import './Header.less';

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
    <header className="header">
      <Container>
        <div className="header-content">
          <span className="header-logo">LOGO</span>
          <div>
            {iProductCardPage && (
              <Link className="header-link" to={'/'}>
                Home
              </Link>
            )}
            <Button
              onClick={user ? handleLogOut : handleLogIn}
              variant="outlined"
              size="small">
              {user ? 'Log Out' : 'Log in'}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
