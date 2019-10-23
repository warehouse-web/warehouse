import React, {useState, useEffect} from 'react'
import '../components/main.css'

// let initFlexWidthPx = 640;
// let shiftRatio = 0.1;


export const relayout = () => {
    setWidth(getPos());
}

const setWidth = (shift) => {
    let element = document.getElementById("magic-logo");

    let newWidth = initFlexWidthPx - shiftRatio * shift;
    let newWidthPx = newWidth + "px";

    element.style.width = newWidthPx;
}

const getPos = () => {

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


const DivOverlay = (currImg) => {
//   const [rectColor, setRectColor ] = useState('black')
//   const [divStyle, setDivStyle] = useState()
//   const [width, setWidth] = useState(window.innerWidth)



//   useEffect(() => (window.innerWidth < 900 &&
//     setRectColor('white'))
//   ,[] )

//   useEffect(()=> {
//     setDivStyle({backgroundColor: rectColor})
//   }, [])

//   useEffect(
//     () => {
//     window.addEventListener('resize', updateWidthAndHeight)
//     return () => window.removeEventListener('resize', updateWidthAndHeight)
//   })

//   const updateWidthAndHeight = () => {
//     setWidth(window.innerWidth)
//     if (width >=900) {
//       setRectColor('black')
//     } else {
//       setRectColor('white')
//     }
//   }



    return (
        <div id="magic-logo">
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={{background: "transparent"}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: rectColor}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: rectColor}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: rectColor}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: rectColor}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: rectColor}}></div>
            <div className="rectangle" style={currImg ? currImg.currImg : {background: rectColor}}></div>
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

export default DivOverlay

