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
import { animated } from "react-spring"
import {
  Text,
  Box,
  useMatcapTexture,
  Octahedron,
  OrbitControls,
  useProgress,
  Html,
} from "@react-three/drei";
import { mirrorsData } from "./mirrorsData";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Model from "../../models/venus.gltf";
import "./style.css";


function Title({ layers = undefined, ...props }) {
  const group = useRef();
  const [event, setEvent] = useState(false);
  const x = window.matchMedia("(max-width: 650px)");
  x.addListener(setEvent);

  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);
  const textProps = {
    fontSize: 0.8,
    anchorX: "center",
    font: "Helvetica Neue",
    // "https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff",
    // font: "https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4WPBWnVac.woff",
  };

const AnimatedText = animated(Text)
  return (
    <group {...props} ref={group}>
      <AnimatedText
        native
        name="title-text"
        depthTest={false}
        material-toneMapped={false}
        material-color="#FFFFFF"
        position={[x.matches ? 0.5 : 0, 0, 20]}
        maxWidth={x.matches ? 6 : 12}
        textAlign={x.matches ? "left" : "center"}
        {...textProps}
        layers={layers}
      >
        AARON DIGGDON
      </AnimatedText>
    </group>
  );
}

function TitleCopies({ layers }) {
  const vertices = useMemo(() => {
    const y = new THREE.IcosahedronGeometry(6);
    return y.vertices;
  }, []);
  const AnimatedTitle = animated(Title);
  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title name={"titleCopy-" + i} position={vertex} layers={layers} />
      ))}
    </group>
  );
}

function Mirror({ sideMaterial, reflectionMaterial, args, ...props }) {
  const ref = useRef();
  useFrame(() => {
    // ref.current.rotation.y += (props.position[2] / 10000);
    ref.current.rotation.y += 0.001;
    ref.current.rotation.z += 0.01;
  });

  return (
    <Box
      {...props}
      ref={ref}
      args={args}
      material={[
        sideMaterial,
        sideMaterial,
        sideMaterial,
        sideMaterial,
        reflectionMaterial,
        reflectionMaterial,
      ]}
    />
  );
}

function Mirrors({ envMap }) {
  const sideMaterial = useResource();
  const reflectionMaterial = useResource();
  // const [thinFilmFresnelMap] = useState(new ThinFilmFresnelMap())
  return (
    <>
      <meshLambertMaterial
        ref={sideMaterial}
        // map={thinFilmFresnelMap}
        // color={0xaaaaa}
        // color={"#C0C0C0"}
      />
      <meshLambertMaterial
        ref={reflectionMaterial}
        // map={thinFilmFresnelMap}
        // color={0xd5555}
        // color={"#808080"}
        envMap={envMap}
      />
      {mirrorsData.mirrors.map((mirror, index) => (
        <Mirror
          key={`mirror-${index}`}
          {...mirror}
          sideMaterial={sideMaterial.current}
          reflectionMaterial={reflectionMaterial.current}
        />
      ))}
    </>
  );
}

function useRenderTarget() {
  const cubeCamera = useRef();
  const [renderTarget] = useState(
    new THREE.WebGLCubeRenderTarget(1024, {
      format: THREE.RGBAFormat,
      generateMipmaps: true,
    })
  );

  useFrame(({ gl, scene }) => {
    cubeCamera.current.update(gl, scene);
  });
  return [cubeCamera, renderTarget];
}

function MirrorScene({ }) {
  const group = useRef();
  const [cubeCamera, renderTarget] = useRenderTarget();
  const [ref, api] = useBox(() => ({ args: 0.01, mass: 50 }));

  useFrame((state) => {
    if (Math.sign(state.mouse.y) == -1) {
      ref.current.rotation.set(
        (Math.abs(state.mouse.y) * state.viewport.height) / 100,
        (state.mouse.x * state.viewport.width) / 100,
        0
      );
    }
    if (Math.sign(state.mouse.y) == 1) {
      ref.current.rotation.set(
        (-Math.abs(state.mouse.y) * state.viewport.height) / 100,
        (state.mouse.x * state.viewport.width) / 100,
        0
      );
    }
    if (Math.sign(state.mouse.y) == 0) {
      ref.current.rotation.set(
        (state.mouse.y * state.viewport.height) / 100,
        (state.mouse.x * state.viewport.width) / 100,
        0
      );
    }
  });
  const AnimatedTitle = animated(Title);
  return (
    <group ref={ref}>
      <Octahedron
        layers={[1]}
        name="background"
        args={[20, 4, 4]}
        position={[0, 0, -5]}
      >
        <meshMatcapMaterial
          side={THREE.BackSide}
          transparent
          opacity={0.3}
          color="#FFF"
        />
      </Octahedron>
      <cubeCamera
        layers={[11]}
        name="cubeCamera"
        ref={cubeCamera}
        args={[0.1, 100, renderTarget]}
        position={[0, 0, 5]}
      />
      <AnimatedTitle native name="title" />
      <TitleCopies layers={[11]} />
      <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
    </group>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: "#FFFFFF" }}>{progress}% loaded</span>
    </Html>
  );
}



function Char({size}) {

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
        geometry={scene.nodes["venus_mmGroup0-reduced1008"].geometry}
      >
        {/* <primitive attach="map" object={scene.scene} dispose={null} /> */}
        <a.meshStandardMaterial attach="material" color="#0018a1" />
        {/* color="#141414" */}
        {/* color="#0018a1" */}
        {/* color="#fdfdfd" */}
      </a.mesh>
    </group>
  );
}

function Scene({ size, scroll, blurValue }) {
  const style = {
    // filter: "blur(" + blurValue + ")",
    height: size.height,

    // transform: `translate3d(0, ${scroll*2}px, 0)`
  };
  return (
    <div id="scene" style={style} >
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 3], fov: 70 }}>
        {/* <color attach="background" args={["#0d0d0d"]} /> */}
        <ambientLight intensity={.3} />
        <pointLight position={[3, -4, -25]} intensity={size.width > 600 ? .5 : .5} />
        {/* <OrbitControls /> */}
        <Physics>
          <Char size={size.width}/>
          {/* <MirrorScene  /> */}
        </Physics>
      </Canvas>
    </div>
  );
}

export default Scene;
