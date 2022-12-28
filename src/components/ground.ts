import { Mesh, MeshLambertMaterial, PlaneGeometry } from "three";
import { degToRad } from "three/src/math/MathUtils";

const geometry = new PlaneGeometry(10, 10);
const material = new MeshLambertMaterial({ color: 0xffffff });

export const ground = new Mesh(geometry, material);

ground.position.set(0, 0, 0);
ground.rotation.set(0, degToRad(90), 0);
