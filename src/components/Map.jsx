import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, 42.0, -40],
        center: [-49, 19],
        scale: 1000
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="transparent"
        stroke="#007cba"
        strokeWidth={2}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-58.3422, -34.8566]}
        dx={190}
        dy={-80}
        connectorProps={{
          stroke: "#ffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="175" textAnchor="end" alignmentBaseline="middle" fill="#0084c6">
          {"Buenos Aires, Argentina"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
