import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowLeft, Calendar } from "lucide-react";
import SEOOptimizedLayout from "@/components/SEOOptimizedLayout";
import OptimizedImage from "@/components/OptimizedImage";
import blogImg2 from "@/assets/images/blog-img2.webp";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";

const BlogPost = () => {
  const { slug } = useParams();

  // Blog posts data - this should eventually come from CMS
  const blogPosts = {
    "robot-framework-vs-playwright-automation": {
      id: "robot-framework-vs-playwright-automation",
      title:
        "Robot Framework vs. Playwright: The Test Automation Showdown Your Business Can't Ignore",
      content: `
        <div class="prose prose-lg max-w-none">
          <p class="text-xl text-foreground-muted mb-8 leading-relaxed">In today's competitive landscape, cutting corners on QA isn't an option. Discover which modern test automation framework—Robot Framework or Playwright—is right for your business stage and team.</p>
          
          <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">At a Glance: Robot Framework vs. Playwright Comparison</h2>
          <p class="text-foreground-muted mb-6">When choosing between Robot Framework and Playwright, understanding your business context is crucial. Both frameworks offer distinct advantages depending on your organization's size, technical expertise, and automation goals.</p>
          
          <div class="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border mb-8">
            <h3 class="text-2xl font-bold text-foreground mb-4">Key Decision Factors</h3>
            <ul class="space-y-3 text-foreground-muted">
              <li>• <strong>Team expertise level:</strong> Robot Framework excels with mixed technical teams</li>
              <li>• <strong>Scalability needs:</strong> Playwright offers superior performance for large-scale testing</li>
              <li>• <strong>Integration requirements:</strong> Both support CI/CD, but with different approaches</li>
              <li>• <strong>Maintenance overhead:</strong> Consider long-term support and updates</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">Robot Framework: The Startup's Secret Weapon for Agile Quality</h2>
          <p class="text-foreground-muted mb-6">Robot Framework shines in environments where speed to market and collaborative testing are priorities. Its keyword-driven approach enables non-technical stakeholders to contribute to test creation and maintenance.</p>
          
          <div class="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border mb-8">
            <h3 class="text-2xl font-bold text-foreground mb-4">Robot Framework Advantages</h3>
            <ul class="space-y-3 text-foreground-muted">
              <li>• <strong>Natural language syntax:</strong> Business analysts can write and understand tests</li>
              <li>• <strong>Extensive library ecosystem:</strong> Pre-built keywords for common testing scenarios</li>
              <li>• <strong>Detailed reporting:</strong> Built-in HTML reports with screenshots and logs</li>
              <li>• <strong>Cross-platform support:</strong> Works seamlessly across web, mobile, and API testing</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">Playwright: The Enterprise Powerhouse for High-Velocity Teams</h2>
          <p class="text-foreground-muted mb-6">For organizations with dedicated QA engineers and complex testing requirements, Playwright offers unmatched performance and modern web testing capabilities.</p>
          
          <div class="bg-gradient-card backdrop-blur-xl rounded-2xl p-8 border border-glass-border mb-8">
            <h3 class="text-2xl font-bold text-foreground mb-4">Playwright Advantages</h3>
            <ul class="space-y-3 text-foreground-muted">
              <li>• <strong>Lightning-fast execution:</strong> Parallel testing across multiple browsers</li>
              <li>• <strong>Modern web support:</strong> Native handling of SPAs, PWAs, and modern frameworks</li>
              <li>• <strong>Auto-wait capabilities:</strong> Intelligent waiting reduces flaky tests</li>
              <li>• <strong>Network interception:</strong> Mock APIs and test offline scenarios</li>
            </ul>
          </div>

          <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">Don't Settle for Good Enough: A Partner in Quality Engineering</h2>
          <p class="text-foreground-muted mb-6">The choice between Robot Framework and Playwright isn't just about technical features—it's about aligning your testing strategy with your business goals and team capabilities.</p>
          
          <div class="bg-gradient-hero rounded-2xl p-8 text-center mb-8">
            <h3 class="text-2xl font-bold text-foreground-white mb-4">Ready to Transform Your QA Process?</h3>
            <p class="text-foreground-white/80 mb-6">Our Quality Engineering experts can help you choose and implement the right automation framework for your specific needs.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="bg-white text-brand-primary px-8 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Book a Free QA Consulting Session
              </button>
              <button class="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Download QA Framework Guide
              </button>
            </div>
          </div>
        </div>
      `,
      author: "QA Engineering Team",
      publishDate: "January 20, 2025",
      readTime: "10 min read",
      category: "Quality Assurance",
      excerpt:
        "In today's competitive landscape, cutting corners on QA isn't an option. Discover which modern test automation framework—Robot Framework or Playwright—is right for your business stage and team.",
      tags: [
        "Test Automation",
        "Robot Framework",
        "Playwright",
        "QA Process",
        "Continuous Testing",
      ],
    },
    "agentic-ai-enterprise-future": {
      id: "agentic-ai-enterprise-future",
      title:
        "The Future Is Agentic. Is Your Enterprise Ready for What Comes Next?",
      content: `
        <div class="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-16">
          <p class="font-semibold text-xl">The enterprise technology landscape is buzzing with AI agents. Amazon's AgentCore toolkit signals a seismic shift toward autonomous systems. Learn strategic adoption with extreme caution.</p>
          
          <h2 class="font-semibold text-2xl text-foreground-dark pt-8">Beyond the Hype: What an Enterprise Agent Truly Means</h2>
          <p class="text-foreground-dark-muted mb-6">AI agents represent more than just automated workflows—they're autonomous systems capable of reasoning, planning, and executing complex business processes without human intervention.</p>
          
          <div class="p-8 rounded-3xl bg-foreground-dark/5">
            <h3 class="text-xl font-semibold text-foreground-dark mb-4">Core Agent Capabilities</h3>
            <ul class="space-y-3 text-foreground-dark-muted">
              <li><strong class="font-semibold">Autonomous decision-making:</strong> Agents can evaluate situations and choose optimal actions</li>
              <li><strong class="font-semibold">Multi-step planning:</strong> Breaking down complex goals into executable sub-tasks</li>
              <li><strong class="font-semibold">Environment interaction:</strong> Seamless integration with existing enterprise systems</li>
              <li><strong class="font-semibold">Learning and adaptation:</strong> Continuous improvement through experience</li>
            </ul>
          </div>
        </div>
      `,
      author: "AI Strategy Team",
      publishDate: "January 15, 2025",
      readTime: "8 min read",
      category: "AI & Technology",
      excerpt:
        "The enterprise technology landscape is buzzing with AI agents. Amazon's AgentCore toolkit signals a seismic shift toward autonomous systems. Learn strategic adoption with extreme caution.",
      tags: [
        "AI Agents",
        "Enterprise Technology",
        "AWS AgentCore",
        "Digital Transformation",
      ],
    }
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

  if (!currentPost) {
    return (
      <SEOOptimizedLayout
        title="Blog Post Not Found"
        description="The requested blog post could not be found."
        schemaType="WebPage"
      >
        <div className="container mx-auto py-24 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/insights/blogs">Back to Blogs</Link>
          </Button>
        </div>
      </SEOOptimizedLayout>
    );
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" },
    { name: "Blogs", url: "/insights/blogs" },
    { name: currentPost.title, url: `/insights/blog/${slug}` }
  ];

  return (
    <SEOOptimizedLayout
      title={currentPost.title}
      description={currentPost.excerpt}
      keywords={currentPost.tags.join(", ")}
      canonicalUrl={`https://indexnine.com/insights/blog/${slug}`}
      ogImage="https://indexnine.com/images/blog-og.jpg"
      author={currentPost.author}
      publishedDate={new Date(currentPost.publishDate).toISOString()}
      articleSection={currentPost.category}
      readingTime={currentPost.readTime}
      schemaType="BlogPosting"
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-background bg-cover bg-center"
        style={{ backgroundImage: `url(${BlogDetailsBg})` }}
      >
        <div className="relative z-10 container mx-auto pt-36 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <Link
              to="/insights/blogs"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Link>

            {/* Article Header */}
            <header>
              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {currentPost.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {currentPost.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  {currentPost.excerpt}
                </p>
              </div>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{currentPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{currentPost.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{currentPost.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {currentPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <OptimizedImage
                src={blogImg2}
                alt={`Featured image for ${currentPost.title}`}
                width={1200}
                height={630}
                className="w-full rounded-2xl shadow-2xl"
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto py-12">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm">
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    Facebook
                  </Button>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-2">
                  Published by {currentPost.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {currentPost.publishDate} • {currentPost.readTime}
                </p>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Articles CTA */}
      <section className="bg-secondary/50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Explore More Insights</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover more articles on AI, technology trends, and digital transformation strategies.
          </p>
          <Button asChild size="lg">
            <Link to="/insights/blogs">View All Blog Posts</Link>
          </Button>
        </div>
      </section>
    </SEOOptimizedLayout>
  );
};

export default BlogPost;