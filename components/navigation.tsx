"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        .nav-header {
          position: sticky;
          top: 0;
          z-index: 200;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .nav-container {
          display: flex;
          align-items: center;
          height: 62px;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-right: 36px;
          font-size: 17px;
          font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.4px;
          flex-shrink: 0;
        }
        .nav-links {
          display: none;
          align-items: center;
          gap: 2px;
          flex: 1;
        }
        .nav-links.visible {
          display: flex;
        }
        .nav-link {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--ink-2);
          text-decoration: none;
          padding: 7px 13px;
          border-radius: var(--radius-sm);
          transition: color 0.15s, background 0.15s;
          cursor: pointer;
          display: block;
        }
        .nav-link:hover {
          color: var(--ink);
          background: var(--orange-light);
        }
        .nav-actions {
          display: none;
          margin-left: auto;
          align-items: center;
          gap: 10px;
        }
        .nav-actions.visible {
          display: flex;
        }
        .nav-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          font-weight: 600;
          border-radius: var(--radius-sm);
          padding: 8px 18px;
          cursor: pointer;
          text-decoration: none;
          border: none;
          transition: all 0.15s;
          white-space: nowrap;
          background: var(--orange);
          color: white;
        }
        .nav-cta:hover {
          background: var(--orange-dark);
          transform: translateY(-1px);
        }
        .nav-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          margin-left: auto;
          color: var(--ink);
        }
        .mobile-menu {
          border-top: 1px solid var(--border);
          background: var(--white);
          padding: 16px 40px;
        }
        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-link {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--ink-2);
          text-decoration: none;
          padding: 7px 13px;
          border-radius: var(--radius-sm);
          transition: color 0.15s, background 0.15s;
          cursor: pointer;
          display: block;
        }
        .mobile-link:hover {
          color: var(--ink);
          background: var(--orange-light);
        }
        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          font-size: 13.5px;
          font-weight: 600;
          border-radius: var(--radius-sm);
          padding: 8px 18px;
          cursor: pointer;
          text-decoration: none;
          border: none;
          width: 100%;
          margin-top: 8px;
          background: var(--orange);
          color: white;
          transition: all 0.15s;
        }
        .mobile-cta:hover {
          background: var(--orange-dark);
        }
      `}</style>
      <header className="nav-header">
        <nav className="nav-container">
          <Link href="/" className="nav-logo">
            <Image
              src="/logo black.png"
              alt="Pascalcase"
              width={30}
              height={30}
              style={{ width: '30px', height: '30px' }}
              priority
            />
          </Link>

          <div className="nav-links visible">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions visible">
            <Link href="/contact" className="nav-cta">
              Chat on Teams
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="nav-toggle"
          >
            {mobileMenuOpen ? (
              <X style={{ width: '24px', height: '24px' }} />
            ) : (
              <Menu style={{ width: '24px', height: '24px' }} />
            )}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mobile-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="mobile-cta">
                Chat on Teams
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
