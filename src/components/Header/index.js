import React, { useRef, useState, useEffect, useMemo } from "react";
import * as THREE from 'three'
import { Canvas, useFrame, useResource } from "react-three-fiber";
import { Physics, useSphere } from "use-cannon";
import { Text, Box, useMatcapTexture, Octahedron, OrbitControls } from "@react-three/drei";
import { mirrorsData } from './mirrorsData'
import { ThinFilmFresnelMap } from './ThinFilmFresnelMap'
import "./style.css";
import { MeshMatcapMaterial } from "three";


const textProps = {
  fontSize: 2.5,
  position: [0,0, -3],
  font: 'https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff'
}

function Title() {
  return (
      <Text name="title-text" depthTest={false} material-toneMapped={false} material-color="#FFFFFF" {...textProps}>
        AARON DIGGDON
      </Text>
  )
}

function Mirrors({envMap}) {
  const [thinFilmFresnelMap] = useState(new ThinFilmFresnelMap())
  const sideMaterial = useResource();
  const reflectionMaterial = useResource();
  return (
    <>
      <meshLambertMaterial
        ref={sideMaterial}
        map={thinFilmFresnelMap}
        color={0xaaaaa}
      />
      <meshLambertMaterial
        ref={reflectionMaterial}
        map={thinFilmFresnelMap}
        envMap={envMap}
      />
      {mirrorsData.mirrors.map((mirror,index) => (
        <Mirror key={`mirror-${index}`} {...mirror} sideMaterial={sideMaterial.current} reflectionMaterial={reflectionMaterial.current} />
      ))}
    </>
  );
}

function Mirror({ sideMaterial, reflectionMaterial, args, ...props }) {
  const ref = useRef()

  useFrame(() => {
    ref.current.rotation.y += 0.001
    ref.current.rotation.z += 0.01
  })
  
  return (
    <Box {...props} 
      ref={ref} 
      args={args}
      material={[
        sideMaterial,
        sideMaterial,
        sideMaterial,
        sideMaterial,
        reflectionMaterial,
        reflectionMaterial
      ]}
    />
  )
}




function TitleCopies({ layers }) {
  const vertices = useMemo(() => {
    const y = new THREE.IcosahedronGeometry(8)
    return y.vertices
  }, [])

  return <group name="titleCopies">{vertices.map((vertex,i) => <Title name={"titleCopy-" + i} position={vertex} layers={layers} />)}</group>
}

function Scene() {
  const [renderTarget] = useState(new THREE.WebGLCubeRenderTarget(1024, { format: THREE.RGBAFormat, generateMipmaps: true }))
  const cubeCamera = useRef()

  useFrame(({ gl, scene }) => {
    cubeCamera.current.update(gl, scene)
  })

  return (
    <>
        {/* <Octahedron layers={[11]} name="background" args={[20, 4, 4]} position={[0, 0, -5]}>
          <meshMatcapMaterial side={THREE.BackSide} transparent opacity={0.3} color="#FFFFFF" />
        </Octahedron> */}
        <cubeCamera
          layers={[11]}
          name="cubeCamera"
          ref={cubeCamera}
          args={[0.1, 100, renderTarget]}
          position={[0, 0, 5]}
        />
        <Title name="title" position={[0, 0, -10]} />
        <TitleCopies layers={[11]} />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
    </>
  )
}

function Header(props) {
  return (
    <div id="header">
      <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
        {/* <ambientLight intensity={0.3} /> */}
        {/* <pointLight position={[10, 10, 5]} /> */}
        <OrbitControls />
        <Scene/>
      </Canvas>
    </div>
  );
}

export default Header;


// function Ball({ args = [5, 50, 50] }) {
//   const [ref] = useSphere(() => ({ args: 0.5, mass: 0.2 }));
//   return (
//     <mesh ref={ref}>
//       <sphereBufferGeometry args={args} />
//       <meshStandardMaterial color="white" />
//     </mesh>
//   );
// }