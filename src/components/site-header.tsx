"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const menuButton = menuButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const initialFocus = menuPanelRef.current?.querySelector<HTMLElement>(
      "[data-menu-initial-focus]",
    );
    initialFocus?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const elements = menuPanelRef.current?.querySelectorAll<HTMLElement>(
        focusableSelector,
      );
      if (!elements?.length) return;

      const first = elements[0];
      const last = elements[elements.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (!window.matchMedia("(min-width: 64rem)").matches) {
        menuButton?.focus();
      }
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktopNavigation = window.matchMedia("(min-width: 64rem)");

    function closeMenuForDesktop(event: MediaQueryListEvent) {
      if (event.matches) setMenuOpen(false);
    }

    desktopNavigation.addEventListener("change", closeMenuForDesktop);

    return () => {
      desktopNavigation.removeEventListener("change", closeMenuForDesktop);
    };
  }, []);

  function isCurrent(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link
          className="inline-flex min-h-11 items-center font-display text-lg font-semibold tracking-tight text-midnight"
          href="/"
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                  className="inline-flex min-h-11 items-center rounded-[var(--radius-control)] px-3 py-2 text-sm font-semibold text-text-muted transition-colors hover:bg-surface-muted hover:text-midnight aria-[current=page]:bg-surface-muted aria-[current=page]:text-midnight"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          ref={menuButtonRef}
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-hidden={menuOpen || undefined}
          aria-label="Open navigation menu"
          className={`min-w-11 px-3 lg:hidden ${menuOpen ? "invisible" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          tabIndex={menuOpen ? -1 : undefined}
          variant="secondary"
        >
          <span aria-hidden="true" className="text-sm leading-none">
            Menu
          </span>
        </Button>
      </div>

      {menuOpen ? (
        <div
          aria-label="Site navigation"
          aria-modal="true"
          className="fixed inset-0 top-20 z-40 overflow-y-auto bg-surface p-5 lg:hidden"
          id="mobile-navigation"
          ref={menuPanelRef}
          role="dialog"
        >
          <div className="flex justify-end">
            <Button
              aria-label="Close navigation menu"
              className="min-w-11 px-4"
              onClick={() => setMenuOpen(false)}
              variant="secondary"
            >
              Close
            </Button>
          </div>

          <nav aria-label="Mobile primary" className="mt-4">
            <ul className="space-y-2">
              {siteConfig.navigation.map((item, index) => (
                <li key={item.href}>
                  <Link
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="flex min-h-12 items-center rounded-[var(--radius-control)] px-4 py-3 text-lg font-semibold text-text-primary hover:bg-surface-muted aria-[current=page]:bg-midnight aria-[current=page]:text-parchment"
                    data-menu-initial-focus={index === 0 ? "true" : undefined}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
