import { useSelector, useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { authenticatorAction } from '../Redux/Store/authStore';

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => {
    return state.authenticatorSlice.isAuthenticated;
  });

  const logOutHandler = () => {
    dispatch(authenticatorAction.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
