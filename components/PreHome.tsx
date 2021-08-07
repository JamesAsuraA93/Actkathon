
import * as React from "react"

export default function PreHome(props:any) {
  return (
    <div className="prefix__pics">
      <svg
        className="prefix__blurs"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
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
