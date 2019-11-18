import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import hastToHyperscript from 'hast-to-hyperscript'
import * as R from 'rambda'

export const isBrowser = () => typeof window !== 'undefined'
let initFlexWidthPx;
let shiftRatio = 0.3;
export let rectColor;

export const useMedia = (query) => {
  const [matches, setMatches] = useState();
  useEffect(() => {
    setMatches(window.matchMedia(query).matches)
  },[])

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

export function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export const handleWindowSizeChange = () => {
  if (window.innerWidth <= 900) {
    shiftRatio = 0.25;
    initFlexWidthPx = 310;
    return rectColor = 'white';

  } else {
    initFlexWidthPx = 620
    shiftRatio = 0.5;
    return rectColor = 'black';
  }
}

{isBrowser() && typeof window !== 'undefined' && window.addEventListener('resize', handleWindowSizeChange)
  if ( typeof window !== 'undefined' && window.innerWidth <= 900) {
    initFlexWidthPx = 310;
    rectColor = 'white';
  } else {
    initFlexWidthPx = 620;

  }
}


export const relayout = () => {
  setWidth(getPos());
}

const setWidth = (shift) => {
  let element = document.getElementById("magic-logo");

  let newWidth = initFlexWidthPx - shiftRatio * shift;
  let newWidthPx = newWidth + "px";

  element.style.width = newWidthPx;
}

export const getPos = () => {
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

export const postType = (post) => {
  switch(post.frontmatter.templateKey) {
    case 'blog-post':
      return 'Event';
    case 'podcast-page':
      return 'Podcast';
    case 'product-page':
      return 'Shop';
    default:
      return null;
  }
}


export const isDateBeforeToday = (post) => {
  let postDate = Date.parse(post.frontmatter.date)
  let currDate = Date.parse(new Date())
  return postDate - currDate < 0
}

export const renderHtmlToReact = node => {
  return hastToHyperscript(React.createElement, node);
}

export const imagesFromAst = htmlAst => {
  const findImageTags = node => {
    console.log('node:', node)

    if (node.children) {
      const myTags = node.children.filter(R.propEq("tagName", "img"))
      const childrensTags = node.children.map(findImageTags)
      return [...myTags, ...R.flatten(childrensTags)]
    } else {
      return []
    }
  }

  return findImageTags(htmlAst)
}

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
