import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authenticatorAction } from '../Redux/Store/authStore';

const Auth = () => {
  // const authenticated = useSelector(
  //   (state) => state.authenticatorSlice.isAuthenticated
  // );

  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    console.log('Btn Click');
    dispatch(authenticatorAction.login());
  };

  return (
    <main className={classes.auth} onSubmit={loginHandler}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
