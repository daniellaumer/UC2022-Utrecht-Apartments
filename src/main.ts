import Color from "@arcgis/core/Color";
import { whenOnce } from "@arcgis/core/core/reactiveUtils";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import SolidEdges3D from "@arcgis/core/symbols/edges/SolidEdges3D";
import ExtrudeSymbol3DLayer from "@arcgis/core/symbols/ExtrudeSymbol3DLayer";
import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D";
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-loader";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import IntegratedMeshLayer from "@arcgis/core/layers/IntegratedMeshLayer";
import Home from "@arcgis/core/widgets/Home";

// setAssetPath("https://js.arcgis.com/calcite-components/1.0.0-beta.77/assets");

// const params = new URLSearchParams(document.location.search.slice(1));
// const someParam = params.has("someParam");

// IdentityManager.registerOAuthInfos([
//   new OAuthInfo({
//     appId: "",
//     popup: true,
//     popupCallbackUrl: `${document.location.origin}${document.location.pathname}oauth-callback-api.html`,
//   }),
// ]);

// (window as any).setOAuthResponseHash = (responseHash: string) => {
//   IdentityManager.setOAuthResponseHash(responseHash);
// };

let renderer = new UniqueValueRenderer({
  visualVariables: [
    new SizeVariable({
      field: "FloorHeight_display",
      valueUnit: "meters",
    }),
  ],
  field: "SpaceUse",
  defaultLabel: "Other",
  uniqueValueInfos: [
    {
      label: "Office",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new ExtrudeSymbol3DLayer({
            size: 12,
            material: {
              color: [115, 178, 255, 0.65],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0, 0.65],
              size: 1,
            }),
          }),
        ],
      }),
      value: "Office",
    },
    {
      label: "MF Residential",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new ExtrudeSymbol3DLayer({
            size: 12,
            material: {
              color: [255, 238, 101, 0.65],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0, 0.65],
              size: 1,
            }),
          }),
        ],
      }),
      value: "MF Residential",
    },
    {
      label: "Hotel",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new ExtrudeSymbol3DLayer({
            size: 12,
            material: {
              color: [189, 126, 190, 0.65],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0, 0.65],
              size: 1,
            }),
          }),
        ],
      }),
      value: "Hotel",
    },
    {
      label: "Retail",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new ExtrudeSymbol3DLayer({
            size: 12,
            material: {
              color: [253, 127, 111, 0.65],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0, 0.65],
              size: 1,
            }),
          }),
        ],
      }),
      value: "Retail",
    },
  ],
});

const map = new Map({
  basemap: "topo-vector",
  ground: "world-elevation",
});

const osmBuildings = new SceneLayer({
  url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
  title: "OpenStreetMap Buildings",
  visible: false,
});
map.add(osmBuildings);

const osmTrees = new SceneLayer({
  url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Trees_Realistic_v1/SceneServer",
  title: "OpenStreetMap Trees",
  visible: false,
});
map.add(osmTrees);

const apartments = new FeatureLayer({
  url: "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Apartments_WFL1/FeatureServer",
  renderer: renderer,
  title: "Utrecht Apartments",
});
map.add(apartments);

const meshUtrecht = new IntegratedMeshLayer({
  url: "https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Buildings_2021/SceneServer",
  title: "Integrated Mesh Utrecht",
});
map.add(meshUtrecht);

const view = new SceneView({
  container: "viewDiv",
  map: map,
  camera: {
    position: {
      longitude: 5.10323513,
      latitude: 52.09099549,
      z: 244.73095,
    },
    heading: 109.76,
    tilt: 61.83,
  },
  environment: {
    atmosphere: {
      quality: "high",
    },
  },
  qualityProfile: "high",
});

view.ui.add(new Home({view:view}), "top-left")

whenOnce(() => !view.updating).then(() => {
  const loader = document.getElementById("loader");
  loader?.parentElement?.removeChild(loader);
});

window["view"] = view;
