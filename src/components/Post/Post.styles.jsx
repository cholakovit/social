import {
  styled, Card, Typography, Box, CardActions,
} from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SvgIcon from '@mui/material/SvgIcon';

export function ArrowIcon() {
  return (
    <SvgIcon width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.2412 0.575706L20.846 8.03323C21.1911 8.33229 21.1911 8.86771 20.846 9.16677L12.2412 16.6243C11.7555 17.0452 11
            16.7002 11 16.0575V12.15C11 11.7358 10.6638 11.399 10.2496 11.4078C4.39732 11.5334 2.98456 13.1506 1.733 15.1185C1.34622
            15.7267 0.540724 15.4703 0.624151 14.7543C1.15924 10.1626 3.55254 6.09601 10.2497 5.81543C10.6636 5.79809 11 5.46421 11
            5.05V1.14247C11 0.499778 11.7555 0.154786 12.2412 0.575706Z"
        fill="#65676B"
      />
    </SvgIcon>
  );
}

export const StyledPost = styled(Card)({
  margin: '20px 0 20px 0',
});

export const TimePost = styled(Typography)({
  color: '#65676B',
});

export const CardTypography = styled(Typography)({
  color: '#212529',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '22px',
});

export const OrangeLikeCountContainer = styled(Box)({
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
});

export const OrangeLike = styled(ThumbUpOutlinedIcon)({
  backgroundColor: '#FD7500',
  borderRadius: '15px',
  color: '#fff',
  fontSize: '13px',
  padding: '7px',
  margin: '10px',
});

export const CountLikes = styled(Typography)({
  color: '#65676B',
  width: '30px',
  margin: '13px 0 20px 5px',
});

export const StyledCardActions = styled(CardActions)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledCardActionsButton = styled(Box)({
  '&:hover span, &:hover button, &:hover svg': {
    color: '#FD7500',
    fill: '#FD7500',
    filter: 'invert(59%) sepia(89%) saturate(4230%) hue-rotate(3deg) brightness(104%) contrast(104%)',
  },
});

export const StyledCardActionsButtonDisabled = styled(Box)({
  '&:hover span, &:hover button, &:hover svg': {
    color: '#3e3e3e',
    fill: '#3e3e3e',
    filter: 'invert(23%) sepia(0%) saturate(3589%) hue-rotate(210deg) brightness(88%) contrast(86%)',
    cursor: 'not-allowed',
  },
});

export const CardActionLabels = styled(Typography)({
  fontStyle: 'normal',
  fontWeight: '500',
  fontSize: '15px',
  lineHeight: '21px',
  color: '#65676B',
  cursor: 'pointer',
});
