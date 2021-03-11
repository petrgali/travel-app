import React, { useEffect } from "react";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Map, View } from "ol";
import { makeStyles } from "@material-ui/core/styles";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from 'ol/format/GeoJSON';
import {FullScreen} from 'ol/control';
import kz from './source/kazakhstan.geojson'



const useStyles = makeStyles((theme) => ({
  map: {
    maxWidth: "md",
    height: "100vh",
  },
}));


const olMap = new Map({
  target: undefined,
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new VectorLayer ({
        source: new VectorSource({
            url: kz,
            format: new GeoJSON()
        })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
  controls: [new FullScreen()],
});

export default function OlMap() {
  const classes = useStyles();

  useEffect(() => {
    olMap.setTarget("map");
    return () => olMap.setTarget(undefined);
  }, []);

  return <div id="map" className={classes.map}></div>;
}
