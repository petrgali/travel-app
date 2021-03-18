import React, { useEffect } from "react"
import TileLayer from "ol/layer/Tile"
import OSM from "ol/source/OSM"
import { Map, View } from "ol"
import { makeStyles } from "@material-ui/core/styles"
import VectorLayer from "ol/layer/Vector"
import VectorSource from "ol/source/Vector"
import GeoJSON from "ol/format/GeoJSON"
import { FullScreen } from "ol/control"
import { withNamespaces } from "react-i18next"

const useStyles = makeStyles((theme) => ({
    map: {
        maxWidth: "md",
        height: 500,
    },
}))

function OlMap({ geoURL, t }) {
    const classes = useStyles()
    const setMap = (geo) => {
        return new Map({
            target: undefined,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        url: geo,
                        format: new GeoJSON(),
                    }),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
            controls: [new FullScreen()],
        })
    }

    useEffect(() => {
        let olMap = setMap(geoURL)
        olMap.setTarget("map")
        return () => olMap.setTarget(undefined)
    }, [geoURL])

    return (
        <div className={classes.main}>
            <h3>{t("Country on map")}</h3>
            <div id="map" className={classes.map}></div>
        </div>
    )
}

export default withNamespaces()(OlMap)
