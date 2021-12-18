import * as THREE from "three";
import * as CANNON from "@react-three/cannon";
import { diceColor, labelColor } from "../constants/diceConstants";
import { Texture } from "three";

const calcTextureSize = (approx: number) => {
  return Math.pow(2, Math.floor(Math.log(approx) / Math.log(2)));
};

const createD4Text = (
  text: string[],
  color: string,
  back_color: string,
  size: number,
  margin: number
) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const textureSize = calcTextureSize(size + margin) * 2;
  canvas.width = canvas.height = textureSize;
  if (context) {
    context.font = `${(textureSize - margin) / 1.5}pt Arial`;
    context.fillStyle = back_color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = color;
    for (var i in text) {
      context.fillText(
        text[i],
        canvas.width / 2,
        canvas.height / 2 - textureSize * 0.3
      );
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate((Math.PI * 2) / 3);
      context.translate(-canvas.width / 2, -canvas.height / 2);
    }
  }
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
};

export const createD4Textures = (
  size: number,
  margin: number,
  labels: string[][]
) => {
  const textureMaps: Texture[] = [];
  for (var i = 0; i < labels.length; ++i)
    textureMaps.push(
      createD4Text(labels[i], labelColor, diceColor, size, margin)
    );

  console.log(textureMaps);
  return textureMaps;
};

export const generateD10 = () => {
  const a = (Math.PI * 2) / 10;
  const h = 0.105;

  const vertices = [];
  for (var i = 0, b = 0; i < 10; ++i, b += a)
    vertices.push([Math.cos(b), Math.sin(b), h * (i % 2 ? 1 : -1)]);
  vertices.push([0, 0, -1]);
  vertices.push([0, 0, 1]);
  const faces = [
    [0, 10, 1],
    [1, 10, 2],
    [1, 2, 11],
    [2, 3, 11],
    [2, 10, 3],
    [3, 10, 4],
    [3, 4, 11],
    [4, 5, 11],
    [4, 10, 5],
    [5, 10, 6],
    [5, 6, 11],
    [6, 7, 11],
    [6, 10, 7],
    [7, 10, 8],
    [7, 8, 11],
    [8, 9, 11],
    [8, 10, 9],
    [9, 10, 0],
    [9, 0, 11],
    [0, 1, 11],
  ];

  return [vertices.flat(), faces.flat()];
};
