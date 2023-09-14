import { memo } from 'react';
import { Button, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contecsts';
import PropTypes from 'prop-types';
import './Header.less';

const Header = ({ isProductCard }) => {
  const { setLogout, user } = useAuth();
  const navigate = useNavigate();

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
            {isProductCard && (
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

Header.propTypes = {
  isProductCard: PropTypes.bool
};

export default memo(Header);
