
export default function myFooter() {
    return (
      <footer style={{position:"relative", backgroundColor:"lightgrey"}}>
        <div style={{textAlign:"center"}}>
          <p style={{padding:"30px 50px 0", fontStyle:"italic"}}>
          Although this organization has members who are University of Virginia students and may 
          have University employees associated or engaged in its activities and affairs, the organization 
          is not a part of or an agency of the University. It is a separate and independent organization 
          which is responsible for and manages its own activities and affairs. The University does not 
          direct, supervise or control the organization and is not responsible for the organization's 
          contracts, acts or omissions.
          </p>
          <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
            <p>Please submit issues and suggestions <>&nbsp;</> </p>
            <a href='mailto:pikappuvaweb@gmail.com?'>here</a>
          </div>
        </div>
      </footer>
    )
}