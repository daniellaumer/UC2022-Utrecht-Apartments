
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
import FillSymbol3DLayer from "@arcgis/core/symbols/FillSymbol3DLayer";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
import { toEditorSettings } from "typescript";
import Editor from "@arcgis/core/widgets/Editor";
import SketchTooltipOptions from "@arcgis/core/views/interactive/sketch/SketchTooltipOptions";
import WebScene from "@arcgis/core/WebScene";
import Collection from "@arcgis/core/core/Collection";








/***********************************
 * Load and add all the layers
 ***********************************/

const scene = new WebScene({
  portalItem: {
    // OSM 3D buildings and trees
    id: "037cceb0e24440179dbd00846d2a8c4f",
  }
});


const view = new SceneView({
  container: "viewDiv",
  map: scene,
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

//***********************************
//* Excluding some buildings
//***********************************

scene.loadAll().then(() => {

  osmTrees = (scene.allLayers.find((layer) => {
    return layer.title === "OpenStreetMap 3D Trees"
  }) as SceneLayer)
  osmTrees.legendEnabled = false;

  let hillshade = (scene.allLayers.find((layer) => {
    return layer.title === "World Hillshade"
  }) as SceneLayer);
  hillshade.visible = false;

  osmBuildings = (scene.allLayers.find((layer) => {
    return layer.title === "OpenStreetMap 3D Buildings"
  }) as SceneLayer)


  osmBuildings.legendEnabled = false,
  osmBuildings.excludeObjectIds = new Collection([22244537, 1062063544, 2372497640, 2777335364]);
});


//***********************************
//* Step 1: Loading apartment layer
//***********************************

const apartments = new FeatureLayer({
  url: "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Apartments_Data_WFL1/FeatureServer",
  title: "Utrecht Apartments",
  elevationInfo: {
    mode: "on-the-ground",
  },
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
        },
        {
          fieldName: "Level_",
          label: "Level"
        },
        {
          fieldName: "FloorHeight_display",
          label: "Floor height [m]",
          format: {
            digitSeparator: false,
            places: 1
          }
        }
      ]
    }
  ]
});

// view.map.add(apartments);


//***********************************
//* Step 2: z-values: Attribut driven
//***********************************

// apartments.elevationInfo = {
//   mode: "absolute-height",
//   offset: 6,
//   featureExpressionInfo: {
//     expression: "$feature.Level_ * 3.5",
//   }
// };


//***********************************
//* Step 3: z-values: Existing geometry
//***********************************

// apartments.elevationInfo = { mode: "absolute-height" };


//***********************************
//* Step 4: Editor
//***********************************

let editor = new Editor({
  view: view,
  tooltipOptions: new SketchTooltipOptions({
    enabled: true
  })
});
view.ui.add(new Expand({ view: view, group: "top-right", content: editor }), "top-right");


//***********************************
//* Step 5: Unique Value Renderer
//***********************************

let uniqueValueRenderer = new UniqueValueRenderer({
  field: "SpaceUse",
  valueExpressionTitle: "Space Use",
  defaultLabel: "Other",
  uniqueValueInfos: [
    {
      label: "Office",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: [115, 178, 255],
            },
            outline: {
              color: [0, 0, 0],
              size: 0.5,
            },
          }),
        ],
      }),
      value: "Office",
    },
    {
      label: "Residential",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: [255, 238, 101],
            },
            outline: {
              color: [0, 0, 0],
              size: 0.5,
            },
          }),
        ],
      }),
      value: "MF Residential",
    },
    {
      label: "Hotel",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: [189, 126, 190],
            },
            outline: {
              color: [0, 0, 0],
              size: 0.5,
            },
          }),
        ],
      }),
      value: "Hotel",
    },
    {
      label: "Retail",
      symbol: new PolygonSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: [253, 127, 111],
            },
            outline: {
              color: [0, 0, 0],
              size: 0.5,
            },
          }),
        ],
      }),
      value: "Retail",
    },
  ],
});

// apartments.renderer = uniqueValueRenderer;


//***********************************
//* Step 6: Extrusion
//***********************************

let rendererExtruded = new UniqueValueRenderer({
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

// apartments.renderer = rendererExtruded;


//***********************************
//* Step 7: Final app
//***********************************

const meshUtrecht = new IntegratedMeshLayer({
  url: "https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Buildings_2021/SceneServer",
  title: "Integrated Mesh Utrecht",
  visible: false
});
view.map.add(meshUtrecht);

// finalizeApp()



//***********************************
//* Add the UI elements to the view
//***********************************

view.ui.add(new Home({ view: view }), "top-left")
let legend = new Expand({ view: view, group: "top-right", content: new Legend({ view: view }), expanded: false })
view.ui.add(legend, "top-right");


view.ui.add("visualization", "bottom-right");
view.ui.add("renderers", "bottom-right");
view.ui.add("filter", "bottom-right");

let osmBuildings: SceneLayer;;
let osmTrees: SceneLayer;

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

  view.map.basemap = Basemap.fromId("satellite");


  view.environment.lighting!.directShadowsEnabled = false;
  let defExpression = apartments.definitionExpression
  setTimeout(() => {
    apartments.definitionExpression = "For_lease = ''";
    setTimeout(() => {
      apartments.definitionExpression = defExpression;
    }, 500)
  }, 500)
});

schematic.addEventListener("click", () => {
  schematic.appearance = "solid";
  realistic.appearance = "outline";

  osmBuildings.visible = true;
  osmTrees.visible = true;
  meshUtrecht.visible = false;

  apartments.opacity = 1;

  view.map.basemap = Basemap.fromId("topo-vector");

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


function finalizeApp() {
  scene.loadAll().then(() => {

    apartments.renderer = rendererExtruded;

    apartments.opacity = 1;
    view.map.basemap = Basemap.fromId("");

    meshUtrecht.visible = false;

    apartments.definitionExpression = "";

    document.getElementById("visualization")!.style.display = "flex";
    document.getElementById("renderers")!.style.display = "flex";
    document.getElementById("filter")!.style.display = "flex";

    legend.expanded = true;
  })

}
window["view"] = view;
