import React, { useEffect, useRef, useState } from 'react';
import { ZapparCamera, InstantTracker, ZapparCanvas } from '@zappar/zappar-react-three-fiber';
import { Environment, OrbitControls, Sparkles, Stars, Stats } from '@react-three/drei';
import { isMobile } from 'react-device-detect';
import { Canvas } from '@react-three/fiber';
import { Bloom, EffectComposer, N8AO, SSAO } from "@react-three/postprocessing"
import { Scene } from './components/organisms/Scene';
import Iphone from "./assets/img/iphone.png"


function App() {
  let [placementMode, setPlacementMode] = useState(true);
  const ref = useRef()

  useEffect(() => {
    if (ref.current) {
      // ref.current.setPointerCapture()
    }
  }, [ref.current])
  return (
    <>
      {isMobile ? <>

        <ZapparCanvas>
          <ZapparCamera id={undefined} matrixWorldInverse={undefined} projectionMatrix={undefined} projectionMatrixInverse={undefined} isCamera={undefined} getWorldDirection={undefined} uuid={undefined} name={undefined} type={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} visible={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
          <InstantTracker placementMode={placementMode} placementCameraOffset={[0, 0, -5]} id={undefined} getWorldDirection={undefined} uuid={undefined} name={undefined} type={undefined} parent={undefined} modelViewMatrix={undefined} normalMatrix={undefined} matrixWorld={undefined} matrixAutoUpdate={undefined} matrixWorldAutoUpdate={undefined} matrixWorldNeedsUpdate={undefined} visible={undefined} castShadow={undefined} receiveShadow={undefined} frustumCulled={undefined} renderOrder={undefined} userData={undefined} customDepthMaterial={undefined} customDistanceMaterial={undefined} isObject3D={undefined} onBeforeRender={undefined} onAfterRender={undefined} applyMatrix4={undefined} applyQuaternion={undefined} setRotationFromAxisAngle={undefined} setRotationFromEuler={undefined} setRotationFromMatrix={undefined} setRotationFromQuaternion={undefined} rotateOnAxis={undefined} rotateOnWorldAxis={undefined} rotateX={undefined} rotateY={undefined} rotateZ={undefined} translateOnAxis={undefined} translateX={undefined} translateY={undefined} translateZ={undefined} localToWorld={undefined} worldToLocal={undefined} lookAt={undefined} add={undefined} remove={undefined} removeFromParent={undefined} clear={undefined} getObjectById={undefined} getObjectByName={undefined} getObjectByProperty={undefined} getWorldPosition={undefined} getWorldQuaternion={undefined} getWorldScale={undefined} raycast={undefined} traverse={undefined} traverseVisible={undefined} traverseAncestors={undefined} updateMatrix={undefined} updateWorldMatrix={undefined} toJSON={undefined} clone={undefined} copy={undefined} addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} isGroup={undefined}>
            <mesh>
              <sphereBufferGeometry />
              <meshStandardMaterial color="hotpink" />
            </mesh>
          </InstantTracker>
          <Environment preset='dawn' />
        </ZapparCanvas>
        <div
          id="zappar-placement-ui"
          onClick={() => {
            setPlacementMode((currentPlacementMode) => !currentPlacementMode);
          }}
          onKeyDown={() => {
            setPlacementMode((currentPlacementMode) => !currentPlacementMode);
          }}
          role="button"
          tabIndex={0}
        >
          Tap here to
          {placementMode ? ' place ' : ' pick up '}
          the object
        </div>
      </>
        :
        <div style={{ background: 'rgb(200,200,200)', height: '100vh', width: 'full', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', height: "580px", width: "275px", borderRadius: '2rem', overflow: 'hidden' }}>
                <Canvas>
                  <color attach="background" args={['#202030']} />
                  <OrbitControls />
                  <Scene />
                  <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                  <Sparkles count={100} scale={10 * 2} size={1} speed={0.4} />
                  <Stats />
                  <EffectComposer disableNormalPass multisampling={1}>
                    <Bloom intensity={1.5} radius={.5} mipmapBlur luminanceThreshold={.7} />
                    <N8AO color="red" aoRadius={2} intensity={1} />
                    <SSAO />
                  </EffectComposer>
                </Canvas>
              </div>
            </div>
            <img src={Iphone} style={{ maxWidth: "300px", filter: 'filter: drop-shadow(20px 20px 10px green)' }} />
          </div>
        </div>
      }

    </>
  );
}

export default App;
