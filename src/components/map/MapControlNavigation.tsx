import { NavigationControl } from 'react-map-gl'
import { NavigationControlProps } from 'react-map-gl/src/components/navigation-control'
// @mui
import { styled } from '@mui/material/styles'

const NavigationControlStyle = styled(NavigationControl)(({ theme }) => ({
  zIndex: 99,
  borderRadius: 8,
  overflow: 'hidden',
  bottom: theme.spacing(6),
  left: theme.spacing(1.5),
  boxShadow: theme.customShadows.z8,
  '& button+button': {
    borderTop: `1px solid ${theme.palette.divider}`
  }
}))

export default function MapControlNavigation({
  ...other
}: NavigationControlProps) {
  return <NavigationControlStyle {...other} />
}
