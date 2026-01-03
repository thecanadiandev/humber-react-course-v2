import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  editLink: {
    text: '',
  },
  feedback: {
    labels: '',
    content: '',
  },
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="2.5" fill="#61dafb"/>
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61dafb" strokeWidth="1.5" fill="none"/>
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61dafb" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)"/>
      </svg>
      <span style={{ fontWeight: 700, fontSize: '1.25rem', color: '#ffffff' }}>React</span>
    </div>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: (
      <div style={{ textAlign: 'center', width: '100%', color: '#d1d5db' }}>
        Made with ❤️ by Hari
      </div>
    ),
  },
  primaryHue: 190,
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – React Course',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="React Course" />
      <meta property="og:description" content="The library for web and native user interfaces" />
      <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='2.5' fill='%2361dafb'/%3E%3Cellipse cx='16' cy='16' rx='12' ry='4.5' stroke='%2361dafb' stroke-width='1.5' fill='none'/%3E%3Cellipse cx='16' cy='16' rx='12' ry='4.5' stroke='%2361dafb' stroke-width='1.5' fill='none' transform='rotate(60 16 16)'/%3E%3Cellipse cx='16' cy='16' rx='12' ry='4.5' stroke='%2361dafb' stroke-width='1.5' fill='none' transform='rotate(120 16 16)'/%3E%3C/svg%3E" />
    </>
  ),
  banner: {
    key: 'react-course',
    text: (
      <span style={{ color: '#61dafb' }}>
        🎉 Welcome to the Modern React Course
      </span>
    ),
  },
};

export default config;
