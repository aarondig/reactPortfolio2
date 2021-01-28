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

function Char({size}) {

  const [mobile, setMobile] = useState(false);
  const scene = useLoader(GLTFLoader, Model);
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
      8.5 + (state.mouse.x * state.viewport.width) / 50,
      0
    );
    ref.current.rotation.y += 0.001;
    ref.current.position.set(size.width > 600 ? 18 : 0, -73, -50);
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

function Scene({ size, blurValue }) {
  const style = {
    filter: "blur(" + blurValue + ")",
    height: size.height
  };
  return (
    <div id="scene" style={style}>
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 3], fov: 70 }}>
        {/* <color attach="background" args={["#0d0d0d"]} /> */}
        {/* <ambientLight intensity={0.2} /> */}
        <pointLight position={[size.width > 600 ? 20 : 3, -4, -40]} intensity={size.width > 600 ? .4 : .13} />
        {/* <OrbitControls /> */}
        <Physics>
          <Char size={size.width}/>
        </Physics>
      </Canvas>
    </div>
  );
}

export default Scene;
