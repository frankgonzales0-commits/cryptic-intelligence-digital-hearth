import Link from "next/link";

import { SectionContainer } from "@/components/section-container";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-midnight text-parchment">
      <SectionContainer className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <p className="font-display text-2xl font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-parchment/80">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 text-sm text-parchment/70">
              {siteConfig.leader.name}, {siteConfig.leader.title}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-11 items-center text-sm font-semibold text-parchment/80 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-parchment/80 hover:text-white"
                  href="/privacy"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-parchment/80 hover:text-white"
                  href="/accessibility"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-sm text-parchment/70">
          <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
        </div>
      </SectionContainer>
    </footer>
  );
}
