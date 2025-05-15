import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const menuItems = [
    { title: 'Dashboard', icon: '📊', href: '/dashboard' },
    { title: 'Bookings', icon: '📅', href: '/bookings' },
    { title: 'Customers', icon: '👥', href: '/customers' },
    { title: 'Staff', icon: '👤', href: '/staff' },
    { title: 'Services', icon: '🧹', href: '/services' },
    { title: 'Reports', icon: '📈', href: '/reports' },
    { title: 'Settings', icon: '⚙️', href: '/settings' },
  ];

  return (
    <div className="bg-white h-screen w-64 fixed left-0 top-0 shadow-lg">
      <div className="p-4 border-b">
        <Link href="/dashboard" className="text-xl font-bold text-blue-600">
          HappyHands Admin
        </Link>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 