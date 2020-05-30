import { h, Transition, VNode } from 'vue'

const upDown = (chirden: VNode) =>
  h(
    Transition,
    {
      type: 'animation',
      duration: 300,
      enterActiveClass: 'weui-animate-slide-up',
      leaveActiveClass: 'weui-animate-slide-down'
    },
    () => chirden
  )

const fadeIn = (chirden: VNode) =>
  h(
    Transition,
    {
      type: 'animation',
      duration: 300,
      enterActiveClass: 'weui-animate-fade-in',
      leaveActiveClass: 'weui-animate-fade-out'
    },
    () => chirden
  )

export { fadeIn, upDown }
