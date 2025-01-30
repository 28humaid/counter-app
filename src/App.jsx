import Counter from './Counter.jsx'
import ButtonAppBar from './assets/Appbar.jsx'
import Grid from '@mui/material/Grid2';
export default function App(){
  return(
    <>
    <Grid style={{display:'flex' ,flexDirection:'column', paddingTop: '64px'}}>
      <ButtonAppBar/>
      <Counter />
    </Grid>
    </>
  )
}