
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import SolidEdges3D from "@arcgis/core/symbols/edges/SolidEdges3D";
import ExtrudeSymbol3DLayer from "@arcgis/core/symbols/ExtrudeSymbol3DLayer";
import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D";
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-button";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

import IntegratedMeshLayer from "@arcgis/core/layers/IntegratedMeshLayer";
import Home from "@arcgis/core/widgets/Home";
import Basemap from "@arcgis/core/Basemap";
import PopupTemplate from "@arcgis/core/PopupTemplate";


import * as colorRendererCreator from "@arcgis/core/smartMapping/renderers/color";
import Legend from "@arcgis/core/widgets/Legend";
import Expand from "@arcgis/core/widgets/Expand";
import ColorStop from "@arcgis/core/renderers/visualVariables/support/ColorStop";
import Color from "@arcgis/core/Color";
import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer";
import ColorVariable from "@arcgis/core/renderers/visualVariables/ColorVariable";

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

/***********************************
 * Load and add all the layers
 ***********************************/

const map = new Map({
  basemap: "satellite",
  ground: "world-elevation",
});

const osmBuildings = new SceneLayer({
  url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
  title: "OpenStreetMap Buildings",
  visible: false,
  legendEnabled: false,
  excludeObjectIds: [22244537, 1062063544, 2372497640, 2777335364]
});
map.add(osmBuildings);

const osmTrees = new SceneLayer({
  url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Trees_Realistic_v1/SceneServer",
  title: "OpenStreetMap Trees",
  visible: false,
  legendEnabled: false,
});
map.add(osmTrees);

const apartments = new FeatureLayer({
  url: "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Apartments_Data_WFL1/FeatureServer",
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

/***********************************
 * Add the UI elements to the view
 ***********************************/

view.ui.add("selection", "bottom-right");
view.ui.add("renderers", "bottom-right");
view.ui.add(new Home({ view: view }), "top-left")

view.ui.add(new Expand({ view: view, content: new Legend({ view: view }), expanded: true }), "top-right")

/***********************************
 * Add functionality to the buttons
 ***********************************/

let realistic = document.getElementById("realistic") as HTMLCalciteButtonElement;
let schematic = document.getElementById("schematic") as HTMLCalciteButtonElement;

realistic.addEventListener("click", () => {
  realistic.appearance = "solid";
  schematic.appearance = "outline";

  osmBuildings.visible = false;
  osmTrees.visible = false;
  meshUtrecht.visible = true;

  apartments.opacity = 0.65;

  map.basemap = Basemap.fromId("satellite");
});

schematic.addEventListener("click", () => {
  schematic.appearance = "solid";
  realistic.appearance = "outline";

  osmBuildings.visible = true;
  osmTrees.visible = true;
  meshUtrecht.visible = false;

  apartments.opacity = 1;

  map.basemap = Basemap.fromId("topo-vector");
});

/***********************************
 * Define different renderers for the apartment layer
 ***********************************/
let rendererSpaceUse = new UniqueValueRenderer({
  visualVariables: [
    new SizeVariable({
      field: "FloorHeight_display",
      valueUnit: "meters",
    }),
  ],
  field: "SpaceUse",
  valueExpressionTitle: "Space Use",
  defaultLabel: "Other",
  uniqueValueInfos: [
    {
      label: "Office",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new ExtrudeSymbol3DLayer({
            size: 12,
            material: {
              color: [115, 178, 255],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0],
              size: 1,
            }),
          }),
        ],
      }),
      value: "Office",
    },
    {
      label: "Residential",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new ExtrudeSymbol3DLayer({
            size: 12,
            material: {
              color: [255, 238, 101],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0],
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
              color: [189, 126, 190],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0],
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
              color: [253, 127, 111],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0],
              size: 1,
            }),
          }),
        ],
      }),
      value: "Retail",
    },
  ],
});


let rendererAvailability = new UniqueValueRenderer({
  visualVariables: [
    new SizeVariable({
      field: "FloorHeight_display",
      valueUnit: "meters",
    }),
  ],
  field: "For_lease",
  valueExpressionTitle: "Availability",
  defaultLabel: "Other",
  uniqueValueInfos: [
    {
      label: "Available",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new ExtrudeSymbol3DLayer({
            size: 12,
            material: {
              color: [47, 196, 14],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0],
              size: 1,
            }),
          }),
        ],
      }),
      value: "yes",
    },
    {
      label: "Not available",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new ExtrudeSymbol3DLayer({
            size: 12,
            material: {
              color: [189, 189, 189],
            },
            edges: new SolidEdges3D({
              color: [0, 0, 0],
              size: 1,
            }),
          }),
        ],
      }),
      value: "no",
    }
  ],
});

let rendererFloorArea = new ClassBreaksRenderer({
  visualVariables: [
    new SizeVariable({
      field: "FloorHeight_display",
      valueUnit: "meters",
    }),
    new ColorVariable({
      field: "Floor_area",
      stops: [
        new ColorStop({ value: 1450, color: new Color("#feedde") }),
        new ColorStop({ value: 1500, color: new Color("#fdbe85") }),
        new ColorStop({ value: 1750, color: new Color("#fd8d3c") }),
        new ColorStop({ value: 1900, color: new Color("#e6550d") }),
        new ColorStop({ value: 2000, color: new Color("#a63603") })
      ]
    })
  ],
  defaultLabel: "Other",

  defaultSymbol: new PolygonSymbol3D({
    symbolLayers: [
      new ExtrudeSymbol3DLayer({
        size: 4,
        material: {
          color: [
            170,
            170,
            170
          ]
        }
      })
    ]
  }),
});

/*
let rendererFloorArea:any = null;
view.when(() => {
  colorRendererCreator.createContinuousRenderer({
    layer: apartments,
    view:view,
    field: "Floor_area", 
    symbolType : "3d-volumetric",
    theme: "above"
  }).then((renderer) => {
    renderer.renderer.visualVariables.push(
      new SizeVariable({
        field: "FloorHeight_display",
        valueUnit: "meters",
      })),
    renderer.renderer.visualVariables[0].stops[0] = new ColorStop({value: 1450, color: new Color("#feedde")})
    renderer.renderer.visualVariables[0].stops[1] = new ColorStop({value: 1500, color: new Color("#fdbe85")})
    renderer.renderer.visualVariables[0].stops[2] = new ColorStop({value: 1750, color: new Color("#fd8d3c")})
    renderer.renderer.visualVariables[0].stops[3] = new ColorStop({value: 1900, color: new Color("#e6550d")})
    renderer.renderer.visualVariables[0].stops[4] = new ColorStop({value: 2000, color: new Color("#a63603")})


    rendererFloorArea = renderer.renderer;
  })
})
*/


apartments.popupTemplate = new PopupTemplate({
  // autocasts as new PopupTemplate()
  title: "{Building_name}, Level {Level_}",
  content: [
    {
      type: "fields",
      fieldInfos: [
        {
          fieldName: "SpaceUse",
          label: "Space Use"
        },
        {
          fieldName: "For_lease",
          label: "Availability"
        },
        {
          fieldName: "Elevation",
          label: "Elevation"
        },
        {
          fieldName: "Floor_area",
          label: "Floor area [m]"
        }
      ]
    }
  ]
});



apartments.renderer = rendererSpaceUse;
apartments.opacity = 0.65;

let spaceUse = document.getElementById("spaceUse") as HTMLCalciteButtonElement;
let availability = document.getElementById("availability") as HTMLCalciteButtonElement;
let floorArea = document.getElementById("floorArea") as HTMLCalciteButtonElement;

spaceUse.addEventListener("click", () => {
  spaceUse.appearance = "solid";
  availability.appearance = "outline";
  floorArea.appearance = "outline";
  apartments.renderer = rendererSpaceUse;
});

availability.addEventListener("click", () => {
  availability.appearance = "solid";
  spaceUse.appearance = "outline";
  floorArea.appearance = "outline";
  apartments.renderer = rendererAvailability;

});

floorArea.addEventListener("click", () => {
  floorArea.appearance = "solid";
  spaceUse.appearance = "outline";
  availability.appearance = "outline";

  console.log(rendererFloorArea)
  apartments.renderer = rendererFloorArea;

});


window["view"] = view;
