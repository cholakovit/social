/* eslint-disable import/named */
// MUI Components
import { Divider, Typography } from '@mui/material';

// Styles
import { useSelector } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import {
  SideBarBox,
  SideBarCard,
  SideBarCardHeader,
  StyledEditIcon,
  SideBarAvatar,
  TitleSideBarTypo,
  SubTitleSideBarTypo,
  SideBarStyledCardActions,
  SideBarStats,
  SideBarVerticalDivider,
} from './Sidebar.styles';
import { SeeMore } from '../../assets/styles/main.styles';

// Redux
import { selectUserById, getUserById } from '../../store/usersSlice';

import AlertBox from '../Alert/AlertBox';

// Custom Hooks
import { useEffectFetchById } from '../../hooks/hooks';

// Constants
import * as Constants from '../../constants';

function Sidebar() {
  useEffectFetchById(selectUserById, Number(1));

  const user = useSelector(getUserById);

  return (
    <SideBarBox>
      <SideBarCard>
        {' '}
        <ErrorBoundary
          FallbackComponent={() => (
            <AlertBox
              alert={Constants.USER_PROBLEM_MSG}
              type="error"
            />
          )}
        >
          <SideBarCardHeader
            action={(
              <SeeMore href={`user/${user?.id}`}>
                <StyledEditIcon />
              </SeeMore>
            )}
            avatar={(
              <SideBarAvatar
                src={`${import.meta.env.VITE_SOCIAL_LOCAL}/src/assets/img/${
                  user?.pic
                }`}
              />
            )}
            title={
              <TitleSideBarTypo variant="h5">{user?.name}</TitleSideBarTypo>
            }
            subheader={(
              <SubTitleSideBarTypo variant="h6">
                {user?.position}
              </SubTitleSideBarTypo>
            )}
          />
          <Divider />
          <SideBarStyledCardActions>
            <SideBarStats component="div">
              <Typography component="div">{user?.reactions?.likes}</Typography>
              <Typography component="div">{Constants.LIKES}</Typography>
            </SideBarStats>
            <SideBarVerticalDivider orientation="vertical" flexItem />
            <SideBarStats component="div">
              <Typography component="div">{user?.reactions?.posts}</Typography>
              <Typography component="div">{Constants.POSTS}</Typography>
            </SideBarStats>
          </SideBarStyledCardActions>
        </ErrorBoundary>
      </SideBarCard>
    </SideBarBox>
  );
}

export default Sidebar;
