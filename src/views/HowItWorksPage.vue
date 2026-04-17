<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import RolesTable from '@/components/sections/RolesTable.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { howItWorks as h } from '@/content/how-it-works'
import { gsap } from 'gsap'
import { ScrollTrigger } from '@/directives/reveal'

// ─── End-to-End Workflow squiggly pipeline ────────────────────────────────────
const VW = 1200
const VH = 280
const PAD_X = 100
const MID_Y = 140
const AMP = 65

const workflowFlow = computed(() => {
  const steps = h.workflow.steps
  const n = steps.length
  const pts = steps.map((label, i) => {
    const x = PAD_X + (i / (n - 1)) * (VW - 2 * PAD_X)
    let y: number
    if (i === 0 || i === n - 1) y = MID_Y
    else y = i % 2 === 1 ? MID_Y - AMP : MID_Y + AMP
    return { x, y, label, above: y < MID_Y, last: i === n - 1 }
  })
  let d = `M ${pts[0]!.x},${pts[0]!.y}`
  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)]!
    const p1 = pts[i]!
    const p2 = pts[i + 1]!
    const p3 = pts[Math.min(n - 1, i + 2)]!
    const cp1x = +(p1.x + (p2.x - p0.x) / 6).toFixed(1)
    const cp1y = +(p1.y + (p2.y - p0.y) / 6).toFixed(1)
    const cp2x = +(p2.x - (p3.x - p1.x) / 6).toFixed(1)
    const cp2y = +(p2.y - (p3.y - p1.y) / 6).toFixed(1)
    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`
  }
  return { pts, path: d }
})

// ─── Scroll-driven animation ──────────────────────────────────────────────────
const waveRef = ref<HTMLDivElement | null>(null)
const pathEl = ref<SVGPathElement | null>(null)
let gsapCtx: gsap.Context | null = null

onMounted(() => {
  if (!pathEl.value || !waveRef.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const pathLength = pathEl.value.getTotalLength()
  const n = workflowFlow.value.pts.length

  gsapCtx = gsap.context(() => {
    gsap.set(pathEl.value!, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })
    const dotEls = waveRef.value!.querySelectorAll<SVGGElement>('.workflow-dot-group')
    gsap.set(dotEls, { opacity: 0, scale: 0.4, transformOrigin: '50% 50%' })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: waveRef.value,
        start: 'top 82%',
        end: 'bottom 55%',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    })

    tl.to(pathEl.value!, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0)

    dotEls.forEach((el, i) => {
      tl.to(el, { opacity: 1, scale: 1, duration: 0.08, ease: 'back.out(2)' }, i / (n - 1))
    })
  }, waveRef.value)
})

onUnmounted(() => {
  gsapCtx?.revert()
})
</script>

<template>
  <HeroSection
    :headline="h.hero.headline"
    :subheadline="h.hero.subheadline"
    :tension-line="h.hero.tensionLine"
    :supporting-line="h.hero.supportingLine"
  />

  <!-- ── End-to-End Workflow ── -->
  <SectionBlock headline="End-to-End Workflow" alt>
    <div ref="waveRef" class="workflow-wave" :aria-label="h.workflow.steps.join(' → ')">
      <svg
        class="workflow-wave__svg"
        :viewBox="`0 0 ${VW} ${VH}`"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="workflowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#112449" />
            <stop offset="100%" stop-color="#0DB69A" />
          </linearGradient>
        </defs>
        <path ref="pathEl" :d="workflowFlow.path" fill="none" stroke="url(#workflowGrad)"
          stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
        <g v-for="(pt, i) in workflowFlow.pts" :key="pt.label" class="workflow-dot-group">
          <line :x1="pt.x" :y1="pt.above ? pt.y - 13 : pt.y + 13"
            :x2="pt.x" :y2="pt.above ? pt.y - 32 : pt.y + 32"
            stroke="#0DB69A" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6" />
          <circle :cx="pt.x" :cy="pt.y" r="11" fill="white"
            :stroke="pt.last ? '#0DB69A' : '#112449'" stroke-width="2.5" />
          <circle :cx="pt.x" :cy="pt.y" r="5" :fill="pt.last ? '#0DB69A' : '#112449'" />
          <text :x="pt.x" :y="pt.above ? pt.y - 40 : pt.y + 48"
            text-anchor="middle" font-family="system-ui, -apple-system, sans-serif"
            font-size="13" font-weight="600" :fill="pt.last ? '#0DB69A' : '#112449'"
          >{{ pt.label }}</text>
        </g>
      </svg>
    </div>

    <div class="workflow-grid-mobile">
      <div v-for="(step, i) in h.workflow.steps" :key="step"
        class="workflow-grid-mobile__step"
        :class="{ 'workflow-grid-mobile__step--outcome': i === h.workflow.steps.length - 1 }">
        <span class="workflow-grid-mobile__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="workflow-grid-mobile__label">{{ step }}</span>
      </div>
    </div>

    <p class="workflow-caption">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M7 1.5L8.4 5.5h4.1L9.2 7.7l1.2 3.8L7 9.3l-3.4 2.2 1.2-3.8L1.5 5.5h4.1L7 1.5z"
          stroke="currentColor" stroke-width="1.1" stroke-linejoin="round" />
      </svg>
      {{ h.workflow.overlayLabel }}
    </p>
    <p>{{ h.workflow.supportingLine }}</p>
    <p class="text-muted">{{ h.workflow.additionalLine }}</p>
  </SectionBlock>

  <!-- ── Step-by-Step Breakdown ── -->
  <SectionBlock headline="Step-by-Step Breakdown">
    <ol class="steps">
      <li v-for="(step, i) in h.steps" :key="step.title" class="steps__item">
        <span class="steps__num">{{ i + 1 }}</span>
        <div class="steps__body">
          <h3>{{ step.title.replace(/^Step \d+:\s*/, '') }}</h3>
          <div class="steps__groups">
            <div v-if="step.actors?.length" class="steps__group">
              <h4>Actors</h4>
              <ul><li v-for="a in step.actors" :key="a">{{ a }}</li></ul>
            </div>
            <div v-if="step.process?.length" class="steps__group">
              <h4>Process</h4>
              <ul><li v-for="p in step.process" :key="p">{{ p }}</li></ul>
            </div>
            <div v-if="step.swiftMatchRole?.length" class="steps__group">
              <h4>SwiftMatch Role</h4>
              <ul><li v-for="r in step.swiftMatchRole" :key="r">{{ r }}</li></ul>
            </div>
          </div>
          <p v-if="step.keyLine" class="steps__key">{{ step.keyLine }}</p>
          <p v-if="step.additionalLine" class="steps__note">{{ step.additionalLine }}</p>
          <p v-if="step.impactLine" class="steps__note">{{ step.impactLine }}</p>
        </div>
      </li>
    </ol>
  </SectionBlock>

  <!-- ── Roles & Responsibilities ── -->
  <RolesTable
    :headline="h.roles.headline"
    :rows="h.roles.rows"
    :closing-line="h.roles.closingLine"
  />

  <!-- ── Where SwiftMatch Operates ── -->
  <SectionBlock :headline="h.whereOperates.headline" alt>
    <!-- Architecture layers -->
    <div v-reveal.stagger="{ stagger: 0.1, y: 20 }" class="arch-layers">
      <div
        v-for="(layer, i) in h.whereOperates.flow"
        :key="layer"
        class="arch-layer"
        :class="{ 'arch-layer--core': i === 1 }"
      >
        <span class="arch-layer__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="arch-layer__label">{{ layer }}</span>
        <span v-if="i === 1" class="arch-layer__badge">SwiftMatch</span>
      </div>
    </div>

    <ul class="dot-list">
      <li v-for="p in h.whereOperates.points" :key="p">{{ p }}</li>
    </ul>
    <p class="callout">{{ h.whereOperates.keyLine }}</p>
  </SectionBlock>

  <!-- ── Integration ── -->
  <SectionBlock :headline="h.integration.headline">
    <p>{{ h.integration.lead }}</p>

    <!-- System tags -->
    <div class="system-tags">
      <span v-for="sys in h.integration.systems" :key="sys" class="system-tag">{{ sys }}</span>
    </div>

    <p class="section-eyebrow">Key Points</p>
    <ul class="dot-list">
      <li v-for="p in h.integration.keyPoints" :key="p">{{ p }}</li>
    </ul>
  </SectionBlock>

  <!-- ── Summary ── -->
  <SectionBlock :headline="h.summary.headline" alt>
    <p class="lead">{{ h.summary.lead }}</p>
    <div v-reveal.stagger="{ stagger: 0.07, y: 14 }" class="summary-points">
      <div v-for="p in h.summary.points" :key="p" class="summary-point">
        <span class="summary-point__icon" aria-hidden="true">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </span>
        <span>{{ p }}</span>
      </div>
    </div>
    <p class="callout">{{ h.summary.closingLine }}</p>
  </SectionBlock>

  <FinalCTA
    :headline="h.finalCta.headline"
    :subtext="h.finalCta.subtext"
    :ctas="h.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── Squiggly pipeline ────────────────────────────────────────────────────────
.workflow-wave {
  width: 100%;
  overflow-x: auto;
  &__svg { display: block; min-width: 600px; }
}

.workflow-grid-mobile {
  display: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: $color-border;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $color-border;

  @media (max-width: 600px) { display: grid; }

  &__step {
    background: $color-white;
    padding: $space-5;
    display: flex;
    flex-direction: column;
    gap: $space-1;
  }
  &__num {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: 1.75rem;
    line-height: 1;
    letter-spacing: -0.04em;
    background: linear-gradient(180deg, $color-navy 0%, $color-navy-light 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &__label {
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    line-height: 1.3;
  }
  &__step--outcome {
    background: $color-teal-soft;
    .workflow-grid-mobile__num {
      background: $color-teal-deep;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .workflow-grid-mobile__label { color: $color-teal-deep; font-weight: $font-weight-bold; }
  }
}

@media (max-width: 600px) { .workflow-wave { display: none; } }

.workflow-caption {
  display: inline-flex;
  align-items: center;
  gap: $space-2;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-teal-deep;
  margin: 0;
}

// ─── Shared utilities ─────────────────────────────────────────────────────────
.lead {
  font-size: $font-size-md;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  margin: 0;
}

.text-muted {
  color: $color-text-muted;
  font-size: $font-size-sm;
  margin: 0;
}

.callout {
  padding: $space-4 $space-5;
  background: $color-teal-soft;
  border-left: 3px solid $color-teal-deep;
  border-radius: 0 $radius-sm $radius-sm 0;
  font-weight: $font-weight-medium;
  color: $color-navy;
  font-size: $font-size-sm;
  margin: 0;
}

.dot-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: $space-3;

  li {
    display: flex;
    align-items: flex-start;
    gap: $space-3;
    font-size: $font-size-sm;
    color: $color-text;
    line-height: 1.55;

    &::before {
      content: '';
      flex-shrink: 0;
      margin-top: 0.45em;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: $color-teal-deep;
    }
  }
}

.section-eyebrow {
  font-size: $font-size-xs;
  font-weight: $font-weight-bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $color-teal-deep;
  margin: 0;
}

// ─── Architecture layers (Where SwiftMatch Operates) ──────────────────────────
.arch-layers {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: $color-border;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $color-border;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.arch-layer {
  background: $color-white;
  padding: $space-6 $space-5;
  display: flex;
  flex-direction: column;
  gap: $space-2;

  &--core {
    background: $color-teal-soft;
    border-top: 3px solid $color-teal-deep;
  }

  &__num {
    font-family: $font-family-display;
    font-weight: $font-weight-bold;
    font-size: clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem);
    line-height: 1;
    letter-spacing: -0.04em;
    background: linear-gradient(180deg, $color-navy 0%, $color-navy-light 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    .arch-layer--core & {
      background: $color-teal-deep;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__label {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    color: $color-navy;
    line-height: 1.3;

    .arch-layer--core & { color: $color-teal-deep; font-weight: $font-weight-bold; }
  }

  &__badge {
    display: inline-block;
    font-size: $font-size-xs;
    font-weight: $font-weight-bold;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $color-teal-deep;
    background: rgba($color-teal-deep, 0.12);
    border-radius: $radius-sm;
    padding: 2px $space-2;
    width: fit-content;
  }
}

// ─── Integration: system tags ─────────────────────────────────────────────────
.system-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $space-2;
}

.system-tag {
  display: inline-flex;
  align-items: center;
  padding: $space-2 $space-4;
  background: $color-white;
  border: 1px solid $color-border;
  border-radius: $radius-full;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-navy;
}

// ─── Summary: feature point items ────────────────────────────────────────────
.summary-points {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: $space-3;

  @media (max-width: 640px) { grid-template-columns: 1fr; }
}

.summary-point {
  display: flex;
  align-items: flex-start;
  gap: $space-3;
  padding: $space-4 $space-5;
  background: $color-white;
  border: 1px solid $color-border;
  border-left: 3px solid $color-teal-deep;
  border-radius: 0 $radius-md $radius-md 0;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  line-height: 1.45;

  &__icon {
    flex-shrink: 0;
    margin-top: 1px;
    width: 20px;
    height: 20px;
    border-radius: $radius-full;
    background: $color-teal-soft;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $color-teal-deep;
  }
}

// ─── Timeline Steps ───────────────────────────────────────────────────────────
.steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  &__item {
    display: flex;
    gap: $space-6;
    position: relative;
    padding-bottom: $space-10;

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 19px;
      top: 42px;
      bottom: 0;
      width: 1px;
      background: rgba($color-navy, 0.12);
    }
    &:last-child { padding-bottom: 0; }
  }

  &__num {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: $radius-full;
    background: $color-navy;
    color: $color-white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: $font-weight-bold;
    font-size: $font-size-sm;
    position: relative;
    z-index: 1;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: $space-4;
    padding-top: $space-2;
    min-width: 0;

    h3 {
      color: $color-navy;
      margin: 0;
      font-size: $font-size-md;
      font-weight: $font-weight-semibold;
      line-height: 1.3;
    }
  }

  &__groups { display: flex; flex-wrap: wrap; gap: $space-6; }

  &__group {
    display: flex;
    flex-direction: column;
    gap: $space-2;
    min-width: 160px;

    h4 {
      margin: 0;
      font-size: $font-size-xs;
      font-weight: $font-weight-semibold;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: $color-teal-deep;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: $space-1;
    }

    li {
      font-size: $font-size-sm;
      color: $color-text;
      line-height: 1.5;
      padding-left: $space-3;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0.55em;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: rgba($color-navy, 0.3);
      }
    }
  }

  &__key {
    font-weight: $font-weight-medium;
    color: $color-navy;
    margin: 0;
    padding: $space-3 $space-4;
    background: $color-teal-soft;
    border-left: 3px solid $color-teal-deep;
    border-radius: 0 $radius-sm $radius-sm 0;
    font-size: $font-size-sm;
  }

  &__note {
    margin: 0;
    font-size: $font-size-sm;
    color: $color-text-muted;
    line-height: 1.6;
  }
}
</style>
