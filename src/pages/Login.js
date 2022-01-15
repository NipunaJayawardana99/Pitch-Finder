import react, {useEffect, useState} from 'react'
import {Button} from "@material-ui/core";
// import MicImg from "public/Images/MicImg.svg"


function Loging() {


    const [val, setVal] = useState();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(
            `http://127.0.0.1:5000/users`,
            {
                method: "GET",
                headers: new Headers({
                    email:"nipun@gamil.com",
                    password:"12345"
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                setVal(response);
                console.log(response)
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div style={{width:"80%"}}>
            <div style={{alignItems:"center",marginTop:"100px",marginLeft:"530px"}}>
                <label style={{fontSize:"60px",textShadow: "1px 1px 2px black"}}>PiTcH FiNdEr</label>
            </div>
            <div style={{display:"flex",justifyContent:"center" ,alignItems:"center",marginBottom:"50px",marginTop:"100px"}}>
                <div style={{width:"60%",height:"600px",backgroundColor:"#6BFFDC",borderRadius:20,marginLeft:"200px"}}>
                    <div >
                        <Button style={{left:"-289px",top:"123px"}} variant="contained" color="secondary">
                            LOGIN
                        </Button>
                        <Button style={{left:"-289px",top:"123px"}} variant="contained" color="secondary">
                            SignUp
                        </Button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Loging;
