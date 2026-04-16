import type { Directive, DirectiveBinding } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { ScrollTrigger }

type RevealValue =
  | undefined
  | string
  | {
      selector?: string
      y?: number
      stagger?: number
      duration?: number
      start?: string
      delay?: number
    }

interface RevealEl extends HTMLElement {
  __revealCtx?: gsap.Context
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

function resolveOpts(binding: DirectiveBinding<RevealValue>) {
  const v = binding.value
  const base = {
    selector: '',
    y: 32,
    stagger: 0.1,
    duration: 0.8,
    start: 'top 90%',
    delay: 0,
  }
  if (typeof v === 'string') return { ...base, selector: v }
  if (v && typeof v === 'object') return { ...base, ...v }
  return base
}

export const vReveal: Directive<RevealEl, RevealValue> = {
  mounted(el, binding) {
    if (prefersReducedMotion()) return

    const opts = resolveOpts(binding)
    const stagger = binding.modifiers.stagger || !!opts.selector

    const targets = opts.selector
      ? Array.from(el.querySelectorAll<HTMLElement>(opts.selector))
      : stagger
        ? (Array.from(el.children) as HTMLElement[])
        : [el]

    if (!targets.length) return

    el.__revealCtx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: opts.y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: opts.duration,
          ease: 'power3.out',
          stagger: stagger ? opts.stagger : 0,
          delay: opts.delay,
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: el,
            start: opts.start,
            once: true,
            invalidateOnRefresh: true,
          },
        },
      )
    }, el)
  },
  unmounted(el) {
    el.__revealCtx?.revert()
    el.__revealCtx = undefined
  },
}
