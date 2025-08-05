import React, { useState, useMemo } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit2, 
  Trash2,
  Users as UsersIcon,
  UserCheck,
  UserX,
  Crown,
  Shield,
  Eye
} from 'lucide-react'
import { useCMSUsers, useCreateCMSUser, useUpdateCMSUser, CMSUser } from '@/hooks/useCMSUsers'
import { useToast } from '@/hooks/use-toast'

const ITEMS_PER_PAGE = 10

const RoleBadge = ({ role }: { role: CMSUser['role'] }) => {
  const variants = {
    super_user: { variant: 'default' as const, icon: Crown },
    manager: { variant: 'secondary' as const, icon: Shield },
    editor: { variant: 'outline' as const, icon: Edit2 },
    publisher: { variant: 'outline' as const, icon: Eye },
    author: { variant: 'outline' as const, icon: Edit2 },
    contributor: { variant: 'secondary' as const, icon: UserCheck }
  }

  const config = variants[role]
  const Icon = config.icon

  return (
    <Badge variant={config.variant} className="flex items-center gap-1">
      <Icon className="h-3 w-3" />
      {role.replace('_', ' ')}
    </Badge>
  )
}

const StatusBadge = ({ status }: { status: CMSUser['status'] }) => {
  const variants = {
    active: 'default',
    inactive: 'secondary',
    suspended: 'destructive'
  } as const

  return <Badge variant={variants[status]}>{status}</Badge>
}

const UserRow = ({ user, onEdit, onToggleStatus }: {
  user: CMSUser
  onEdit: (user: CMSUser) => void
  onToggleStatus: (id: string, status: CMSUser['status']) => void
}) => (
  <TableRow className="hover:bg-muted/50">
    <TableCell>
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar_url} />
          <AvatarFallback>
            {user.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{user.name}</div>
          <div className="text-sm text-muted-foreground">{user.email}</div>
        </div>
      </div>
    </TableCell>
    <TableCell>
      <RoleBadge role={user.role} />
    </TableCell>
    <TableCell>
      <StatusBadge status={user.status} />
    </TableCell>
    <TableCell>
      {user.last_login ? new Date(user.last_login).toLocaleDateString() : 'Never'}
    </TableCell>
    <TableCell>
      {new Date(user.created_at).toLocaleDateString()}
    </TableCell>
    <TableCell>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => onEdit(user)}>
            <Edit2 className="mr-2 h-4 w-4" />
            Edit User
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {user.status === 'active' ? (
            <DropdownMenuItem onClick={() => onToggleStatus(user.id, 'suspended')}>
              <UserX className="mr-2 h-4 w-4" />
              Suspend User
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={() => onToggleStatus(user.id, 'active')}>
              <UserCheck className="mr-2 h-4 w-4" />
              Activate User
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </TableCell>
  </TableRow>
)

const UserForm = ({ user, onSave, onCancel }: {
  user?: CMSUser
  onSave: (userData: any) => void
  onCancel: () => void
}) => {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'contributor' as CMSUser['role'],
    status: user?.status || 'active' as CMSUser['status']
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Select value={formData.role} onValueChange={(value: CMSUser['role']) => setFormData({ ...formData, role: value })}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="contributor">Contributor</SelectItem>
            <SelectItem value="author">Author</SelectItem>
            <SelectItem value="editor">Editor</SelectItem>
            <SelectItem value="publisher">Publisher</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="super_user">Super User</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="status">Status</Label>
        <Select value={formData.status} onValueChange={(value: CMSUser['status']) => setFormData({ ...formData, status: value })}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="suspended">Suspended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {user ? 'Update User' : 'Create User'}
        </Button>
      </DialogFooter>
    </form>
  )
}

export default function Users() {
  const { toast } = useToast()
  
  // Local state
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [editingUser, setEditingUser] = useState<CMSUser | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // API calls
  const { data: users = [], isLoading } = useCMSUsers()
  const createUser = useCreateCMSUser()
  const updateUser = useUpdateCMSUser()

  // Filtered and paginated users
  const filteredUsers = useMemo(() => {
    if (!search) return users
    
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase())
    )
  }, [users, search])

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Statistics
  const stats = useMemo(() => {
    if (!users.length) return null
    
    return {
      total: users.length,
      active: users.filter(u => u.status === 'active').length,
      suspended: users.filter(u => u.status === 'suspended').length,
      superUsers: users.filter(u => u.role === 'super_user').length
    }
  }, [users])

  // Event handlers
  const handleCreateUser = () => {
    setEditingUser(null)
    setIsDialogOpen(true)
  }

  const handleEditUser = (user: CMSUser) => {
    setEditingUser(user)
    setIsDialogOpen(true)
  }

  const handleSaveUser = async (userData: any) => {
    try {
      if (editingUser) {
        await updateUser.mutateAsync({ id: editingUser.id, updates: userData })
      } else {
        await createUser.mutateAsync(userData)
      }
      setIsDialogOpen(false)
      setEditingUser(null)
    } catch (error) {
      // Error handling is done in the hook
    }
  }

  const handleToggleStatus = async (id: string, status: CMSUser['status']) => {
    updateUser.mutate({ id, updates: { status } })
  }

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="h-8 w-48 bg-muted animate-pulse rounded" />
            <div className="h-10 w-32 bg-muted animate-pulse rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-24 bg-muted animate-pulse rounded" />
            ))}
          </div>
          <div className="h-64 bg-muted animate-pulse rounded" />
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">
            Manage CMS users, roles, and permissions
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleCreateUser}>
              <Plus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingUser ? 'Edit User' : 'Add New User'}
              </DialogTitle>
              <DialogDescription>
                {editingUser ? 'Update user information and permissions.' : 'Create a new CMS user account.'}
              </DialogDescription>
            </DialogHeader>
            <UserForm
              user={editingUser}
              onSave={handleSaveUser}
              onCancel={() => setIsDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.active}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Suspended</CardTitle>
              <UserX className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.suspended}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Super Users</CardTitle>
              <Crown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.superUsers}</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>CMS Users</CardTitle>
          <CardDescription>
            Manage user accounts, roles, and access permissions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search users by name, email, or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Users Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedUsers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        <div className="flex flex-col items-center gap-2">
                          <UsersIcon className="h-8 w-8 text-muted-foreground" />
                          <p className="text-muted-foreground">
                            {search ? 'No users found matching your search' : 'No users found'}
                          </p>
                          <Button onClick={handleCreateUser}>
                            Add your first user
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    paginatedUsers.map((user) => (
                      <UserRow
                        key={user.id}
                        user={user}
                        onEdit={handleEditUser}
                        onToggleStatus={handleToggleStatus}
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
                  {Math.min(currentPage * ITEMS_PER_PAGE, filteredUsers.length)} of{' '}
                  {filteredUsers.length} users
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
        </CardContent>
      </Card>
    </div>
  )
}