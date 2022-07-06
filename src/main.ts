
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import Map from "@arcgis/core/Map";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import SizeVariable from "@arcgis/core/renderers/visualVariables/SizeVariable";
import SolidEdges3D from "@arcgis/core/symbols/edges/SolidEdges3D";
import ExtrudeSymbol3DLayer from "@arcgis/core/symbols/ExtrudeSymbol3DLayer";
import PolygonSymbol3D from "@arcgis/core/symbols/PolygonSymbol3D";
import SceneView from "@arcgis/core/views/SceneView";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-button";

import Basemap from "@arcgis/core/Basemap";
import Color from "@arcgis/core/Color";
import Geometry from "@arcgis/core/geometry/Geometry";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import IntegratedMeshLayer from "@arcgis/core/layers/IntegratedMeshLayer";
import SceneFilter from "@arcgis/core/layers/support/SceneFilter";
import { FillSymbol3DLayer } from "@arcgis/core/symbols";
import Expand from "@arcgis/core/widgets/Expand";
import Home from "@arcgis/core/widgets/Home";

import LayerList from "@arcgis/core/widgets/LayerList";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";

import PopupTemplate from "@arcgis/core/PopupTemplate";


import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer";
import ColorVariable from "@arcgis/core/renderers/visualVariables/ColorVariable";
import ColorStop from "@arcgis/core/renderers/visualVariables/support/ColorStop";
import Legend from "@arcgis/core/widgets/Legend";

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
  basemap: "topo-vector",
  ground: "world-elevation",
});

const osmBuildings = new SceneLayer({
  url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
  title: "OpenStreetMap Buildings",
  visible: true,
  legendEnabled: false,
  // excludeObjectIds: [22244537, 1062063544, 2372497640, 2777335364]
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
  elevationInfo: {
    mode: "absolute-height",
  },
  visible: false,
});
map.add(apartments);

const meshUtrecht = new IntegratedMeshLayer({
  url: "https://tiles.arcgis.com/tiles/cFEFS0EWrhfDeVw9/arcgis/rest/services/Utrecht_Buildings_2021/SceneServer",
  title: "Integrated Mesh Utrecht",
  visible: false,
});
map.add(meshUtrecht);

const view = new SceneView({
  container: "viewDiv",
  map: map,
  camera: {
    position: {
      x: 5.11051384,
      y: 52.09574939,
      z: 469.37660,
    },
    heading: 193.52,
    tilt: 54.21
  },
  environment: {
    lighting: {
      directShadowsEnabled: true,
    },
    atmosphere: {
      quality: "high",
    },
  },
  qualityProfile: "high",
});

/***********************************
 * Add the UI elements to the view
 ***********************************/
view.ui.add(new Home({ view: view }), "top-left")
view.ui.add(new Expand({ view: view, content: new Legend({ view: view }), expanded: true }), "top-right")

view.ui.add("visualization", "bottom-right");
view.ui.add("renderers", "bottom-right");
view.ui.add("filter", "bottom-right");


/***********************************
 * Add functionality to visualization buttons
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
 * Add functionality to renderer buttons
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
apartments.opacity = 0.65;

let spaceUse = document.getElementById("spaceUse") as HTMLCalciteButtonElement;
let floorArea = document.getElementById("floorArea") as HTMLCalciteButtonElement;


spaceUse.addEventListener("click", () => {
  spaceUse.appearance = "solid";
  floorArea.appearance = "outline";
  apartments.renderer = rendererSpaceUse;
});

view.ui.add(new Home({ view: view }), "top-left");

floorArea.addEventListener("click", () => {
  floorArea.appearance = "solid";
  spaceUse.appearance = "outline";

  apartments.renderer = rendererFloorArea;

});

/***********************************
 * Add functionality to filter buttons
 ***********************************/

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


view.ui.add(new Expand({
  view,
  content: new LayerList({ view }),
}), "top-right");



/*
 * Plenary steps
*/
const showSketchBtn = document.getElementById("showSketch") as HTMLCalciteButtonElement;
const showFloorsBtn = document.getElementById("showFloors") as HTMLCalciteButtonElement;
const showElevationBtn = document.getElementById("showElevation") as HTMLCalciteButtonElement;
const showExtrusionBtn = document.getElementById("showExtrusion") as HTMLCalciteButtonElement;
const showRendererBtn = document.getElementById("showRenderer") as HTMLCalciteButtonElement;

const svm = new SketchViewModel({
  view,
  polygonSymbol: new PolygonSymbol3D({
    symbolLayers: [
      new FillSymbol3DLayer({
        material: {
          color: [250, 130, 6, 0.25]
        },
        outline: {
          color: [250, 130, 6, 1],
          size: 1
        }
      })
    ]
  }),
  layer: new GraphicsLayer({
    elevationInfo: {
      mode: "on-the-ground"
    }
  }),
  defaultCreateOptions: {

  }
});
view.highlightOptions.color = new Color([250, 130, 6, 0.25]);
view.highlightOptions.haloColor = new Color([250, 130, 6, 1]);
view.highlightOptions.shadowOpacity = 0;

view.map.add(svm.layer);

showSketchBtn.onclick = () => {
  if (svm.layer.graphics.length) {
    svm.update(svm.layer.graphics.getItemAt(0));
  } else {
    svm.create("polygon");
  }
};

const keepIds = [948020324, 221243432, 1848607720];

view.whenLayerView(osmBuildings).then((lv) => {

  let lastHighlight = { remove: () => { } };

  const select = async (geometry: Geometry) => {
    const query = lv.createQuery();
    query.geometry = geometry;
    const result = await lv.queryFeatures(query);

    lastHighlight.remove();

    const features = result.features.filter(f => 0 > keepIds.indexOf(f.getObjectId()));

    lastHighlight = lv.highlight(features);
  };

  const apply = async (geometry: Geometry) => {
    osmBuildings.filter = new SceneFilter({
      geometries: [geometry],
      spatialRelationship: "disjoint"
    });

    // lastHighlight.remove();
  };

  svm.on("create", (e) => {
    const geometry = e.graphic.geometry;
    if (e.state === "complete") {
      apply(geometry);
      svm.update(e.graphic);
    }
    else if (e.state === "active") {
      select(geometry);
    }
  });

  svm.on("update", (e) => {
    if (e.graphics.length === 0) {
      return;
    }
    const geometry = e.graphics[0].geometry;
    if (e.state === "complete") {
      apply(geometry);
    }
    else if (e.state === "active") {
      select(geometry);
    }
  });


});



view.ui.add(showSketchBtn, "bottom-left");
view.ui.add(showFloorsBtn, "bottom-left");
view.ui.add(showElevationBtn, "bottom-left");
view.ui.add(showExtrusionBtn, "bottom-left");
view.ui.add(showRendererBtn, "bottom-left");

window["view"] = view;
