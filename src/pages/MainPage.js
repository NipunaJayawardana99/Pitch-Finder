import react from 'react'
import {Button} from "@material-ui/core";
// import MicImg from "public/Images/MicImg.svg"

function MainPage() {
    return (
        <div style={{width:"100%"}}>
            <div style={{alignItems:"center",marginTop:"50px"}}>
                <label style={{fontSize:"40px",textShadow: "1px 1px 2px black",marginLeft:"600px"}}>PiTcH FiNdEr</label>
            </div>
            <div style={{height:"200px"}}>
                <div >
                    <Button style={{left:"500px",top:"123px"}} variant="contained" color="secondary">
                        Start
                    </Button>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"center" ,alignItems:"center",marginBottom:"50px"}}>
                <div style={{width:"80%",height:"500px",backgroundColor:"#6BFFDC",borderRadius:20,}}>

                </div>
            </div>


        </div>
    )
}
export default MainPage;
