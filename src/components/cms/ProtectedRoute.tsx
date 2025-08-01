import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 bg-white rounded-sm"></div>
          </div>
          <p className="text-foreground-white">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/cms/login" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute