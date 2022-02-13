import * as THREE from 'three';

import { useBox } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';

function Boundary({ wallSize, textureImage, ...props }: any) {
  const [ref] = useBox(() => ({
    args: wallSize,
    mass: 1,
    type: 'Static',
    ...props,
  }));

  const texture = useLoader<THREE.Texture, string>(
    THREE.TextureLoader,
    textureImage,
  );

  return (
    <mesh ref={ref} receiveShadow>
      <boxBufferGeometry attach="geometry" args={wallSize} />
      <meshLambertMaterial map={texture} attach="material" />
    </mesh>
  );
}

export default Boundary;
