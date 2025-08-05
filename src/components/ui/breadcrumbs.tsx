import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  className?: string;
  items?: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className, items }) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from URL if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    // Add home
    breadcrumbs.push({ label: 'Home', href: '/' });
    
    // Build breadcrumbs from path segments
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Convert segment to readable label
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        label,
        href: currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbItems = items || generateBreadcrumbs();
  
  if (breadcrumbItems.length <= 1) {
    return null; // Don't show breadcrumbs on home page
  }
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn(
        "flex items-center space-x-2 text-sm text-muted-foreground mb-6",
        className
      )}
    >
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={item.href}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
          )}
          {index === 0 ? (
            <Link 
              to={item.href}
              className="flex items-center hover:text-foreground transition-colors"
            >
              <Home className="h-4 w-4 mr-1" />
              {item.label}
            </Link>
          ) : index === breadcrumbItems.length - 1 ? (
            <span className="text-foreground font-medium">
              {item.label}
            </span>
          ) : (
            <Link 
              to={item.href}
              className="hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};