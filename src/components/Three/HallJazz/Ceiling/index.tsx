import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { useBox, usePlane } from '@react-three/cannon';
import Color from '../../../../assets/textures/CeilingTexture/Color.jpg';
import Displacement from '../../../../assets/textures/CeilingTexture/Displacement.jpg';
import Normal from '../../../../assets/textures/CeilingTexture/Normal.jpg';
import AO from '../../../../assets/textures/CeilingTexture/AO.jpg';

const SIZE = 5;

function Celling() {
  const [ref] = useBox(() => ({
    type: 'Static',
    args: [25, 25, 0.5],
    rotation: [Math.PI / 2, 0, 0],
    position: [0, 5, 0],
  }));

  const [color, displacement, normal, ao] = useLoader<any, any>(
    THREE.TextureLoader,
    [Color, Displacement, Normal, AO],
  );

  color.wrapS = THREE.RepeatWrapping;
  color.wrapT = THREE.RepeatWrapping;
  color.repeat.x = 2;
  color.repeat.y = 2;

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[25, 25, 1]} />

      <meshStandardMaterial
        attach="material"
        map={color}
        normalMap={normal}
        displacementMap={displacement}
        displacementScale={0.05}
        aoMap={ao}
      />
    </mesh>
  );
}

export default Celling;