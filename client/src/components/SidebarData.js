import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Anasayfa',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Görevler',
    path: '/',
    icon: <FaIcons.FaTasks />,
    cName: 'nav-text'
  },
  {
    title: 'Önemli',
    path: '/important',
    icon: <AiIcons.AiFillStar />,
    cName: 'nav-text'
  },
  {
    title: 'Planlanan',
    path: '/plan',
    icon: <MdIcons.MdDateRange />,
    cName: 'nav-text'
  },
];