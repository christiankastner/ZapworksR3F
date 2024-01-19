import { Environment } from '@react-three/drei';
import { FC } from 'react';
import { Text } from '../../molecules/text';

type SceneProps = {
  //
};

/**
 * 
 */
export const Scene: FC<SceneProps> = (props) => {
  return (
    <>
      <group position={[0, 3, 0]}>

        <Text />
      </group>
      <Environment preset='dawn' />
    </>
  );
};
