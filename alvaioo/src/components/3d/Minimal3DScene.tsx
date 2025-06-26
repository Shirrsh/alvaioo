
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Dodecahedron } from '@react-three/drei';
import * as THREE from 'three';

interface MeshProps {
  position?: [number, number, number];
  color?: string;
  shape?: 'box' | 'sphere' | 'dodecahedron';
  wireframe?: boolean;
}

const InteractiveMesh: React.FC<MeshProps> = ({ position = [0, 0, 0], color = '#6366F1', shape = 'box', wireframe = false }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case 'sphere':
        return <sphereGeometry args={[1, 32, 32]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />;
      case 'box':
      default:
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
    }
  }, [shape]);

  return (
    <mesh
      position={position}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      {geometry}
      <meshStandardMaterial color={hovered ? 'hotpink' : color} wireframe={wireframe} emissive={hovered ? 'hotpink' : color} emissiveIntensity={hovered ? 0.2 : 0.05} />
    </mesh>
  );
};

interface Minimal3DSceneProps {
  meshColor?: string;
  meshShape?: 'box' | 'sphere' | 'dodecahedron';
  enableControls?: boolean;
  cameraPosition?: [number, number, number];
  canvasStyle?: React.CSSProperties;
   wireframe?: boolean;
}

const Minimal3DScene: React.FC<Minimal3DSceneProps> = ({ 
  meshColor = '#8B5CF6', 
  meshShape = 'dodecahedron', 
  enableControls = false, 
  cameraPosition = [0, 0, 5],
  canvasStyle,
  wireframe = false
}) => {
  return (
    <div style={{ height: '200px', width: '100%', borderRadius: '8px', overflow: 'hidden', ...canvasStyle }}>
      <Canvas camera={{ position: cameraPosition, fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -5, -10]} intensity={0.5} color="lightblue" />
        <InteractiveMesh color={meshColor} shape={meshShape} wireframe={wireframe}/>
        {enableControls && <OrbitControls />}
      </Canvas>
    </div>
  );
};

export default Minimal3DScene;
