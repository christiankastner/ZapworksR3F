import React, { useState } from 'react';
import { ZapparCamera, InstantTracker, ZapparCanvas } from '@zappar/zappar-react-three-fiber';
import { Environment } from '@react-three/drei';


function App() {
    let [placementMode, setPlacementMode] = useState(true);
    return (
      <>
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
    );
}

export default App;
