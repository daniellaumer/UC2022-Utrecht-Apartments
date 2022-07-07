
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

/***********************************
 * Load and add all the layers
 ***********************************/

const map = new Map({
  basemap: "topo-vector",
  ground: "world-elevation",
});


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

const osmBuildings = new SceneLayer({
  url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
  title: "OpenStreetMap Buildings",
  legendEnabled: false,
  excludeObjectIds: [22244537, 1062063544, 2372497640, 2777335364]
});
map.add(osmBuildings);

const osmTrees = new SceneLayer({
  url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Trees_Realistic_v1/SceneServer",
  title: "OpenStreetMap Trees",
  legendEnabled: false,
});
map.add(osmTrees);

//***********************************
//* From 2D to 3D
//***********************************

const apartments = new FeatureLayer({
  url: "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Apartments_Data_WFL1/FeatureServer",
  title: "Utrecht Apartments",
  elevationInfo: {
    mode: "absolute-height",
    offset: 6,
    featureExpressionInfo: {
      expression: "$feature.elevation",
    },
  },
});
map.add(apartments);


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
          fieldName: "Floor_area",
          label: "Floor area [m]"
        }
      ]
    }
  ]
});

/* ///////////////////////////////////////////////////////////////////////////////////////////////////



const meshUtrecht = new IntegratedMeshLayer({
  url: "https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Buildings_2021/SceneServer",
  title: "Integrated Mesh Utrecht",
});
map.add(meshUtrecht);

//***********************************
//* Add the UI elements to the view
//***********************************

view.ui.add(new Home({ view: view }), "top-left")
view.ui.add(new Expand({ view: view, content: new Legend({ view: view }), expanded: true }), "top-right")

view.ui.add("visualization", "bottom-right");
view.ui.add("renderers", "bottom-right");
view.ui.add("filter", "bottom-right");


//***********************************
//* Add functionality to visualization buttons
//***********************************

let realistic = document.getElementById("realistic") as HTMLCalciteButtonElement;
let schematic = document.getElementById("schematic") as HTMLCalciteButtonElement;

realistic.addEventListener("click", () => {
  realistic.appearance = "solid";
  schematic.appearance = "outline";

  osmBuildings.visible = false;
  osmTrees.visible = false;
  meshUtrecht.visible = true;

  apartments.opacity = 0.75;

  map.basemap = Basemap.fromId("satellite");

  
  view.environment.lighting!.directShadowsEnabled = false;
});

schematic.addEventListener("click", () => {
  schematic.appearance = "solid";
  realistic.appearance = "outline";

  osmBuildings.visible = true;
  osmTrees.visible = true;
  meshUtrecht.visible = false;

  apartments.opacity = 1;

  map.basemap = Basemap.fromId("topo-vector");

  view.environment.lighting!.directShadowsEnabled = true;

});

//***********************************
//* Add functionality to renderer buttons
//***********************************

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
        new ColorStop({ value: 2000, color: new Color("#a63603") }),
        new ColorStop({ value: 5000, color: new Color("#501900") })

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
          fieldName: "Floor_area",
          label: "Floor area [m]"
        }
      ]
    }
  ]
});

apartments.renderer = rendererSpaceUse;
apartments.opacity = 0.75;

let spaceUse = document.getElementById("spaceUse") as HTMLCalciteButtonElement;
let floorArea = document.getElementById("floorArea") as HTMLCalciteButtonElement;

spaceUse.addEventListener("click", () => {
  spaceUse.appearance = "solid";
  floorArea.appearance = "outline";

  apartments.renderer = rendererSpaceUse;
});


floorArea.addEventListener("click", () => {
  floorArea.appearance = "solid";
  spaceUse.appearance = "outline";

  apartments.renderer = rendererFloorArea;

});

//***********************************
//* Add functionality to filter buttons
//***********************************

let availability = document.getElementById("availability") as HTMLCalciteButtonElement;
let floorAreaFilter = document.getElementById("floorAreaFilter") as HTMLCalciteButtonElement;

availability.addEventListener("click", () => {
  if (availability.appearance == "outline") {
    availability.appearance = "solid";
    apartments.definitionExpression = "For_lease = 'yes'";
  }
  else {
    availability.appearance = "outline";
    apartments.definitionExpression = "";
  }
  floorAreaFilter.appearance = "outline";
});

floorAreaFilter.addEventListener("click", () => {
  if (floorAreaFilter.appearance == "outline") {
    floorAreaFilter.appearance = "solid";
    apartments.definitionExpression = "Floor_area < 1800";
  }
  else {
    floorAreaFilter.appearance = "outline";
    apartments.definitionExpression = "";
  }
  availability.appearance = "outline";
});

*/ ///////////////////////////////////////////////////////////////////////////////////////////////////

window["view"] = view;
