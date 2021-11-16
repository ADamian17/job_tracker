import { Link, useRouteMatch, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/user/user.actions';

import { Tertiary } from '../../UI/Heading';
import StatusList from '../../StatusList';
import LogoutIcon from '../../UI/Icons/LogoutIcon/indx';

import './AsideFooter.scss';

const AsideFooter = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  }

  return (
    <section className="aside__footer">

      <StatusList />

      <div className="aside__footer__item">
        <Tertiary text="Profile" />

        <Link to={`${path}/profile`}>
          <span>View</span>
        </Link>
      </div>

      <div className="aside__footer__item">
        <Tertiary text="Logout" />
        <LogoutIcon onClick={handleLogout} />
      </div>
    </section>
  )
}

export default AsideFooter;
