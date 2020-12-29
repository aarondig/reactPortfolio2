import React, { useRef, useState, useEffect, useMemo, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useResource } from "react-three-fiber";
import { Physics, useBox } from "use-cannon";
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
import font from "../../../src/fonts/Metropolis-ExtraBold.otf";
import "./style.css";



function Title({layers = undefined, titlePosi, ...props}) {
  const group = useRef();
  // const [titlePosition, setTitlePosition]= useState(3);
  // setTitlePosition(titlePosi);
  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);
  const textProps = {
    fontSize: 0.8,
    position: [0, 0, titlePosi],
    anchorX: "center",
    font: font,
      // "https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff",
    // font: "https://fonts.gstatic.com/s/kanit/v7/nKKU-Go6G5tXcr4WPBWnVac.woff",
  };
  console.log(titlePosi)
  return (
    <group {...props} ref={group}>
      <Text
        name="title-text"
        depthTest={false}
        material-toneMapped={false}
        material-color="#FFFFFF"
        {...textProps}
        layers={layers}
      >
        AARONDIGGDON
      </Text>
    </group>
  );
}

function TitleCopies({ layers }) {
  const vertices = useMemo(() => {
    const y = new THREE.IcosahedronGeometry(6);
    return y.vertices;
  }, []);

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title name={"titleCopy-" + i} position={vertex} layers={layers} />
      ))}
    </group>
  );
}

function Mirrors({ envMap }) {
  const sideMaterial = useResource();
  const reflectionMaterial = useResource();
  return (
    <>
      <meshLambertMaterial
        ref={sideMaterial}
        // map={thinFilmFresnelMap}
        color={0xaaaaa}
      />
      <meshLambertMaterial
        ref={reflectionMaterial}
        // map={thinFilmFresnelMap}
        color={0xd5555}
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

function Mirror({ sideMaterial, reflectionMaterial, args, ...props }) {
  const ref = useRef();

  useFrame(() => {
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

function Scene({titlePosi}) {
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
      <Title name="title" position={[0, 0, -9]}  titlePosi={titlePosi}/>
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

function Header({blur, blurValue, titlePosi}) {
  const style = {
    filter: "blur("+ blurValue +")",
  }
  
  return (
    <div id="header" style={style}>
      <Canvas concurrent shadowMap camera={{ position: [0, 0, 3], fov: 70 }}>
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={0.4} />
        <Suspense fallback={<Loader />}>
          {/* <pointLight position={[10, 10, 5]} /> */}
          {/* <OrbitControls /> */}
          <Physics>
            <Scene titlePosi={titlePosi} />
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Header;
