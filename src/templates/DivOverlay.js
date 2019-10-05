import React from 'react'
import '../components/main.css'

let initFlexWidthPx = 620;
    let shiftRatio = 0.1;

export const relayout = () => {
    console.log('went inside')
    setWidth(getPos());
}

const setWidth = (shift) => {
    let element = document.getElementById("magic-logo");

    let newWidth = initFlexWidthPx - shiftRatio * shift;
    let newWidthPx = newWidth + "px";

    element.style.width = newWidthPx;
}
console.log('window:', window)

const getPos = () => {

    console.log('windowInside:', window)
    if(window.pageYOffset!= undefined){
        return window.pageYOffset;
    }
    else{
        let sy,
        d = document,
        r = d.documentElement,
        b = d.body;
        sy= r.scrollTop || b.scrollTop || 0;
        return sy;
    }
}

const divOverlay = (currImg) => {
    console.log('currImg:', currImg.currImg)


    return (
        <div id="magic-logo">
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: "black"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
        </div>
    )
}

export default divOverlay
