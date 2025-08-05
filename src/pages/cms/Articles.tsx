import React, { useState, useMemo, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  Search, 
  Plus, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit2, 
  Trash2,
  Star,
  Globe,
  FileText,
  Calendar
} from 'lucide-react'
import { useCMSArticles, useDeleteCMSArticle, useUpdateCMSArticle, CMSArticle } from '@/hooks/useCMSArticles'
import { useCMSCategories } from '@/hooks/useCMSCategories'
import { useToast } from '@/hooks/use-toast'

const ITEMS_PER_PAGE = 10

const StatusBadge = ({ status }: { status: CMSArticle['status'] }) => {
  const variants = {
    draft: 'secondary',
    review: 'outline',
    published: 'default',
    archived: 'destructive'
  } as const

  return <Badge variant={variants[status]}>{status}</Badge>
}

const ArticleRow = ({ article, onEdit, onView, onDelete, onToggleFeatured }: {
  article: CMSArticle
  onEdit: (id: string) => void
  onView: (id: string) => void
  onDelete: (id: string) => void
  onToggleFeatured: (id: string, featured: boolean) => void
}) => (
  <TableRow className="hover:bg-muted/50">
    <TableCell className="font-medium">
      <div className="flex items-center gap-2">
        {article.featured && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
        {article.title}
      </div>
    </TableCell>
    <TableCell>{article.category || 'Uncategorized'}</TableCell>
    <TableCell>{article.author || 'Unknown'}</TableCell>
    <TableCell>
      <StatusBadge status={article.status} />
    </TableCell>
    <TableCell>
      {article.publish_date ? new Date(article.publish_date).toLocaleDateString() : '-'}
    </TableCell>
    <TableCell>{article.views.toLocaleString()}</TableCell>
    <TableCell>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onView(article.id)}>
            <Eye className="mr-2 h-4 w-4" />
            View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onEdit(article.id)}>
            <Edit2 className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onToggleFeatured(article.id, !article.featured)}>
            <Star className="mr-2 h-4 w-4" />
            {article.featured ? 'Unfeature' : 'Feature'}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => onDelete(article.id)} className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  </TableRow>
)

const FilterBar = ({ 
  search, 
  setSearch, 
  statusFilter, 
  setStatusFilter, 
  categoryFilter, 
  setCategoryFilter,
  categories 
}: {
  search: string
  setSearch: (value: string) => void
  statusFilter: string
  setStatusFilter: (value: string) => void
  categoryFilter: string
  setCategoryFilter: (value: string) => void
  categories: any[]
}) => (
  <div className="flex flex-col sm:flex-row gap-4 items-center">
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        placeholder="Search articles by title, content, or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10"
      />
    </div>
    <div className="flex gap-2">
      <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="review">Review</SelectItem>
          <SelectItem value="published">Published</SelectItem>
          <SelectItem value="archived">Archived</SelectItem>
        </SelectContent>
      </Select>
      
      <Select value={categoryFilter} onValueChange={setCategoryFilter}>
        <SelectTrigger className="w-40">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.slug}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  </div>
)

const ArticlesSkeleton = () => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-10 w-32" />
    </div>
    <Skeleton className="h-10 w-full" />
    <div className="space-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-16 w-full" />
      ))}
    </div>
  </div>
)

export default function Articles() {
  const navigate = useNavigate()
  const { toast } = useToast()
  
  // Local state for filters and pagination
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)

  // Debounced search for performance
  const [debouncedSearch, setDebouncedSearch] = useState('')
  React.useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300)
    return () => clearTimeout(timer)
  }, [search])

  // API calls with optimized filtering
  const { data: categories = [] } = useCMSCategories()
  const { data: articles = [], isLoading, error } = useCMSArticles({
    search: debouncedSearch || undefined,
    status: statusFilter !== 'all' ? statusFilter : undefined,
    category: categoryFilter !== 'all' ? categoryFilter : undefined,
    limit: ITEMS_PER_PAGE,
    offset: (currentPage - 1) * ITEMS_PER_PAGE
  })

  const deleteArticle = useDeleteCMSArticle()
  const updateArticle = useUpdateCMSArticle()

  // Memoized filtered articles for performance
  const filteredArticles = useMemo(() => {
    if (!articles) return []
    return articles
  }, [articles])

  // Pagination calculations
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE)
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Event handlers
  const handleEdit = (id: string) => {
    navigate(`/cms/articles/edit/${id}`)
  }

  const handleView = (id: string) => {
    navigate(`/cms/articles/view/${id}`)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      deleteArticle.mutate(id)
    }
  }

  const handleToggleFeatured = async (id: string, featured: boolean) => {
    updateArticle.mutate({ id, updates: { featured } })
  }

  const stats = useMemo(() => {
    if (!articles) return null
    
    return {
      total: articles.length,
      published: articles.filter(a => a.status === 'published').length,
      draft: articles.filter(a => a.status === 'draft').length,
      featured: articles.filter(a => a.featured).length
    }
  }, [articles])

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-destructive">Error loading articles: {error.message}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Articles</h1>
          <p className="text-muted-foreground">
            Manage your content articles and pages
          </p>
        </div>
        <Button onClick={() => navigate('/cms/articles/new')}>
          <Plus className="mr-2 h-4 w-4" />
          New Article
        </Button>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.published}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Draft</CardTitle>
              <Edit2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.draft}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Featured</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.featured}</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>Article Management</CardTitle>
          <CardDescription>
            Create, edit, and manage your content articles
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <Suspense fallback={<div>Loading...</div>}>
              <ArticlesSkeleton />
            </Suspense>
          ) : (
            <div className="space-y-4">
              {/* Filters */}
              <FilterBar
                search={search}
                setSearch={setSearch}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                categories={categories}
              />

              {/* Articles Table */}
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Publish Date</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedArticles.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8">
                          <div className="flex flex-col items-center gap-2">
                            <FileText className="h-8 w-8 text-muted-foreground" />
                            <p className="text-muted-foreground">No articles found</p>
                            <Button onClick={() => navigate('/cms/articles/new')}>
                              Create your first article
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      paginatedArticles.map((article) => (
                        <ArticleRow
                          key={article.id}
                          article={article}
                          onEdit={handleEdit}
                          onView={handleView}
                          onDelete={handleDelete}
                          onToggleFeatured={handleToggleFeatured}
                        />
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{' '}
                    {Math.min(currentPage * ITEMS_PER_PAGE, filteredArticles.length)} of{' '}
                    {filteredArticles.length} articles
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}