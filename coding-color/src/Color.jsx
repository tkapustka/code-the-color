
import { useState, useEffect } from 'react'
import axios from 'axios'


const Color = (props) => {
    const [color, colorHex] = useState("")

    useEffect(()=>{
        const colorHex = async () => {
        const res = await axios.get("https://x-colors.herokuapp.com/api/random")
        colorHex(res.data.results)
    
        }
        console.log(colorHex)
  }, [props])
}

export default Color