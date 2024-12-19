import { Box } from "@mui/material"
import Navbar from  '../components/Navbar'
import Gold from '../components/Gold'
import Hero from '../components/Hero'

const KipuGoldLayout = ({children}) => {
  return (
    <Box>
      {/* NAVBAR */}
        <Navbar/>
        <Hero/>
        <Gold/>

      {children}
      {/* FOOTER */}
    </Box>
  )
}

export default KipuGoldLayout