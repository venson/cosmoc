const options: Options = {
  wallThickness: 4,
  wallShrouding: 0,
  webThickness: 0,
  webMinThicknessFactor: 0.8,
  keyBasis: "dsa",
  screwIndices: [-1, -1, -1, -1, -1, -1],
  screwType: "screw insert",
  screwSize: "M3",
  screwCountersink: true,
  rounded: {  },
  connector: "trrs",
  connectorSizeUSB: "average",
  connectorIndex: -1,
  microcontroller: "promicro-usb-c",
  fastenMicrocontroller: true,
  verticalClearance: 0.1,
  clearScrews: true,
  shell: { type: "basic", lip: false }
}
// NOTE: Screws / the connector with
// negative indices are placed automatically.
// In the basic/advanced tab, these values were:
// screwIndices: [14.5, 3.5, 24.5, 30.5, 19.5, 42.5, 9.5]
// connectorIndex: 38.7
const totalAng=40;
const baseAng=106;
const baseAngTop=113;
const totalAngTop = baseAng+totalAng-baseAngTop 



const thumbOrigin = new Trsf()
  .translate(-40, -116, 17.2)
  .rotate(0, [0, 0, 0], [0, 0, 1])
  .rotate(0, [0, 0, 0], [1, 0, 0])
  .rotate(0., [0, 0, 0], [0, 1, 0])


const tPivotOrigin = new Trsf()
.placeOnSphere({
          angle:0,
          spacing:19,
          curvature:0,
          row:0,
      })
      .translate([72, 0, 0]) 
const toPivotOrigin = new Trsf()
.placeOnSphere({
          angle:0,
          spacing:19,
          curvature:0,
          row:1,
      })
      .translate([74, 0, 4]) 
const curvature = {
  curvatureOfColumn: 15,
  curvatureOfRow: 5,
  spacingOfRows: 18,
  spacingOfColumns: 20,
  arc: 0
}
const fcurvature = {
  curvatureOfColumn: 0,
  curvatureOfRow: 0,
  spacingOfRows: 18,
  spacingOfColumns: 19.5,
  arc: 0
}
const pinky=[2, -14,11]
const pinkyouter=[1, -14,11]
const pCurvature = {
  curvatureOfColumn: 17,
  curvatureOfRow: 0,
  spacingOfRows: 20,
  spacingOfColumns: 20.5,
  arc: 0
}
const pOuterCurvature = {
  curvatureOfColumn: 17,
  curvatureOfRow: 0,
  spacingOfRows: 20,
  spacingOfColumns: 20.5,
  arc: 0
}
/**
 * Useful for setting a different curvature
 * for the pinky keys.
 */


/**
 * The plane used to position the upper keys.
 * It's rotated by the tenting and x rotation
 * then translated by the z offset.
 */ 
const upperKeysPlane = new Trsf()
  .rotate(5, [0, 0, 0], [0, 1, 0], false)
  .rotate(1, [0, 0, 0], [1, 0, 0], false)
  .translate(0, 0, 0, false)
const pUpperKeysPlane = new Trsf()
  .rotate(0, [0, 0, 0], [0, 1, 0], false)
  .rotate(5, [0, 0, 0], [1, 0, 0], false)
  .rotate(-2, [0, 0, 0], [0, 0, 1], false)
  .translate(0, 0, 0, false)
const pDownKeysPlane = new Trsf()
  .rotate(0, [0, 0, 0], [0, 1, 0], false)
  .rotate(5, [0, 0, 0], [1, 0, 0], false)
  .rotate(-2, [0, 0, 0], [0, 0, 1], false)
  .translate(0, 0,0, false)
/** Definitions for the upper keys. */
const fingers: Key[] = [
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 1,
      letter: "6"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: -2
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 2,
      letter: "y"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: -1
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 3,
      letter: "h"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: 0
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 4,
      letter: "n"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -3,
        row: 1
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 1,
      letter: "7"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: -2
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 2,
      letter: "u"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: -1
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 3,
      home: "index",
      letter: "j"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: 0
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 4,
      letter: "m"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: 1
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
    {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 5,
      letter: "down"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -2,
        row: 2
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 1,
      letter: "8"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: -2
      })
      .translate(0, 2.8, -4)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 2,
      letter: "i"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: -1
      })
      .translate(0, 2.8, -4)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 3,
      home: "middle",
      letter: "k"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: 0
      })
      .translate(0, 2.8, -4)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 4,
      letter: ","
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: 1
      })
      .translate(0, 2.8, -4)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 4,
      letter: ","
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: -1,
        row: 2
      })
      .translate(0, 2.8, -4)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 1,
      letter: "9"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: -2
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 2,
      letter: "o"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: -1
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 3,
      home: "ring",
      letter: "l"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: 0
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 4,
      letter: "."
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: 1
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 4,
      letter: "["
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...curvature,
        column: 0,
        row: 2
      })
      .translate(0, 0, 0)
      .transformBy(upperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 1,
      letter: "0"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pCurvature,
        column: 1,
        row: -2
      })
      .translate(pinky[0], pinky[1], pinky[2])
      .transformBy(pUpperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 2,
      letter: "p"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pCurvature,
        column: 1,
        row: -1
      })
      .translate(pinky[0], pinky[1], pinky[2])
      .transformBy(pUpperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 3,
      home: "pinky",
      letter: ";"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pCurvature,
        column: 1,
        row: 0
      })
      .translate(pinky[0], pinky[1], pinky[2])
      .transformBy(pDownKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 4,
      letter: "/"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pCurvature,
        column: 1,
        row: 1
      })
      .translate(pinky[0], pinky[1], pinky[2])
      .transformBy(pDownKeysPlane)
  },

  {
    type: "mx-better",
    keycap: { profile: "dsa",
     row: 1,
     letter:"-" },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pOuterCurvature,
        column: 2,
        row: -2
      })
      .translate(pinkyouter[0], pinkyouter[1], pinkyouter[2])
      .transformBy(pUpperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: { profile: "dsa", row: 2 ,
    letter: '='},
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pOuterCurvature,
        column: 2,
        row: -1
      })
      .translate(pinkyouter[0], pinkyouter[1], pinkyouter[2])
      .transformBy(pUpperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: {
      profile: "dsa",
      row: 3,
      letter: "'"
    },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pOuterCurvature,
        column: 2,
        row: 0
      })
      .translate(pinkyouter[0], pinkyouter[1], pinkyouter[2])
      .transformBy(pUpperKeysPlane)
  },
  {
    type: "mx-better",
    keycap: { profile: "dsa", row: 4 },
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        ...pOuterCurvature,
        column: 2,
        row: 1
      })
      .translate(pinkyouter[0], pinkyouter[1], pinkyouter[2])
      .transformBy(pUpperKeysPlane)
  }
]

/**
 * The plane used to position the thumbs.
 * It's defined using a nearby key position,
 * then offset by some amount.
 */


  


/** The curvature of the thumb cluster. */
const thumbCurvature = {
  curvatureOfRow: 0,
  curvatureOfColumn: 0,
  spacingOfColumns: 20,
  spacingOfRows: 20
}


const thumbs: Key[] = [
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
    .transformBy(tPivotOrigin)
    .rotate(baseAng + 0)
    .transformBy(thumbOrigin),
    keycap: { profile: "dsa", row: 5,
    letter:'1' }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
    .transformBy(tPivotOrigin)
    .rotate(baseAng + totalAng/2)
    .transformBy(thumbOrigin),

    keycap: { profile: "dsa", row: 5,
    letter:'2' }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
    .transformBy(tPivotOrigin)
    .rotate(baseAng + totalAng)
    .transformBy(thumbOrigin),
    keycap: { profile: "dsa", row: 5,letter:'3' }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
    .transformBy(toPivotOrigin)
    .rotate(baseAngTop)
    .transformBy(thumbOrigin),
    keycap: { profile: "dsa", row: 5,letter:'4' }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
    .transformBy(toPivotOrigin)
    .rotate(baseAngTop + totalAngTop/2)
    .transformBy(thumbOrigin),
    keycap: { profile: "dsa", row: 5,letter:'5' }
  },
  {
    type: "mx-better",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
    .transformBy(toPivotOrigin)
    .rotate(baseAngTop + totalAngTop)
    .transformBy(thumbOrigin),
    keycap: { profile: "dsa", row: 5,letter:'6' }
  }
]


const wristRestOrigin = new Trsf()
  .translateBy(new Trsf()
    .placeOnMatrix({
      ...curvature,
      row: 1,
      column: -1.5
    })
    .transformBy(upperKeysPlane)
    .translate(8.75, -8.75, 0)
  )
  .rotate(0, [0, 0, 0], [0, 0, 1])
  .translate(4, -5, 4)


export default {
  ...options,
  wristRestOrigin,
  keys: [...fingers, ...thumbs],
}
