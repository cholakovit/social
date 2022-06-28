import { Divider, Typography } from "@mui/material"
import { SideBarBox, SideBarCard, SideBarCardHeader, StyledEditIcon, SideBarAvatar, TitleSideBarTypo, 
  SubTitleSideBarTypo, SideBarStyledCardActions, SideBarStats, SeeMore, SideBarVerticalDivider } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserById, getUserById } from "../blog/usersSlice"
import { useEffect } from "react"

const Sidebar = () => {
  const dispatch = useDispatch()
  let userId = 1
  useEffect(() => {
    
    dispatch(selectUserById(Number(1)))
  }, [])

  const user = useSelector(getUserById)

  return (
    <SideBarBox>
      <SideBarCard>
        <SideBarCardHeader
          action={<SeeMore href={`user/${user?.id}`}><StyledEditIcon /></SeeMore>}
          avatar={<SideBarAvatar src={`/img/${user?.pic}`} />}
          title={<TitleSideBarTypo variant="h5">{user?.name}</TitleSideBarTypo>}
          subheader={<SubTitleSideBarTypo variant="h6">{user?.position}</SubTitleSideBarTypo>}
        />
        <Divider />
        <SideBarStyledCardActions>
            <SideBarStats component='div'>
              <Typography component='div'>{user?.reactions?.likes}</Typography>
              <Typography component='div'>Likes</Typography>
            </SideBarStats>
            <SideBarVerticalDivider orientation="vertical" flexItem />
            <SideBarStats component='div'>
              <Typography component='div'>{user?.reactions?.posts}</Typography>
              <Typography component='div'>Posts</Typography>
            </SideBarStats>
        </SideBarStyledCardActions>
      </SideBarCard>
    </SideBarBox>
  )
}

export default Sidebar