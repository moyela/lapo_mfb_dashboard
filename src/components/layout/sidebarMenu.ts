import {
  HomeIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  UserIcon,
  CreditCardIcon,
  IdentificationIcon,
  DocumentPlusIcon,
  ArchiveBoxIcon,
  RectangleStackIcon,
  LockClosedIcon,
  KeyIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  QueueListIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

export const dashboardItem = {
  icon: HomeIcon,
  label: 'Dashboard',
  path: '/',
};

export const menuItems = [
  { icon: BuildingOfficeIcon, label: 'Branches', path: '/branches' },
  { icon: UserGroupIcon, label: 'Roles', path: '/roles' },
  { icon: UserIcon, label: 'Users', path: '/users' },
  { icon: CreditCardIcon, label: 'Card Scheme', path: '/card-scheme' },
  { icon: IdentificationIcon, label: 'Card Profile', path: '/card-profile' },
  { icon: DocumentPlusIcon, label: 'Card Request', path: '/card-request' },
  { icon: ArchiveBoxIcon, label: 'Stock', path: '/stock' },
  { icon: RectangleStackIcon, label: 'Cards', path: '/cards' },
  { icon: LockClosedIcon, label: 'Block/Unblock Card', path: '/block-unblock' },
  { icon: KeyIcon, label: 'Generate/Reissue Pin', path: '/pin' },
  { icon: ChatBubbleLeftRightIcon, label: 'Complaints: Log', path: '/complaints/log' },
  { icon: CheckCircleIcon, label: 'Complaints: Resolve', path: '/complaints/resolve' },
  { icon: ClipboardDocumentListIcon, label: 'Authorization List', path: '/auth-list' },
  { icon: QueueListIcon, label: 'Authorization Queue', path: '/auth-queue' },
  { icon: ChartBarIcon, label: 'Trail', path: '/trail' },
  { icon: Cog6ToothIcon, label: 'Account', path: '/account' },
];

export const logoutItem = {
  icon: ArrowLeftStartOnRectangleIcon,
  label: 'Logout',
  path: '/logout',
}; 