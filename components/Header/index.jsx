import HeaderContainer from './style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return ( 
    <HeaderContainer>
      <MenuIcon />
      <h1>Oi, Matheus</h1>
      <AccountCircleIcon />
    </HeaderContainer>
   );
}
 
export default Header;