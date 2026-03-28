import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function F1Car() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} scale={0.8}>
        {/* Body */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[3.2, 0.3, 1]} />
          <meshStandardMaterial color="#e10600" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Nose cone */}
        <mesh position={[2, 0.15, 0]} rotation={[0, 0, Math.PI / 2]}>
          <coneGeometry args={[0.5, 1.2, 4]} />
          <meshStandardMaterial color="#e10600" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Cockpit */}
        <mesh position={[0.2, 0.45, 0]}>
          <boxGeometry args={[0.8, 0.35, 0.6]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Halo */}
        <mesh position={[0.2, 0.6, 0]}>
          <torusGeometry args={[0.35, 0.03, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Rear wing */}
        <mesh position={[-1.8, 0.55, 0]}>
          <boxGeometry args={[0.1, 0.35, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[-1.8, 0.75, 0]}>
          <boxGeometry args={[0.3, 0.05, 1.3]} />
          <meshStandardMaterial color="#e10600" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Front wing */}
        <mesh position={[2.2, 0, 0]}>
          <boxGeometry args={[0.4, 0.05, 1.4]} />
          <meshStandardMaterial color="#e10600" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Wheels */}
        {[
          [1.2, -0.05, 0.65],
          [1.2, -0.05, -0.65],
          [-1.1, -0.05, 0.65],
          [-1.1, -0.05, -0.65],
        ].map((pos, i) => (
          <Wheel key={i} position={pos} />
        ))}
        {/* Side pods */}
        <mesh position={[0, 0.2, 0.6]}>
          <boxGeometry args={[1.5, 0.25, 0.3]} />
          <meshStandardMaterial color="#c40500" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.2, -0.6]}>
          <boxGeometry args={[1.5, 0.25, 0.3]} />
          <meshStandardMaterial color="#c40500" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  )
}

function Wheel({ position }) {
  const wheelRef = useRef()

  useFrame((state) => {
    if (wheelRef.current) {
      wheelRef.current.rotation.x += 0.1
    }
  })

  return (
    <mesh ref={wheelRef} position={position} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[0.18, 0.18, 0.15, 16]} />
      <meshStandardMaterial color="#222" metalness={0.3} roughness={0.8} />
    </mesh>
  )
}

function TrackParticles() {
  const count = 200
  const meshRef = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      const positions = meshRef.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        positions[i * 3] -= 0.05
        if (positions[i * 3] < -10) {
          positions[i * 3] = 10
        }
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#e10600" transparent opacity={0.6} />
    </points>
  )
}

function SpeedLines() {
  const linesRef = useRef()
  const count = 50

  const positions = useMemo(() => {
    const pos = []
    for (let i = 0; i < count; i++) {
      const y = (Math.random() - 0.5) * 6
      const z = (Math.random() - 0.5) * 8
      const x = (Math.random() - 0.5) * 15
      const length = 0.5 + Math.random() * 1.5
      pos.push(
        new THREE.Vector3(x, y, z),
        new THREE.Vector3(x - length, y, z)
      )
    }
    return pos
  }, [])

  useFrame(() => {
    if (linesRef.current) {
      const posArr = linesRef.current.geometry.attributes.position.array
      for (let i = 0; i < count * 2; i++) {
        posArr[i * 3] -= 0.15
        if (posArr[i * 3] < -10) {
          posArr[i * 3] += 20
        }
      }
      linesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  const linePositions = useMemo(() => {
    const arr = new Float32Array(count * 6)
    positions.forEach((v, i) => {
      arr[i * 3] = v.x
      arr[i * 3 + 1] = v.y
      arr[i * 3 + 2] = v.z
    })
    return arr
  }, [positions])

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count * 2}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#e10600" transparent opacity={0.15} />
    </lineSegments>
  )
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshStandardMaterial
        color="#e10600"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  )
}

function F1Scene() {
  return (
    <Canvas
      camera={{ position: [4, 2, 5], fov: 50 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <fog attach="fog" args={['#0a0a0a', 5, 20]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-3, 2, -3]} intensity={0.4} color="#e10600" />
      <pointLight position={[0, 3, 0]} intensity={0.5} color="#ffd700" />
      <F1Car />
      <TrackParticles />
      <SpeedLines />
      <GridFloor />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  )
}

export default F1Scene
