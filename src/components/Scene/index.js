import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  Suspense,
  useLayoutEffect,
} from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader, useResource } from "react-three-fiber";
import { Physics, useBox } from "use-cannon";
import { useSpring, a } from "react-spring/three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei";
import Model from "../../models/venus.gltf";
import "./style.css";

function Char() {
  // const [load, setLoad] = useState(false);
  const scene = useLoader(GLTFLoader, Model);
  // useMemo(() => setLoad(!load))
  console.log(scene);
  const [ref, api] = useBox(() => ({ args: 0.01, mass: 1 }));
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? "red" : "white",
  });

  useFrame((state) => {
    // ref.current.rotation.set(0, state.mouse.x * state.viewport.width /80, 0)
    ref.current.rotation.set(
      0,
      8.5 + (state.mouse.x * state.viewport.width) / 80,
      0
    );
    ref.current.rotation.y += 0.001;

    ref.current.position.set(15, -73, -50);
  });
  return (
    <group>
      <a.mesh
        ref={ref}
        // onPointerOver={() => setHovered(true)}
        // onPointerOut={() => setHovered(false)}
        onClick={() => setActive(!active)}
        scale={props.scale}
      >
        {/* {load ? ( */}
        <primitive attach="map" object={scene.scene} dispose={null} />
        {/* ) : null} */}
        <a.meshStandardMaterial attach="material" color={props.color} />
      </a.mesh>
    </group>
  );
}

function Scene({ blur, blurValue }) {
  const style = {
    filter: "blur(" + blurValue + ")",
  };
  return (
    <div id="scene" style={style}>
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 3], fov: 70 }}>
        {/* <color attach="background" args={["#0d0d0d"]} /> */}
        {/* <ambientLight intensity={0.2} /> */}
        <pointLight position={[3, -10, -45]} intensity={0.4} />
        <OrbitControls />
        <Physics>
          <Char />
        </Physics>
      </Canvas>
    </div>
  );
}

export default Scene;
