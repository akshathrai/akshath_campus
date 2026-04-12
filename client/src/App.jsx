import { Routes, Route, Navigate } from 'react-router-dom'
import Home      from './pages/Home'
import Login     from './pages/Login'
import Register  from './pages/Register'
import Dashboard from './pages/Dashboard'
import Lab       from './pages/Lab'
import Workspace from './pages/Workspace'
import CampusWorld from "./pages/CampusWorld";
import ModuleLevels from "./pages/ModuleLevels"
import Python from "./pages/python"


export default function App() {
  return (
    <Routes>
      <Route path="/"          element={<Home />} />
      <Route path="/login"     element={<Login />} />
      <Route path="/register"  element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/labs"      element={<Navigate to="/dashboard" replace />} />
      <Route path="/labs/:labId" element={<Lab />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/campus" element={<CampusWorld />} />
      <Route path="/labs/python/module/:id" element={<ModuleLevels />} />
      <Route path="/labs/python" element={<Python />} />
    
    </Routes>
  )
}
