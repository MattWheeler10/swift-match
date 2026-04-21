<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from '@/directives/reveal'

let _id = 0

const props = defineProps<{ steps: string[] }>()

const gradId = `waveGrad-${++_id}`

const VW = 1200
const VH = 270
const PAD_X = 80
const MID_Y = 135
const AMP = 65

const waveData = computed(() => {
  const n = props.steps.length
  const pts = props.steps.map((label, i) => {
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

const waveRef = ref<HTMLDivElement | null>(null)
const pathEl = ref<SVGPathElement | null>(null)
let gsapCtx: gsap.Context | null = null

onMounted(() => {
  if (!pathEl.value || !waveRef.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const pathLength = pathEl.value.getTotalLength()
  const n = waveData.value.pts.length

  gsapCtx = gsap.context(() => {
    gsap.set(pathEl.value!, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    })
    const dotEls = waveRef.value!.querySelectorAll<SVGGElement>('.wave-dot-group')
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

onUnmounted(() => gsapCtx?.revert())
</script>

<template>
  <!-- Desktop: squiggly SVG pipeline -->
  <div ref="waveRef" class="wave-pipeline" :aria-label="steps.join(' → ')">
    <svg
      class="wave-pipeline__svg"
      :viewBox="`0 0 ${VW} ${VH}`"
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient :id="gradId" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#112449" />
          <stop offset="100%" stop-color="#0DB69A" />
        </linearGradient>
      </defs>

      <path
        ref="pathEl"
        :d="waveData.path"
        fill="none"
        :stroke="`url(#${gradId})`"
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g v-for="(pt, i) in waveData.pts" :key="pt.label" class="wave-dot-group">
        <line
          :x1="pt.x" :y1="pt.above ? pt.y - 13 : pt.y + 13"
          :x2="pt.x" :y2="pt.above ? pt.y - 32 : pt.y + 32"
          stroke="#0DB69A" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.6"
        />
        <circle :cx="pt.x" :cy="pt.y" r="11" fill="white"
          :stroke="pt.last ? '#0DB69A' : '#112449'" stroke-width="2.5" />
        <circle :cx="pt.x" :cy="pt.y" r="5" :fill="pt.last ? '#0DB69A' : '#112449'" />
        <text
          :x="pt.x"
          :y="pt.above ? pt.y - 40 : pt.y + 48"
          text-anchor="middle"
          font-family="system-ui, -apple-system, sans-serif"
          font-size="11"
          font-weight="600"
          :fill="pt.last ? '#0DB69A' : '#112449'"
        >{{ pt.label }}</text>
      </g>
    </svg>
  </div>

  <!-- Mobile fallback: numbered grid -->
  <div class="wave-mobile">
    <div
      v-for="(step, i) in steps"
      :key="step"
      class="wave-mobile__step"
      :class="{ 'wave-mobile__step--outcome': i === steps.length - 1 }"
    >
      <span class="wave-mobile__num">{{ String(i + 1).padStart(2, '0') }}</span>
      <span class="wave-mobile__label">{{ step }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables' as *;

// ─── Desktop SVG pipeline ─────────────────────────────────────────────────────
.wave-pipeline {
  width: 100%;
  overflow-x: auto;

  &__svg {
    display: block;
    min-width: 560px;
  }
}

@media (max-width: 560px) {
  .wave-pipeline { display: none; }
}

// ─── Mobile numbered grid ─────────────────────────────────────────────────────
.wave-mobile {
  display: none;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: $color-border;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $color-border;

  @media (max-width: 560px) { display: grid; }
}

.wave-mobile__step {
  background: $color-white;
  padding: $space-5;
  display: flex;
  flex-direction: column;
  gap: $space-1;
}

.wave-mobile__num {
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

.wave-mobile__label {
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  color: $color-navy;
  line-height: 1.3;
}

.wave-mobile__step--outcome {
  background: $color-teal-soft;

  .wave-mobile__num {
    background: $color-teal-deep;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .wave-mobile__label {
    color: $color-teal-deep;
    font-weight: $font-weight-bold;
  }
}
</style>
