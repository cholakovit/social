import { Divider, Typography } from "@mui/material"
import { SideBarBox, SideBarCard, SideBarCardHeader, StyledEditIcon, SideBarAvatar, TitleSideBarTypo, 
  SubTitleSideBarTypo, SideBarStyledCardActions, SideBarStats, SeeMore, SideBarVerticalDivider } from './styles'

let id = 1

const Sidebar = () => {
  return (
    <SideBarBox>
      <SideBarCard>
        <SideBarCardHeader
          action={<SeeMore href={`user/${id}`}><StyledEditIcon /></SeeMore>}
          avatar={<SideBarAvatar src="/img/Ivaylo_Bachvarov_1.jpg" />}
          title={<TitleSideBarTypo variant="h5">Daniel Goshev</TitleSideBarTypo>}
          subheader={<SubTitleSideBarTypo variant="h6">Co-founder, HackSoft</SubTitleSideBarTypo>}
        />
        <Divider />
        <SideBarStyledCardActions>
            <SideBarStats component='div'>
              <Typography component='div'>210</Typography>
              <Typography component='div'>Likes</Typography>
            </SideBarStats>
            <SideBarVerticalDivider orientation="vertical" flexItem />
            <SideBarStats component='div'>
              <Typography component='div'>4</Typography>
              <Typography component='div'>Posts</Typography>
            </SideBarStats>
        </SideBarStyledCardActions>
      </SideBarCard>
    </SideBarBox>
  )
}

export default Sidebar