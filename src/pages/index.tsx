import Header from "./Header";
import Box from "@mui/material/Box";
import Check from "./Checklist";

export default function Home() {
  return (
    <>
      <Header/>
      <div style={{ paddingTop: '2px' }}></div>    
      <Box>
      <h1 className="Title" style={{ marginLeft: '10px', textAlign:"center"}}>Inquisitorial CheckList</h1>
      </Box> 
      <div style={{ paddingTop: '2px' }}></div>   
      <Box component="section" sx={{ padding: 2 }}>
        <div style={{ marginLeft: "20%", marginBottom: "5px" }}>
        <Check/>
        </div>
      </Box> 
      </>
    
    
  );
}
