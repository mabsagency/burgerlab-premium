import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import burgerModel from '../../assets/burger.glb?url'

export function BurgerModel() {
  const mountRef = useRef(null)
  const modelRef = useRef(null)
  const baseScaleRef = useRef(1)
  const zoomRef = useRef(1)
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)
    camera.position.set(0, 0.72, 6.45)
    camera.lookAt(0, 0.22, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = false
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.HemisphereLight(0xfff1df, 0x6f4027, 2.5))

    const keyLight = new THREE.DirectionalLight(0xffffff, 4.2)
    keyLight.position.set(3, 5, 4)
    scene.add(keyLight)

    const rimLight = new THREE.DirectionalLight(0xff7a1a, 3)
    rimLight.position.set(-4, 2, -3)
    scene.add(rimLight)

    const fillLight = new THREE.PointLight(0xfff0d7, 18, 9)
    fillLight.position.set(0, -1.5, 2.4)
    scene.add(fillLight)

    const loader = new GLTFLoader()
    
    // Optionnel: Ajouter Draco compression si le modèle est compressé
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.7/')
    loader.setDRACOLoader(dracoLoader)
    
    loader.load(
      burgerModel,
      (gltf) => {
        const model = gltf.scene
        const box = new THREE.Box3().setFromObject(model)
        const size = box.getSize(new THREE.Vector3())
        const center = box.getCenter(new THREE.Vector3())
        const maxAxis = Math.max(size.x, size.y, size.z)

        model.position.sub(center)
        model.position.y += 0.34
        baseScaleRef.current = 2.85 / maxAxis
        model.scale.setScalar(baseScaleRef.current)
        model.rotation.set(0.04, -0.35, 0)
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false
            child.receiveShadow = false
            child.material.side = THREE.FrontSide
          }
        })

        scene.add(model)
        modelRef.current = model
        setStatus('ready')
      },
      undefined,
      () => setStatus('error'),
    )

    const resize = () => {
      const { clientWidth, clientHeight } = mount
      renderer.setSize(clientWidth, clientHeight, false)
      camera.aspect = clientWidth / Math.max(clientHeight, 1)
      camera.updateProjectionMatrix()
    }

    resize()
    window.addEventListener('resize', resize)

    let animationFrame = 0
    const animate = () => {
      animationFrame = requestAnimationFrame(animate)
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.004
        const targetScale = baseScaleRef.current * zoomRef.current
        modelRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08)
      }
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      renderer.dispose()
      mount.removeChild(renderer.domElement)
      scene.traverse((object) => {
        if (!object.isMesh) return
        object.geometry?.dispose()
        if (Array.isArray(object.material)) {
          object.material.forEach((material) => material.dispose())
        } else {
          object.material?.dispose()
        }
      })
    }
  }, [])

  const updateZoom = (delta) => {
    zoomRef.current = Math.min(1.22, Math.max(0.82, zoomRef.current + delta))
  }

  const resetView = () => {
    zoomRef.current = 1
    if (modelRef.current) {
      modelRef.current.rotation.set(0.04, -0.35, 0)
      modelRef.current.scale.setScalar(baseScaleRef.current)
    }
  }

  return (
    <>
      <div ref={mountRef} className="burger-canvas" aria-label="Burger 3D interactif">
        {status === 'loading' && <span className="model-status">Chargement 3D</span>}
        {status === 'error' && <span className="model-status">Modèle 3D indisponible</span>}
      </div>
      <div className="float-tools">
        <button type="button" aria-label="Vue burger 3D">◇</button>
        <button type="button" onClick={() => updateZoom(0.08)} aria-label="Zoom avant">＋</button>
        <button type="button" onClick={() => updateZoom(-0.08)} aria-label="Zoom arrière">−</button>
        <button type="button" onClick={resetView} aria-label="Réinitialiser la vue">↻</button>
      </div>
    </>
  )
}
