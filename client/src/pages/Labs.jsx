import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./CampusWorld.css"

import pythonImg from "../assets/campus/python.png"
import javaImg from "../assets/campus/java.png"
import battleImg from "../assets/campus/battle.png"
import scoreImg from "../assets/campus/scorecard.png"
import codeCoreImg from "../assets/campus/codecore.png"
import collegeImg from "../assets/campus/college.png"

export default function Labs() {
  const containerRef = useRef(null)
  const bgRef = useRef(null)
  const [baseSize, setBaseSize] = useState(null) // { w, h }
  const [scale, setScale] = useState(1)
  const ZOOM = 1

  useEffect(() => {
    if (!baseSize?.w || !baseSize?.h) return
    const el = containerRef.current
    if (!el) return

    const ro = new ResizeObserver(() => {
      const { width, height } = el.getBoundingClientRect()
      const fit = Math.min(width / baseSize.w, height / baseSize.h)
      const next = Math.min(fit * ZOOM, 2)
      setScale(Number.isFinite(next) && next > 0 ? next : 1)
    })

    ro.observe(el)
    return () => ro.disconnect()
  }, [baseSize])

  return (
    <div className="page">
      <Header />

      <div className="campus-container" ref={containerRef}>
        <div className="campus-stage-wrap">
          <div
            className="campus-stage"
            style={
              baseSize
                ? {
                    width: `${baseSize.w}px`,
                    height: `${baseSize.h}px`,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    transformOrigin: "center center",
                  }
                : undefined
            }
          >
            <img
              ref={bgRef}
              src={collegeImg}
              className="campus-bg"
              alt="Campus"
              onLoad={(e) => {
                const img = e.currentTarget
                const w = img.naturalWidth || 0
                const h = img.naturalHeight || 0
                if (w && h) setBaseSize({ w, h })
              }}
            />

  <Link to="/labs/codecore">
    <img src={codeCoreImg} className="building codecore" alt="CodeCore Lab"/>
  </Link>

  <Link to="/labs/python">
    <img src={pythonImg} className="building python" alt="Python Lab"/>
  </Link>

  <Link to="/labs/java">
    <img src={javaImg} className="building java" alt="Java Lab"/>
  </Link>

  <Link to="/dashboard">
    <img src={scoreImg} className="building scorecard" alt="Scoreboard"/>
  </Link>

  <Link to="/dashboard">
    <img src={battleImg} className="building battle" alt="Battle Arena"/>
  </Link>

          </div>
        </div>

      </div>

    
    </div>
  )
}