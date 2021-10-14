import { Color, FlatShading } from "three";
import { blue } from "./colors";

export const d20FaceLabels = [
  " ",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];

export const d100FaceLabels = [
  " ",
  "00",
  "10",
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
  "90",
];

export const d4_labels = [
  [
    [],
    ["0", "0", "0"],
    ["2", "4", "3"],
    ["1", "3", "4"],
    ["2", "1", "4"],
    ["1", "2", "3"],
  ],
  [
    [],
    ["0", "0", "0"],
    ["2", "3", "4"],
    ["3", "1", "4"],
    ["2", "4", "1"],
    ["3", "2", "1"],
  ],
  [
    [],
    ["0", "0", "0"],
    ["4", "3", "2"],
    ["3", "4", "1"],
    ["4", "2", "1"],
    ["3", "1", "2"],
  ],
  [
    [],
    ["0", "0", "0"],
    ["4", "2", "3"],
    ["1", "4", "3"],
    ["4", "1", "2"],
    ["1", "3", "2"],
  ],
];

export const materialOptions = {
  specular: new Color(0x172022),
  color: "#f0f0f0",
  shininess: 40,
  flatShading: true,
};

export const physicalMaterialOptions = {
  specular: "#172022",
  color: "#f0f0f0",
  shininess: 40,
  flatShading: true,
};

export const labelColor = "#aaaaaa";
export const diceColor = blue["dark"];
export const ambientLightColor = 0xf0f5fb;
export const spotLightColor = 0xefdfd5;
export const selectorBackColors = {
  color: 0x404040,
  shininess: 0,
  emissive: 0x858787,
};

export const deskColor = 0xdfdfdf;
export const useShadows = true;

export const knownTypes = ["d4", "d6", "d8", "d10", "d12", "d20", "d100"];
export const diceFaceRange = {
  d4: [1, 4],
  d6: [1, 6],
  d8: [1, 8],
  d10: [0, 9],
  d12: [1, 12],
  d20: [1, 20],
  d100: [0, 9],
};
export const diceMass = {
  d4: 300,
  d6: 300,
  d8: 340,
  d10: 350,
  d12: 350,
  d20: 400,
  d100: 350,
};
export const diceInertia = {
  d4: 5,
  d6: 13,
  d8: 10,
  d10: 9,
  d12: 8,
  d20: 6,
  d100: 9,
};

export const scale = 100;

export const degreeToRadian = (degree: number) => Math.PI * (degree / 180);
