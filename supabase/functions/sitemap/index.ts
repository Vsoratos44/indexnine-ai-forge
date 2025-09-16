import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const currentDate = new Date().toISOString();
    
    const pages = [
      // Main pages
      { url: '/', lastmod: currentDate, priority: '1.0', changefreq: 'daily' },
      { url: '/about', lastmod: currentDate, priority: '0.9', changefreq: 'monthly' },
      { url: '/services', lastmod: currentDate, priority: '0.9', changefreq: 'weekly' },
      { url: '/insights', lastmod: currentDate, priority: '0.8', changefreq: 'daily' },
      { url: '/contact', lastmod: currentDate, priority: '0.7', changefreq: 'monthly' },
      
      // Service pages
      { url: '/services/ai', lastmod: currentDate, priority: '0.9', changefreq: 'weekly' },
      { url: '/services/data-engineering', lastmod: currentDate, priority: '0.9', changefreq: 'weekly' },
      { url: '/services/quality-engineering', lastmod: currentDate, priority: '0.9', changefreq: 'weekly' },
      { url: '/services/custom-software', lastmod: currentDate, priority: '0.9', changefreq: 'weekly' },
      { url: '/services/consulting', lastmod: currentDate, priority: '0.9', changefreq: 'weekly' },
      
      // Studios
      { url: '/studios/ai-studio', lastmod: currentDate, priority: '0.8', changefreq: 'weekly' },
      { url: '/studios/data-engineering', lastmod: currentDate, priority: '0.8', changefreq: 'weekly' },
      { url: '/studios/quality-engineering', lastmod: currentDate, priority: '0.8', changefreq: 'weekly' },
      
      // Engagement Models
      { url: '/engagement/project-based', lastmod: currentDate, priority: '0.8', changefreq: 'weekly' },
      { url: '/engagement/outcome-based', lastmod: currentDate, priority: '0.8', changefreq: 'weekly' },
      { url: '/engagement/dedicated-teams', lastmod: currentDate, priority: '0.8', changefreq: 'weekly' },
      { url: '/engagement/innovation-lab', lastmod: currentDate, priority: '0.8', changefreq: 'weekly' },
      { url: '/engagement/enterprise', lastmod: currentDate, priority: '0.8', changefreq: 'weekly' },
      
      // Insights
      { url: '/insights/blogs', lastmod: currentDate, priority: '0.7', changefreq: 'daily' },
      { url: '/insights/case-studies', lastmod: currentDate, priority: '0.7', changefreq: 'daily' },
      { url: '/insights/ebooks', lastmod: currentDate, priority: '0.7', changefreq: 'weekly' },
      
      // Company
      { url: '/company/about', lastmod: currentDate, priority: '0.7', changefreq: 'monthly' },
      { url: '/company/careers', lastmod: currentDate, priority: '0.6', changefreq: 'weekly' },
      { url: '/company/who-we-are', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      
      // Events
      { url: '/events', lastmod: currentDate, priority: '0.7', changefreq: 'weekly' },
      { url: '/events/platform', lastmod: currentDate, priority: '0.6', changefreq: 'weekly' },
      { url: '/events/admin-console', lastmod: currentDate, priority: '0.6', changefreq: 'weekly' },
      { url: '/events/mobile-app', lastmod: currentDate, priority: '0.6', changefreq: 'weekly' },
      
      // Blog Posts
      { url: '/insights/blog/robot-framework-vs-playwright', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/blog/agentic-ai-enterprise-future', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/blog/ai-change-management-playbook', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/blog/ai-assisted-software-engineering', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/blog/microservices-vs-monolith', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/blog/modern-analytics-platform', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/blog/cloud-infrastructure-automation-terraform', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      
      // Case Studies
      { url: '/insights/case-studies/genesys', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/case-studies/cygeniq', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/case-studies/tripjack', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/case-studies/annotate', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/case-studies/si', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
      { url: '/insights/case-studies/zilla', lastmod: currentDate, priority: '0.6', changefreq: 'monthly' },
    ];
    
    // Get the current domain from the request
    const url = new URL(req.url);
    const baseUrl = `${url.protocol}//${url.host}`;
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    
    console.log('Generated sitemap with', pages.length, 'pages');
    
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600',
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate sitemap' }), 
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders
        } 
      }
    );
  }
});