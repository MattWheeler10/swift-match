<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import WorkflowFlow from '@/components/sections/WorkflowFlow.vue'
import VerticalSelector from '@/components/sections/VerticalSelector.vue'
import ProblemSection from '@/components/sections/ProblemSection.vue'
import SolutionSteps from '@/components/sections/SolutionSteps.vue'
import SectionBlock from '@/components/sections/SectionBlock.vue'
import PlatformVideo from '@/components/sections/PlatformVideo.vue'
import ImpactColumns from '@/components/sections/ImpactColumns.vue'
import TransformationPathway from '@/components/sections/TransformationPathway.vue'
import ProofMetrics from '@/components/sections/ProofMetrics.vue'
import PilotBlock from '@/components/sections/PilotBlock.vue'
import FinalCTA from '@/components/sections/FinalCTA.vue'
import { RouterLink } from 'vue-router'
import { globalHome } from '@/content/global-home'
import { gsap } from 'gsap'
import { ScrollTrigger } from '@/directives/reveal'

const g = globalHome

// ─── How It Works squiggly pipeline ──────────────────────────────────────────
const VW = 960
const VH = 290
const PAD_X = 80
const MID_Y = 145
const AMP = 70

const howFlow = computed(() => {
  const steps = g.howItWorks.steps
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

// ─── Scroll-driven pipeline animation ────────────────────────────────────────
const waveRef = ref<HTMLDivElement | null>(null)
const pathEl = ref<SVGPathElement | null>(null)
let gsapCtx: gsap.Context | null = null

onMounted(() => {
  if (!pathEl.value || !waveRef.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const pathLength = pathEl.value.getTotalLength()
  const n = howFlow.value.pts.length

  gsapCtx = gsap.context(() => {
    // Initial state: path hidden, all dots hidden
    gsap.set(pathEl.value!, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })
    const dotEls = waveRef.value!.querySelectorAll<SVGGElement>('.how-dot-group')
    gsap.set(dotEls, { opacity: 0, scale: 0.4, transformOrigin: '50% 50%' })

    // Scrubbed timeline: path draws, then each dot pops in at its proportional position
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: waveRef.value,
        start: 'top 82%',
        end: 'bottom 55%',
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    })

    // Draw the path across the full timeline
    tl.to(pathEl.value!, {
      strokeDashoffset: 0,
      ease: 'none',
      duration: 1,
    }, 0)

    // Each dot appears when the line reaches its proportional position
    dotEls.forEach((el, i) => {
      tl.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.08,
        ease: 'back.out(2)',
      }, i / (n - 1))
    })
  }, waveRef.value)
})

onUnmounted(() => {
  gsapCtx?.revert()
})
</script>

<template>
  <HeroSection
    :headline="g.hero.headline"
    :subheadline="g.hero.subheadline"
    :supporting-line="g.hero.supportingLine"
    :key-line="g.hero.keyLine"
    :ctas="g.hero.ctas"
  >
    <template #visual>
      <WorkflowFlow :steps="g.hero.workflow.steps" :label="g.hero.workflow.label" vertical />
    </template>
  </HeroSection>

  <VerticalSelector />

  <ProblemSection
    :headline="g.problem.headline"
    :points="g.problem.points"
    :supporting-lines="g.problem.supportingLines"
    :closing-line="g.problem.closingLine"
    :link="g.problem.link"
  />

  <SolutionSteps
    :headline="g.solution.headline"
    :steps="g.solution.steps"
    :supporting-line="g.solution.supportingLine"
    :two-columns="g.solution.twoColumns"
    :closing-lines="g.solution.closingLines"
    :links="g.solution.links"
  />

  <SectionBlock :headline="g.howItWorks.headline" :subheadline="g.howItWorks.supportingLine">
    <!-- Squiggly pipeline (desktop) -->
    <div ref="waveRef" class="how-wave" :aria-label="g.howItWorks.steps.join(' → ')">
      <svg
        class="how-wave__svg"
        :viewBox="`0 0 ${VW} ${VH}`"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="howGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#112449" />
            <stop offset="100%" stop-color="#0DB69A" />
          </linearGradient>
        </defs>

        <!-- Squiggly path (animated via stroke-dashoffset) -->
        <path
          ref="pathEl"
          :d="howFlow.path"
          fill="none"
          stroke="url(#howGrad)"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />

        <!-- Dot + label groups (each revealed as line reaches them) -->
        <g
          v-for="(pt, i) in howFlow.pts"
          :key="pt.label"
          class="how-dot-group"
        >
          <!-- Dashed tick connecting dot to label -->
          <line
            :x1="pt.x" :y1="pt.above ? pt.y - 13 : pt.y + 13"
            :x2="pt.x" :y2="pt.above ? pt.y - 32 : pt.y + 32"
            stroke="#0DB69A" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"
          />
          <!-- Outer ring -->
          <circle
            :cx="pt.x" :cy="pt.y" r="11"
            fill="white"
            :stroke="pt.last ? '#0DB69A' : '#112449'"
            stroke-width="2.5"
          />
          <!-- Inner dot -->
          <circle
            :cx="pt.x" :cy="pt.y" r="5"
            :fill="pt.last ? '#0DB69A' : '#112449'"
          />
          <!-- Label -->
          <text
            :x="pt.x"
            :y="pt.above ? pt.y - 40 : pt.y + 48"
            text-anchor="middle"
            font-family="system-ui, -apple-system, sans-serif"
            font-size="13"
            font-weight="600"
            :fill="pt.last ? '#0DB69A' : '#112449'"
          >{{ pt.label }}</text>
        </g>
      </svg>
    </div>

    <!-- Mobile fallback: numbered grid -->
    <div class="how-grid-mobile">
      <div
        v-for="(step, i) in g.howItWorks.steps"
        :key="step"
        class="how-grid-mobile__step"
        :class="{ 'how-grid-mobile__step--outcome': i === g.howItWorks.steps.length - 1 }"
      >
        <span class="how-grid-mobile__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <span class="how-grid-mobile__label">{{ step }}</span>
      </div>
    </div>

    <div class="how-cta">
      <RouterLink :to="g.howItWorks.link.to" class="btn btn--primary how-cta__btn">
        {{ g.howItWorks.link.label }}
        <svg class="btn__caret" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
      </RouterLink>
    </div>
  </SectionBlock>

  <PlatformVideo
    :text-above="g.platform.textAboveVideo"
    :subtext="g.platform.subtext"
    :ctas="g.platform.ctas"
  />

  <ImpactColumns
    :headline="g.impact.headline"
    :columns="g.impact.columns"
    :closing-line="g.impact.closingLine"
    :link="g.impact.link"
  />

  <TransformationPathway
    :headline="g.transformation.headline"
    :stages="g.transformation.stages"
    :supporting-line="g.transformation.supportingLine"
    :closing-line="g.transformation.closingLine"
    :links="g.transformation.links"
    alt
  />

  <ProofMetrics
    :headline="g.proof.headline"
    :metrics="g.proof.metrics"
  />

  <PilotBlock
    :headline="g.pilot.headline"
    :points="g.pilot.points"
    :supporting-line="g.pilot.supportingLine"
    :cta="g.pilot.cta"
    alt
  />

  <FinalCTA
    :headline="g.finalCta.headline"
    :subtext="g.finalCta.subtext"
    :ctas="g.finalCta.ctas"
  />
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── Squiggly pipeline (desktop) ─────────────────────────────────────────────
.how-wave {
  width: 100%;
  overflow-x: auto;

  &__svg {
    display: block;
    min-width: 560px;
  }
}

// ─── Mobile numbered grid ─────────────────────────────────────────────────────
.how-grid-mobile {
  display: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: $color-border;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $color-border;

  @media (max-width: 560px) { display: grid; }

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

    .how-grid-mobile__num {
      background: $color-teal-deep;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .how-grid-mobile__label {
      color: $color-teal-deep;
      font-weight: $font-weight-bold;
    }
  }
}

@media (max-width: 560px) {
  .how-wave { display: none; }
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
.how-cta {
  display: flex;

  &__btn {
    padding: $space-4 $space-10;
    font-size: $font-size-base;
  }
}
</style>
