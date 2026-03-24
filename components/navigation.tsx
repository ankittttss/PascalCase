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
    <header style={{ position: 'sticky', top: 0, zIndex: 200, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)' }}>
      <nav style={{ display: 'flex', alignItems: 'center', height: '62px', gap: 0, maxWidth: '1160px', margin: '0 auto', padding: '0 40px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginRight: '36px', fontSize: '17px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.4px', flexShrink: 0 }}>
          <Image
            src="/logo black.png"
            alt="Pascalcase"
            width={30}
            height={30}
            style={{ width: '30px', height: '30px' }}
            priority
          />
        </Link>

        <div style={{ display: 'none' }} className="md:flex items-center gap-px flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ 
                fontSize: '13.5px', 
                fontWeight: 500, 
                color: 'var(--ink-2)', 
                textDecoration: 'none', 
                padding: '7px 13px', 
                borderRadius: 'var(--radius-sm)',
                transition: 'color 0.15s, background 0.15s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => { e.target.style.color = 'var(--ink)'; e.target.style.background = 'var(--orange-light)'; }}
              onMouseLeave={(e) => { e.target.style.color = 'var(--ink-2)'; e.target.style.background = 'transparent'; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div style={{ display: 'none', marginLeft: 'auto', alignItems: 'center', gap: '10px' }} className="md:flex">
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontFamily: 'var(--font)', fontSize: '13.5px', fontWeight: 600, borderRadius: 'var(--radius-sm)', padding: '8px 18px', cursor: 'pointer', textDecoration: 'none', border: 'none', transition: 'all 0.15s', whiteSpace: 'nowrap', background: 'var(--orange)', color: 'white' }} onMouseEnter={(e) => { e.target.style.background = 'var(--orange-dark)'; e.target.style.transform = 'translateY(-1px)'; }} onMouseLeave={(e) => { e.target.style.background = 'var(--orange)'; e.target.style.transform = 'translateY(0)'; }}>
            Chat on Teams
          </Link>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2px', marginLeft: 'auto' }}>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
          >
            {mobileMenuOpen ? (
              <X style={{ width: '24px', height: '24px', color: 'var(--ink)' }} />
            ) : (
              <Menu style={{ width: '24px', height: '24px', color: 'var(--ink)' }} />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div style={{ borderTop: '1px solid var(--border)', background: 'var(--white)', padding: '16px 40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ fontSize: '13.5px', fontWeight: 500, color: 'var(--ink-2)', textDecoration: 'none', padding: '7px 13px', borderRadius: 'var(--radius-sm)', transition: 'color 0.15s, background 0.15s', cursor: 'pointer', display: 'block' }}
                onMouseEnter={(e) => { e.target.style.color = 'var(--ink)'; e.target.style.background = 'var(--orange-light)'; }}
                onMouseLeave={(e) => { e.target.style.color = 'var(--ink-2)'; e.target.style.background = 'transparent'; }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', fontSize: '13.5px', fontWeight: 600, borderRadius: 'var(--radius-sm)', padding: '8px 18px', cursor: 'pointer', textDecoration: 'none', border: 'none', width: '100%', marginTop: '8px', background: 'var(--orange)', color: 'white' }} onMouseEnter={(e) => { e.target.style.background = 'var(--orange-dark)'; }} onMouseLeave={(e) => { e.target.style.background = 'var(--orange)'; }}>
              Chat on Teams
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
