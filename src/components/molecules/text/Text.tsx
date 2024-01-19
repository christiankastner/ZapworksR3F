import { useGLTF } from '@react-three/drei';
import { FC } from 'react';
import TextModel from "../../../assets/models/just-text.glb"
import * as THREE from "three"

type TextProps = {
  //
};

/**
 * 
 */
export const Text: FC<TextProps> = (props) => {
  const { nodes } = useGLTF(TextModel)
  const material = new THREE.MeshStandardMaterial({
    roughness: .5,
    metalness: .5,
    emissiveIntensity: 1,
    emissive: "rgb(255,255,255)",
    color: "rgb(255,255,255)",
    transparent: true
  })
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Text.geometry} material={material} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text001.geometry} material={material} position={[0, 0, -0.2]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text002.geometry} material={material} position={[0, 0, -0.4]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text003.geometry} material={material} position={[0, 0, -0.6]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text003.geometry} material={material} position={[0, 0, -0.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text004.geometry} material={material} position={[0, 0, -1.0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text005.geometry} material={material} position={[0, 0, -1.2]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text006.geometry} material={material} position={[0, 0, -1.4]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text007.geometry} material={material} position={[0, 0, -1.6]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text008.geometry} material={material} position={[0, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text009.geometry} material={material} position={[0, 0, -2]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Text010.geometry} material={material} position={[0, 0, -2.2]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
};
