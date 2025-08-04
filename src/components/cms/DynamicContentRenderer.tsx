import React from 'react'
import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import SocialProof from '@/components/SocialProof'
import ClientExperience from '@/components/ClientExperience'
import ProductLifecycle from '@/components/ProductLifecycle'
import PracticesStudios from '@/components/PracticesStudios'
import Differentiators from '@/components/Differentiators'
import InsightsCarousel from '@/components/InsightsCarousel'
import Footer from '@/components/Footer'
import { ContentItem } from '@/hooks/useContent'

interface DynamicContentRendererProps {
  contentItems: ContentItem[]
}

const componentMap = {
  Hero,
  ValueProposition,
  SocialProof,
  ClientExperience,
  ProductLifecycle,
  PracticesStudios,
  Differentiators,
  InsightsCarousel,
  Footer
}

const DynamicContentRenderer: React.FC<DynamicContentRendererProps> = ({ contentItems }) => {
  // Filter and sort published content
  const publishedContent = contentItems
    .filter(item => item.published)
    .sort((a, b) => {
      // Define component order
      const componentOrder = [
        'Hero', 'ValueProposition', 'SocialProof', 'ClientExperience',
        'ProductLifecycle', 'PracticesStudios', 'Differentiators', 
        'InsightsCarousel', 'Footer'
      ]
      return componentOrder.indexOf(a.component_type) - componentOrder.indexOf(b.component_type)
    })

  return (
    <div className="min-h-screen">
      {publishedContent.map((item) => {
        const Component = componentMap[item.component_type as keyof typeof componentMap]
        
        if (!Component) {
          console.warn(`Component ${item.component_type} not found in component map`)
          return null
        }

        // Pass content data as props to the component
        return (
          <Component 
            key={item.id} 
            {...item.content_data}
            _cmsData={{
              id: item.id,
              title: item.title,
              updatedAt: item.updated_at
            }}
          />
        )
      })}
    </div>
  )
}

export default DynamicContentRenderer