import { ImageList, ImageListItem } from "@mui/material";
import setTitle from "../utils/docsettings";

const eventImages = ['piekapp.jpeg', 'cornhole.jpg']

export default function Events() {
    setTitle("Events");

    return (
        <div id="eventsDiv" style={{textAlign:"center"}}>
            <ImageList id="eventImages" sx={{overflow:"hidden", margin:"0 auto", width: "70vw", height: "max-content" }} variant="woven" cols={2} gap={8}>
                {eventImages.map((img, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`events/${img}`}
                            alt={"event thing"}
                            loading="lazy"/>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}