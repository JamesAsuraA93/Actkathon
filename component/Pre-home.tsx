import * as React from "react"
import { useRef } from 'react'


function SvgComponent(props:any) {
  return (
    <div>
      <svg
      className="prefix__blur"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <image
        filter="url(#prefix__a)"
        xlinkHref="http://i.imgur.com/IGKVr8r.png"
        width="100%"
        height="100%"
      />
      <filter id="prefix__a">
        <feGaussianBlur stdDeviation={5} />
      </filter>
      <mask id="prefix__b">
        <circle
          cx="-50%"
          cy="-50%"
          r={30}
          fill="#fff"
          filter="url(#prefix__a)"
          ref = {props.mask}
        />
      </mask>
      <image
        xlinkHref="http://i.imgur.com/IGKVr8r.png"
        width="100%"
        height="100%"
        mask="url(#prefix__b)"
      />
    </svg>
    </div>
    
  )
}

export default SvgComponent
