import { useGLTF } from "@react-three/drei";
import React, { useRef, Suspense } from "react";

export function Computer(props) {
  const { nodes, materials } = useGLTF(
    "./models/computer-optimized-transformed.glb"
  );

  return (
    <Suspense fallback={null}>
      <group {...props} dispose={null}>
        <group position={[-4.005, 67.549, 58.539]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
            material={materials["ComputerDesk.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
            material={materials["FloppyDisk.001"]}
          />
        </group>
      </group>
    </Suspense>
  );
}

useGLTF.preload("./models/computer-optimized-transformed.glb");

export default Computer;
