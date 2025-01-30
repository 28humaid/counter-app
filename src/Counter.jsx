import { useState } from "react"
import { Grid2 } from "@mui/material"

export default function Counter(){

    const [count,setCount] = useState(0)
    const addition = () => setCount(count+1)
    const subtraction = () => setCount(count-1)

    return(
        <Grid2 sx={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'yellowgreen'}}>
        <h1>{count}</h1>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <button onClick={addition} type="button">+</button>
            <div style={{width:'100px'}}></div>
            <button onClick={subtraction} type="button">-</button>
        </div>
        </Grid2>
    )
}