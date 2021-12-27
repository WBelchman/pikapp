import setTitle from '../utils/docsettings';
import '../css/text.css'

interface Iprops {

}

export default function About(props: Iprops) {
    setTitle("About");
    
    return(
        <div className="aboutDiv" style={{width:'100%', height:'100%', textAlign:"center"}}>
            <p style={{fontSize:"xx-large"}}>
                About
            </p>
            <div className="paraWrapper">
                <h3>title</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla 
                    ut morbi tincidunt augue interdum velit euismod in pellentesque. Neque ornare 
                    aenean euismod elementum. Vestibulum sed arcu non odio euismod. Ut diam quam nulla 
                    porttitor massa id. Consequat nisl vel pretium lectus quam id leo in vitae.
                </p>
            </div>
            <div className="paraWrapper">
                <h3>Something here</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                    mollit anim id est laborum.
                </p>
            </div>
            <div className="paraWrapper">
                <h3>More Latin</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Metus dictum at tempor 
                    commodo ullamcorper a. Viverra tellus in hac habitasse. Adipiscing bibendum est 
                    ultricies integer quis auctor elit. Arcu non odio euismod lacinia at quis risus 
                    sed vulputate. Quis enim lobortis scelerisque fermentum dui faucibus in. Sed libero 
                    enim sed faucibus turpis in eu mi bibendum. Sagittis purus sit amet volutpat consequat mauris. 
                    Etiam sit amet nisl purus in mollis nunc sed. Arcu dui vivamus arcu felis bibendum ut. Purus sit amet 
                    luctus venenatis. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. 
                    Augue interdum velit euismod in pellentesque massa placerat duis. Vel elit scelerisque mauris 
                    pellentesque pulvinar pellentesque habitant morbi. Nunc sed blandit libero volutpat. Ultricies 
                    tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet massa vitae tortor condimentum 
                    lacinia. Eros donec ac odio tempor orci dapibus.
                </p>
            </div>

        </div>
    )
}