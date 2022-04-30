import { Status } from "@googlemaps/react-wrapper";
import React, { useEffect, useRef, ReactElement } from "react";

export function Map({
  center,
  zoom,
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" />;
}

