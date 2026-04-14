<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Impact', href: '#impact' },
  { label: 'Platform', href: '#platform' },
  { label: 'Pilot', href: '#pilot' },
]

const workflowSteps = [
  'Advert',
  'ATS',
  'CV Ingestion',
  'Scoring',
  'Ranking',
  'Shortlist',
  'Scheduling',
  'Interview',
  'Hire <48h',
]

const verticals = [
  {
    id: 'hospitals',
    label: 'Hospitals',
    tagline: 'NHS & Private Trusts',
    description: 'Reduce agency spend and increase clinical capacity.',
    route: '/hospitals',
    color: '#2563EB',
    colorAlpha: 'rgba(37,99,235,0.08)',
    colorBorder: 'rgba(37,99,235,0.2)',
    colorShadow: 'rgba(37,99,235,0.12)',
  },
  {
    id: 'care-homes',
    label: 'Care Homes',
    tagline: 'Residential & Nursing',
    description: 'Stabilise staffing and reduce reliance on agency workers.',
    route: '/care-homes',
    color: '#059669',
    colorAlpha: 'rgba(5,150,105,0.08)',
    colorBorder: 'rgba(5,150,105,0.2)',
    colorShadow: 'rgba(5,150,105,0.12)',
  },
  {
    id: 'domiciliary',
    label: 'Domiciliary',
    tagline: 'Home Care Providers',
    description: 'Ensure every visit is covered without agency dependence.',
    route: '/domiciliary',
    color: '#7C3AED',
    colorAlpha: 'rgba(124,58,237,0.08)',
    colorBorder: 'rgba(124,58,237,0.2)',
    colorShadow: 'rgba(124,58,237,0.12)',
  },
]

function navigate(route: string) {
  router.push(route)
}
</script>

<template>
  <div class="page">
    <!-- ─── Background orbs ─── -->
    <div class="orbs" aria-hidden="true">
      <div class="orb orb--1" />
      <div class="orb orb--2" />
      <div class="orb orb--3" />
    </div>

    <!-- ─── Navigation ─── -->
    <header class="nav">
      <div class="nav__inner">
        <!-- Logo -->
        <a href="/" class="logo">
          <div class="logo__mark" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                fill="white"
                stroke="white"
                stroke-width="1"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span class="logo__name">SwiftMatch <span class="logo__word">Workforce</span></span>
        </a>

        <!-- Desktop links -->
        <nav class="nav__links" aria-label="Main navigation">
          <a v-for="link in navLinks" :key="link.label" :href="link.href" class="nav__link">
            {{ link.label }}
          </a>
        </nav>

        <!-- Book Demo CTA -->
        <button class="btn-demo" type="button">Book Demo</button>

        <!-- Mobile hamburger -->
        <button
          class="nav__hamburger"
          type="button"
          :aria-expanded="mobileMenuOpen"
          aria-label="Toggle menu"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span /><span /><span />
        </button>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="nav__mobile">
        <a
          v-for="link in navLinks"
          :key="link.label"
          :href="link.href"
          class="nav__mobile-link"
          @click="mobileMenuOpen = false"
        >
          {{ link.label }}
        </a>
        <button class="btn-demo btn-demo--full" type="button">Book Demo</button>
      </div>
    </header>

    <main class="main">
      <!-- ─── Hero ─── -->
      <section class="hero">
        <!-- Left: copy -->
        <div class="hero__left">
          <h1 class="hero__title">
            From Workforce Shortage<br />
            <em>to Workforce Control</em>
          </h1>

          <p class="hero__sub">
            A workforce system that stabilises staffing, reduces agency reliance, and builds a
            continuous, reusable talent pipeline.
          </p>

          <p class="hero__support">
            Workforce supply, cost, and performance are determined by how quickly you can access and
            activate qualified candidates.
          </p>

          <p class="hero__diff">
            Most organisations don't have a recruitment problem — they have a workforce control
            problem. By maintaining a continuous pipeline of pre-qualified candidates, organisations
            reduce vacancy duration and avoid agency reliance.
          </p>

          <div class="hero__ctas">
            <button class="btn-primary" type="button">Start Pilot Deployment</button>
            <button class="btn-ghost" type="button">
              See the Platform in Action
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M2.5 7h9M7 2.5l4.5 4.5L7 11.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Right: workflow diagram -->
        <div class="hero__right">
          <div class="workflow">
            <p class="workflow__label">From weeks to &lt;48 hours to hire</p>
            <div class="workflow__list">
              <div v-for="(step, i) in workflowSteps" :key="step" class="workflow__item">
                <div
                  class="workflow__step"
                  :class="{ 'workflow__step--final': i === workflowSteps.length - 1 }"
                >
                  <span class="workflow__num">{{ String(i + 1).padStart(2, '0') }}</span>
                  {{ step }}
                </div>
                <div
                  v-if="i < workflowSteps.length - 1"
                  class="workflow__connector"
                  :style="{ '--flow-delay': i * 0.14 + 's' }"
                  aria-hidden="true"
                >
                  <svg
                    class="workflow__chevron"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── Vertical Selector ─── -->
      <section class="selector">
        <div class="selector__header">
          <h2 class="selector__title">Who is this for?</h2>
          <p class="selector__sub">Select your sector to see how this works in your organisation</p>
        </div>

        <div class="card-grid">
          <button
            v-for="v in verticals"
            :key="v.id"
            class="v-card"
            :style="{
              '--c': v.color,
              '--c-alpha': v.colorAlpha,
              '--c-border': v.colorBorder,
              '--c-shadow': v.colorShadow,
            }"
            type="button"
            :aria-label="`Explore ${v.label}`"
            @click="navigate(v.route)"
          >
            <div class="v-card__body">
              <div class="v-card__icon" aria-hidden="true">
                <svg
                  v-if="v.id === 'hospitals'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 21V7a2 2 0 012-2h14a2 2 0 012 2v14" />
                  <path d="M3 21h18" />
                  <path d="M9 21v-5h6v5" />
                  <path d="M12 7v6M9 10h6" />
                </svg>
                <svg
                  v-else-if="v.id === 'care-homes'"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
                <svg
                  v-else
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div class="v-card__content">
                <span class="v-card__tag">{{ v.tagline }}</span>
                <h3 class="v-card__title">{{ v.label }}</h3>
                <p class="v-card__desc">{{ v.description }}</p>
              </div>
              <div class="v-card__footer">
                <span class="v-card__cta">Explore</span>
                <svg
                  class="v-card__arrow"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M8 3l5 5-5 5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
// ─── Page ─────────────────────────────────────────────────────────────────────
.page {
  --text: #0f172a;
  --text-muted: #475569;
  --text-subtle: #94a3b8;
  --border: rgba(15, 23, 42, 0.08);
  --card-bg: #ffffff;

  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  font-family: 'Inter', 'Open Sans', system-ui, sans-serif;
  color: var(--text);
  background-color: #f5f7ff;
  background-image: radial-gradient(circle, rgba(15, 23, 42, 0.06) 1px, transparent 1px);
  background-size: 28px 28px;
}

// ─── Background orbs ──────────────────────────────────────────────────────────
.orbs {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);

  &--1 {
    width: 560px;
    height: 560px;
    background: rgba(37, 99, 235, 0.26);
    top: -160px;
    right: -80px;
    animation: drift-1 22s ease-in-out infinite;
  }

  &--2 {
    width: 440px;
    height: 440px;
    background: rgba(124, 58, 237, 0.2);
    bottom: -80px;
    left: -80px;
    animation: drift-2 28s ease-in-out infinite;
  }

  &--3 {
    width: 320px;
    height: 320px;
    background: rgba(5, 150, 105, 0.18);
    top: 40%;
    left: 35%;
    animation: drift-3 34s ease-in-out infinite;
  }
}

@keyframes drift-1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  35% {
    transform: translate(-60px, 80px) scale(1.08);
  }
  70% {
    transform: translate(40px, -50px) scale(0.95);
  }
}
@keyframes drift-2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  40% {
    transform: translate(80px, -60px) scale(1.12);
  }
  75% {
    transform: translate(-40px, 40px) scale(0.92);
  }
}
@keyframes drift-3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  30% {
    transform: translate(60px, 50px) scale(1.15);
  }
  65% {
    transform: translate(-80px, -30px) scale(0.88);
  }
}

// ─── Navigation ───────────────────────────────────────────────────────────────
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(245, 247, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);

  &__inner {
    display: flex;
    align-items: center;
    gap: 32px;
    max-width: 1100px;
    margin-inline: auto;
    padding: 14px 24px;
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 28px;
    margin-right: auto;
  }

  &__link {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 150ms ease;
    cursor: pointer;

    &:hover {
      color: var(--text);
    }
  }

  &__hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    margin-left: auto;

    span {
      display: block;
      width: 22px;
      height: 2px;
      background: var(--text);
      border-radius: 2px;
    }

    @media (max-width: 700px) {
      display: flex;
    }
  }

  &__mobile {
    display: flex;
    flex-direction: column;
    gap: 0;
    border-top: 1px solid var(--border);
    padding: 12px 24px 16px;
  }

  &__mobile-link {
    font-size: 15px;
    font-weight: 500;
    color: var(--text-muted);
    text-decoration: none;
    padding: 10px 0;
    border-bottom: 1px solid var(--border);

    &:hover {
      color: var(--text);
    }
  }

  @media (max-width: 700px) {
    &__links {
      display: none;
    }
  }
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;

  &__mark {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    border-radius: 9px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 0 16px rgba(37, 99, 235, 0.3);
  }

  &__name {
    font-size: 15px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.02em;
  }

  &__word {
    font-weight: 400;
    color: var(--text-muted);
  }
}

// ─── Buttons ──────────────────────────────────────────────────────────────────
.btn-demo {
  padding: 8px 18px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition:
    background 150ms ease,
    transform 150ms ease;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }

  &--full {
    width: 100%;
    margin-top: 12px;
    padding: 12px;
    font-size: 15px;
  }
}

.btn-primary {
  padding: 12px 24px;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 150ms ease,
    box-shadow 150ms ease,
    transform 150ms ease;
  box-shadow: 0 0 24px rgba(37, 99, 235, 0.25);

  &:hover {
    background: #1d4ed8;
    box-shadow: 0 4px 24px rgba(37, 99, 235, 0.35);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 20px;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition:
    color 150ms ease,
    border-color 150ms ease;

  &:hover {
    color: var(--text);
    border-color: rgba(15, 23, 42, 0.2);
  }
}

// ─── Main ─────────────────────────────────────────────────────────────────────
.main {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 24px 80px;
  gap: 80px;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
  width: 100%;
  max-width: 1040px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  &__title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    color: var(--text);
    line-height: 1.1;
    letter-spacing: -0.04em;
    margin: 0;

    em {
      font-style: normal;
      background: linear-gradient(130deg, #2563eb 0%, #7c3aed 60%, #059669 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__sub {
    font-size: 18px;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0;
    font-weight: 500;
  }

  &__support {
    font-size: 15px;
    color: var(--text-muted);
    line-height: 1.7;
    margin: 0;
  }

  &__diff {
    font-size: 14px;
    color: var(--text-subtle);
    line-height: 1.75;
    margin: 0;
    padding: 14px 16px;
    border-left: 3px solid rgba(37, 99, 235, 0.3);
    background: rgba(37, 99, 235, 0.04);
    border-radius: 0 8px 8px 0;
  }

  &__ctas {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    padding-top: 6px;
  }

  &__right {
    position: sticky;
    top: 100px;
  }
}

// ─── Workflow Diagram ─────────────────────────────────────────────────────────
.workflow {
  padding: 24px 20px 20px;
  width: 240px;
  margin-left: auto;

  &__label {
    font-size: 10px;
    font-weight: 600;
    color: var(--text-subtle);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-align: center;
    margin: 0 0 18px;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  &__step {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 9px 14px;
    background: #f8faff;
    border: 1px solid var(--border);
    border-radius: 8px;
    font-size: 12px;
    font-weight: 800;
    color: var(--text-muted);

    &--final {
      background: rgba(37, 99, 235, 0.08);
      border-color: rgba(37, 99, 235, 0.3);
      color: #2563eb;
      font-weight: 700;

      .workflow__num {
        color: #2563eb;
        opacity: 0.6;
      }
    }
  }

  &__num {
    font-size: 10px;
    font-weight: 700;
    color: var(--text-subtle);
    opacity: 0.45;
    min-width: 16px;
    font-variant-numeric: tabular-nums;
  }

  &__connector {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    height: 16px;
    position: relative;
  }

  &__line {
    width: 2px;
    flex: 1;
    background: var(--border);
    position: relative;
    overflow: hidden;
    border-radius: 1px;
  }

  &__chevron {
    color: rgba(15, 23, 42, 0.2);
    flex-shrink: 0;
    display: block;
    margin-top: 6px;
  }
}

@keyframes flow-down {
  0% {
    top: -10px;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

// ─── Vertical Selector ───────────────────────────────────────────────────────
.selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 1040px;

  &__header {
    text-align: center;
  }

  &__title {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.03em;
    margin: 0 0 10px;
  }

  &__sub {
    font-size: 16px;
    color: var(--text-subtle);
    margin: 0;
  }
}

// ─── Card Grid ────────────────────────────────────────────────────────────────
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    max-width: 440px;
  }
}

// ─── Vertical Card ────────────────────────────────────────────────────────────
.v-card {
  --c: #2563eb;
  --c-alpha: rgba(37, 99, 235, 0.08);
  --c-border: rgba(37, 99, 235, 0.2);
  --c-shadow: rgba(37, 99, 235, 0.12);

  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 0;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  box-shadow:
    0 1px 4px rgba(15, 23, 42, 0.06),
    0 4px 16px rgba(15, 23, 42, 0.04);
  transition:
    border-color 300ms ease,
    transform 300ms cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 300ms ease;

  &__body {
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 28px 28px 24px;
    height: 100%;
  }

  &__icon {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--c-alpha);
    border: 1px solid var(--c-border);
    border-radius: 12px;
    color: var(--c);
    flex-shrink: 0;
    transition: box-shadow 300ms ease;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__tag {
    font-size: 11px;
    font-weight: 600;
    color: var(--c);
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  &__title {
    font-size: 20px;
    font-weight: 700;
    color: var(--text);
    letter-spacing: -0.02em;
    line-height: 1.2;
  }

  &__desc {
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.65;
    margin-top: 4px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }

  &__cta {
    font-size: 13px;
    font-weight: 600;
    color: var(--text-subtle);
    transition: color 200ms ease;
  }

  &__arrow {
    color: var(--text-subtle);
    transition:
      color 200ms ease,
      transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover {
    border-color: var(--c-border);
    transform: translateY(-3px);
    box-shadow:
      0 12px 40px var(--c-shadow),
      0 2px 8px rgba(15, 23, 42, 0.06),
      0 0 0 1px var(--c-border);

    .v-card__icon {
      box-shadow: 0 0 20px var(--c-alpha);
    }
    .v-card__cta,
    .v-card__arrow {
      color: var(--c);
    }
    .v-card__arrow {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(-3px);
  }
}
</style>
