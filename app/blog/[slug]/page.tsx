import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  Globe, 
  Headphones, 
  Cloud, 
  BarChart3, 
  ShoppingCart,
  Wrench,
  Zap,
  User,
  Share2,
  Bookmark,
  MessageSquare,
  ChevronRight
} from "lucide-react"
import { notFound } from "next/navigation"

const categories = [
  { name: "Power Pages", icon: Globe },
  { name: "Customer Service", icon: Headphones },
  { name: "Azure", icon: Cloud },
  { name: "Marketing", icon: BarChart3 },
  { name: "Sales", icon: ShoppingCart },
  { name: "Field Service", icon: Wrench },
  { name: "Power Automate", icon: Zap },
]

const getCategoryIcon = (category: string) => {
  const found = categories.find(c => c.name === category)
  return found ? found.icon : Globe
}

const allPosts = [
  {
    title: "Getting Started with Power Pages Portals",
    description: "Learn how to build customer-facing portals using Power Pages and integrate them with Dynamics 365. This comprehensive guide covers everything from initial setup to advanced customizations.",
    category: "Power Pages",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    slug: "getting-started-power-pages",
    featured: true,
    author: "Sarah Johnson",
    authorRole: "Senior D365 Consultant",
    content: `
## Introduction

Power Pages is a secure, enterprise-grade, low-code software as a service (SaaS) platform for creating, hosting, and administering modern external-facing business websites. Whether you're a low-code maker or a professional developer, Power Pages enables you to rapidly design, configure, and publish websites that seamlessly work across web browsers and devices.

## Why Power Pages?

Power Pages represents a significant evolution in how organizations can create and manage their external-facing web presence. Here are the key benefits:

- **Low-code development**: Build professional websites without extensive coding knowledge
- **Seamless D365 integration**: Connect directly to your Dynamics 365 data
- **Enterprise security**: Built-in security features protect your data and users
- **Responsive design**: Automatically adapts to any device or screen size

## Getting Started

### Step 1: Create Your First Portal

To begin, navigate to the Power Pages maker portal and select "Create a site." You'll be presented with several templates designed for different use cases:

1. **Blank site**: Start from scratch with full customization control
2. **Customer self-service**: Perfect for support portals
3. **Partner portal**: Ideal for B2B collaboration
4. **Community portal**: Great for forums and discussions

### Step 2: Configure Your Data

Once your site is created, you'll need to configure the data sources. Power Pages uses Dataverse as its data backbone, which means you can easily expose your D365 tables to external users.

### Step 3: Design Your Pages

The design studio provides a visual editor where you can drag and drop components to build your pages. Key components include:

- **Forms**: Capture user input and write to Dataverse
- **Lists**: Display records from your tables
- **Text**: Add rich content with formatting
- **Images**: Visual elements to enhance your site

## Best Practices

When building Power Pages portals, consider these best practices:

1. **Plan your information architecture** before building
2. **Use table permissions** to control data access
3. **Implement web roles** for user segmentation
4. **Test thoroughly** across devices and browsers

## Conclusion

Power Pages opens up new possibilities for extending your D365 investment to external stakeholders. By following this guide, you'll be well on your way to creating powerful, integrated web experiences.
    `,
  },
  {
    title: "Optimizing D365 Customer Service Performance",
    description: "Best practices for improving response times and case resolution rates in your service center. Discover proven strategies used by enterprise teams.",
    category: "Customer Service",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    slug: "optimizing-customer-service",
    featured: true,
    author: "Michael Chen",
    authorRole: "Customer Service Specialist",
    content: `
## Introduction

In today's competitive landscape, customer service excellence isn't just a differentiator—it's a requirement. D365 Customer Service provides powerful tools to streamline your support operations, but maximizing its potential requires strategic optimization.

## Key Performance Metrics

Before optimizing, you need to understand what to measure:

- **First Response Time (FRT)**: How quickly agents respond to new cases
- **Average Handle Time (AHT)**: Total time spent resolving cases
- **Customer Satisfaction (CSAT)**: Post-interaction satisfaction scores
- **First Contact Resolution (FCR)**: Cases resolved in a single interaction

## Optimization Strategies

### 1. Implement Smart Routing

Use unified routing to automatically direct cases to the most qualified agents based on skills, capacity, and presence. This reduces transfer rates and improves FCR.

### 2. Leverage AI Suggestions

Enable AI-powered suggestions that provide agents with relevant knowledge articles, similar case recommendations, and next-best actions during customer interactions.

### 3. Optimize Knowledge Management

A well-organized knowledge base is crucial for quick resolutions. Ensure articles are:

- Searchable with relevant keywords
- Regularly updated for accuracy
- Structured with clear formatting

### 4. Automate Routine Tasks

Use Power Automate to handle repetitive tasks like:

- Case creation from emails
- SLA notifications
- Status updates to customers
- Escalation triggers

## Measuring Success

After implementing optimizations, track your metrics weekly and compare against baselines. Aim for:

- 20% reduction in average handle time
- 15% improvement in first contact resolution
- 10+ point increase in CSAT scores

## Conclusion

Optimizing D365 Customer Service is an ongoing journey. Start with these foundational improvements and continue iterating based on your specific metrics and customer feedback.
    `,
  },
  {
    title: "Azure Integration Patterns for D365",
    description: "Explore common patterns for integrating Azure services with your Dynamics 365 environment. From Logic Apps to Azure Functions.",
    category: "Azure",
    date: "Jan 5, 2026",
    readTime: "10 min read",
    slug: "azure-integration-patterns",
    featured: true,
    author: "David Park",
    authorRole: "Azure Solutions Architect",
    content: `
## Introduction

Azure and Dynamics 365 form a powerful combination for enterprise solutions. Understanding the right integration patterns can help you build scalable, maintainable solutions that leverage the best of both platforms.

## Common Integration Patterns

### Pattern 1: Event-Driven Integration

Use Dataverse webhooks to trigger Azure Functions or Logic Apps when data changes in D365. This pattern is ideal for:

- Real-time notifications
- Data synchronization
- Audit logging

### Pattern 2: Batch Processing

For high-volume data operations, use Azure Data Factory to orchestrate batch transfers between D365 and other systems.

### Pattern 3: API Gateway

Place Azure API Management in front of your D365 APIs to add:

- Rate limiting
- Authentication
- Request transformation
- Analytics

## Implementation Examples

### Azure Functions Integration

Azure Functions provide serverless compute for processing D365 events. Here's a typical architecture:

1. D365 triggers a webhook on record creation
2. Azure Function receives the payload
3. Function processes the data and updates external systems
4. Results are logged to Application Insights

### Logic Apps for Workflow Automation

Logic Apps excel at connecting D365 with other services. Common use cases include:

- Syncing contacts to marketing platforms
- Creating records from email attachments
- Orchestrating approval workflows

## Best Practices

1. **Use managed identities** for secure authentication
2. **Implement retry policies** for transient failures
3. **Monitor with Application Insights** for observability
4. **Design for idempotency** to handle duplicate events

## Conclusion

The right Azure integration pattern depends on your specific requirements. Start with the simplest approach that meets your needs and evolve as requirements grow.
    `,
  },
  {
    title: "Building Custom Dashboards in D365 Marketing",
    description: "Create powerful marketing dashboards that give you real-time insights into campaign performance and customer engagement metrics.",
    category: "Marketing",
    date: "Dec 28, 2025",
    readTime: "7 min read",
    slug: "custom-dashboards-marketing",
    featured: false,
    author: "Emily Rodriguez",
    authorRole: "Marketing Automation Lead",
    content: `
## Introduction

Effective marketing requires data-driven decisions. D365 Marketing provides built-in analytics, but custom dashboards can deliver the specific insights your team needs.

## Dashboard Design Principles

### 1. Define Your Audience

Different stakeholders need different views:

- **CMO**: High-level KPIs and trends
- **Campaign Managers**: Detailed campaign metrics
- **Content Teams**: Engagement analytics

### 2. Choose the Right Visualizations

Match your data to appropriate chart types:

- **Trends**: Line or area charts
- **Comparisons**: Bar charts
- **Composition**: Pie or donut charts
- **Relationships**: Scatter plots

## Building Your Dashboard

### Step 1: Identify Key Metrics

Start with these essential marketing metrics:

- Email open rates and click-through rates
- Lead generation and conversion rates
- Customer journey completion rates
- Event registration and attendance

### Step 2: Create Custom Views

Use Advanced Find to create views that filter data for your specific needs.

### Step 3: Build Power BI Reports

Connect Power BI to your D365 Marketing data for advanced visualizations.

## Real-Time Insights

For real-time monitoring, consider:

- Embedded dashboard widgets
- Power BI streaming datasets
- Custom portals with live data feeds

## Conclusion

Custom dashboards transform raw marketing data into actionable insights. Invest time in designing dashboards that align with your team's goals and decision-making processes.
    `,
  },
  {
    title: "Power Automate Flow Best Practices",
    description: "Learn how to build reliable, maintainable flows that scale with your business. Includes error handling and monitoring strategies.",
    category: "Power Automate",
    date: "Dec 20, 2025",
    readTime: "9 min read",
    slug: "power-automate-best-practices",
    featured: false,
    author: "James Wilson",
    authorRole: "Power Platform Developer",
    content: `
## Introduction

Power Automate flows are essential for D365 automation, but poorly designed flows can become maintenance nightmares. This guide covers best practices for building enterprise-grade flows.

## Flow Design Principles

### 1. Keep Flows Focused

Each flow should have a single responsibility. Instead of one massive flow, create smaller, focused flows that:

- Are easier to debug
- Can be reused across scenarios
- Fail independently

### 2. Use Naming Conventions

Adopt consistent naming for:

- **Flows**: [Team]-[Process]-[Trigger] (e.g., Sales-LeadQualification-OnCreate)
- **Variables**: Use descriptive names with prefixes (var_CustomerName)
- **Actions**: Add comments explaining business logic

## Error Handling

### Configure Run After Settings

Use "Configure run after" to handle failures gracefully:

1. Add a parallel branch for error handling
2. Set it to run after the previous action fails
3. Send notifications and log errors

### Implement Retry Patterns

For transient failures, use the retry policy:

- Set appropriate retry counts (3-5 attempts)
- Use exponential backoff
- Log retry attempts for monitoring

## Performance Optimization

### Minimize API Calls

- Use batch operations when possible
- Filter data at the source
- Cache frequently accessed data

### Avoid Nested Loops

Nested Apply to Each actions can cause performance issues. Consider:

- Using OData filters to reduce iterations
- Processing in parallel where possible

## Monitoring and Maintenance

### Track Flow Runs

Use the Power Automate analytics to monitor:

- Success/failure rates
- Average run duration
- Trigger frequency

### Document Your Flows

Maintain documentation including:

- Business purpose
- Dependencies
- Known limitations

## Conclusion

Following these best practices will help you build flows that are reliable, maintainable, and scalable. Invest in proper design upfront to avoid technical debt.
    `,
  },
  {
    title: "D365 Sales Pipeline Optimization",
    description: "Maximize your sales team productivity with advanced pipeline management techniques and automation workflows.",
    category: "Sales",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    slug: "sales-pipeline-optimization",
    featured: false,
    author: "Lisa Thompson",
    authorRole: "Sales Operations Manager",
    content: `
## Introduction

A well-optimized sales pipeline is the engine of revenue growth. D365 Sales provides powerful tools for pipeline management—here's how to maximize their impact.

## Pipeline Fundamentals

### Define Clear Stages

Your pipeline stages should reflect your actual sales process:

1. **Qualification**: Initial fit assessment
2. **Discovery**: Understanding customer needs
3. **Proposal**: Presenting solutions
4. **Negotiation**: Terms and pricing
5. **Closed**: Won or lost

### Set Stage Exit Criteria

Define what must happen before moving to the next stage:

- Required fields completed
- Activities logged
- Stakeholders identified

## Automation Opportunities

### Lead Scoring

Implement automated lead scoring based on:

- Demographic fit
- Behavioral signals
- Engagement history

### Task Generation

Auto-create tasks when opportunities reach specific stages:

- Schedule follow-up calls
- Send relevant content
- Create quotes

## Analytics and Forecasting

### Track Key Metrics

Monitor these pipeline health indicators:

- **Conversion rates**: Stage-to-stage progression
- **Velocity**: Time in each stage
- **Win rate**: Overall close percentage

### Improve Forecasting Accuracy

Use AI-driven forecasting to:

- Predict close dates
- Identify at-risk deals
- Recommend next actions

## Conclusion

Pipeline optimization is a continuous process. Regularly review your metrics, gather feedback from sales reps, and iterate on your processes.
    `,
  },
  {
    title: "Field Service Scheduling Deep Dive",
    description: "Master the Resource Scheduling Optimization (RSO) engine and deliver exceptional on-site service experiences.",
    category: "Field Service",
    date: "Dec 10, 2025",
    readTime: "11 min read",
    slug: "field-service-scheduling",
    featured: false,
    author: "Robert Martinez",
    authorRole: "Field Service Consultant",
    content: `
## Introduction

Efficient scheduling is the cornerstone of field service operations. D365 Field Service's Resource Scheduling Optimization (RSO) can dramatically improve technician utilization and customer satisfaction.

## Understanding RSO

### How RSO Works

RSO uses AI to optimize schedules based on multiple constraints:

- Technician skills and certifications
- Travel time and distance
- Customer time preferences
- Work order priorities

### Optimization Goals

Configure RSO to prioritize:

1. **Minimize travel time**: Reduce windshield time
2. **Maximize utilization**: Keep technicians busy
3. **Meet SLAs**: Honor commitment windows

## Configuration Best Practices

### Define Accurate Characteristics

Map technician skills accurately:

- Certifications
- Equipment expertise
- Product knowledge

### Set Realistic Durations

Use historical data to set work order durations:

- Account for complexity variations
- Include buffer for unexpected issues

### Configure Optimization Scopes

Create scopes that make sense for your business:

- Geographic regions
- Service types
- Customer tiers

## Advanced Scenarios

### Emergency Dispatching

Handle urgent requests without disrupting the schedule:

1. Create high-priority booking rules
2. Use "find availability" for urgent slots
3. Notify affected customers of changes

### Multi-Day Work Orders

For complex jobs spanning multiple days:

- Split into logical phases
- Maintain continuity with preferred resources
- Communicate clearly with customers

## Measuring Success

Track these KPIs post-implementation:

- **Travel time reduction**: Target 15-20%
- **Utilization improvement**: Target 10-15%
- **Customer satisfaction**: Target 90%+

## Conclusion

RSO is a powerful tool, but success requires proper configuration and ongoing tuning. Start with a pilot group and expand as you refine your approach.
    `,
  },
  {
    title: "Migrating to Dataverse: A Complete Guide",
    description: "Step-by-step guide to migrating your legacy data to Microsoft Dataverse with minimal downtime and data integrity.",
    category: "Azure",
    date: "Dec 5, 2025",
    readTime: "15 min read",
    slug: "migrating-to-dataverse",
    featured: false,
    author: "Andrew Kim",
    authorRole: "Data Migration Specialist",
    content: `
## Introduction

Migrating to Dataverse is a significant undertaking that requires careful planning and execution. This guide provides a comprehensive roadmap for successful data migration.

## Pre-Migration Planning

### Assess Your Current State

Document your existing environment:

- Data sources and volumes
- Current integrations
- Business processes dependent on data

### Define Success Criteria

Establish clear goals:

- Data completeness requirements
- Acceptable downtime windows
- Performance benchmarks

## Data Mapping

### Schema Design

Design your Dataverse schema:

1. Map source fields to target columns
2. Handle data type conversions
3. Plan for lookup relationships

### Data Quality

Address data quality before migration:

- Remove duplicates
- Standardize formats
- Fill missing required fields

## Migration Approaches

### Big Bang Migration

Move all data at once:

- **Pros**: Single cutover, simpler
- **Cons**: Higher risk, longer downtime

### Phased Migration

Move data in stages:

- **Pros**: Lower risk, validate incrementally
- **Cons**: Longer timeline, complexity

### Trickle Migration

Continuous sync until cutover:

- **Pros**: Minimal downtime, real-time sync
- **Cons**: Requires robust sync tooling

## Execution

### Step 1: Set Up Target Environment

Create your Dataverse environment and schema.

### Step 2: Configure Migration Tools

Choose appropriate tools:

- Data flows for simple migrations
- Azure Data Factory for complex scenarios
- Custom solutions for specialized needs

### Step 3: Test Thoroughly

Run multiple test migrations:

- Validate data integrity
- Test integrations
- Verify performance

### Step 4: Execute Production Migration

Follow your migration runbook:

- Communicate with stakeholders
- Monitor progress closely
- Have rollback plans ready

## Post-Migration

### Validation

Verify migration success:

- Row counts match
- Data integrity checks pass
- Integrations function correctly

### Optimization

Fine-tune your new environment:

- Index frequently queried columns
- Optimize views and queries
- Monitor performance

## Conclusion

A successful Dataverse migration requires thorough planning, rigorous testing, and careful execution. Take time to do it right—your future self will thank you.
    `,
  },
  {
    title: "Customer Journey Orchestration in D365",
    description: "Design and implement personalized customer journeys that drive engagement and conversions across all touchpoints.",
    category: "Marketing",
    date: "Nov 28, 2025",
    readTime: "8 min read",
    slug: "customer-journey-orchestration",
    featured: false,
    author: "Nicole Foster",
    authorRole: "Customer Experience Designer",
    content: `
## Introduction

Customer journey orchestration transforms how brands engage with customers. D365 Customer Insights - Journeys enables you to create personalized, multi-channel experiences that drive meaningful engagement.

## Journey Design Principles

### 1. Start with the Customer

Map your journey from the customer's perspective:

- What are their goals?
- What obstacles do they face?
- How can you add value?

### 2. Think Omnichannel

Design journeys that span channels:

- Email
- SMS
- Push notifications
- In-app messages
- Direct mail

### 3. Personalize at Scale

Use segmentation and dynamic content to personalize:

- Behavioral triggers
- Demographic attributes
- Purchase history

## Building Effective Journeys

### Journey Components

Key building blocks include:

- **Triggers**: What starts the journey
- **Actions**: Messages and activities
- **Conditions**: Branch logic
- **Wait steps**: Timing delays

### Common Journey Types

#### Welcome Series

Onboard new customers:

1. Welcome email (immediate)
2. Getting started guide (day 2)
3. Feature highlight (day 5)
4. Check-in survey (day 14)

#### Re-engagement

Win back inactive customers:

1. "We miss you" email
2. Special offer
3. Survey to understand disengagement

#### Purchase Follow-up

Maximize customer value:

1. Order confirmation
2. Shipping notification
3. Delivery feedback request
4. Cross-sell recommendations

## Optimization

### A/B Testing

Test journey variations:

- Subject lines
- Send times
- Content versions

### Analytics

Monitor journey performance:

- Open and click rates
- Conversion rates
- Drop-off points

### Iterate

Use insights to improve:

- Adjust timing based on engagement
- Refine segments
- Update content

## Conclusion

Effective journey orchestration requires continuous refinement. Start with your most impactful customer touchpoints and expand from there.
    `,
  },
]

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = allPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const CategoryIcon = getCategoryIcon(post.category)
  
  // Get related posts (same category, excluding current)
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== slug)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <section className="mx-auto max-w-4xl px-6 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{post.category}</span>
          </nav>
        </section>

        {/* Article Header */}
        <article className="mx-auto max-w-4xl px-6">
          <header className="py-8 border-b border-border">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="flex items-center gap-1.5">
                <CategoryIcon className="h-3.5 w-3.5" />
                {post.category}
              </Badge>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
              {post.title}
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {post.description}
            </p>

            {/* Author and Meta */}
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors" title="Share">
                    <Share2 className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors" title="Bookmark">
                    <Bookmark className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="py-12 prose prose-invert prose-lg max-w-none">
            <div className="space-y-6">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-12 mb-4 flex items-center gap-3">
                      <span className="h-1 w-8 bg-primary rounded-full" />
                      {paragraph.replace('## ', '')}
                    </h2>
                  )
                }
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  )
                }
                if (paragraph.startsWith('#### ')) {
                  return (
                    <h4 key={index} className="text-lg font-semibold text-foreground mt-6 mb-2">
                      {paragraph.replace('#### ', '')}
                    </h4>
                  )
                }
                if (paragraph.startsWith('- **')) {
                  const match = paragraph.match(/- \*\*(.+?)\*\*: (.+)/)
                  if (match) {
                    return (
                      <div key={index} className="flex gap-3 ml-4">
                        <span className="text-primary mt-1.5">-</span>
                        <p className="text-muted-foreground">
                          <strong className="text-foreground">{match[1]}</strong>: {match[2]}
                        </p>
                      </div>
                    )
                  }
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <div key={index} className="flex gap-3 ml-4">
                      <span className="text-primary mt-1.5">-</span>
                      <p className="text-muted-foreground">{paragraph.replace('- ', '')}</p>
                    </div>
                  )
                }
                if (paragraph.match(/^\d+\. /)) {
                  const match = paragraph.match(/^(\d+)\. (.+)/)
                  if (match) {
                    return (
                      <div key={index} className="flex gap-3 ml-4">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary shrink-0">
                          {match[1]}
                        </span>
                        <p className="text-muted-foreground">{match[2]}</p>
                      </div>
                    )
                  }
                }
                if (paragraph.trim() === '') {
                  return null
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="py-8 border-t border-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Share this article:</span>
                <div className="flex items-center gap-1">
                  <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                    <Share2 className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
              <Link
                href="/blog"
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all articles
              </Link>
            </div>
          </footer>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mx-auto max-w-7xl px-6 py-12">
            <div className="flex items-center gap-2 mb-8">
              <MessageSquare className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Related Articles</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => {
                const RelatedIcon = getCategoryIcon(relatedPost.category)
                return (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                    <Card className="h-full border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-xs flex items-center gap-1">
                            <RelatedIcon className="h-3 w-3" />
                            {relatedPost.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {relatedPost.readTime}
                          </span>
                        </div>
                        <CardTitle className="mt-3 text-lg leading-tight group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {relatedPost.date}
                          </p>
                          <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            Read more <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-6 py-12">
          <div className="rounded-2xl border border-border bg-card/50 p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-foreground">
              Need help with {post.category}?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our team of experts can help you implement these strategies in your organization.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
