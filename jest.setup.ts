import '@testing-library/jest-dom'

class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

;(global as typeof global & { ResizeObserver: typeof ResizeObserver }).ResizeObserver =
  global.ResizeObserver || (ResizeObserverMock as typeof ResizeObserver)

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
})
