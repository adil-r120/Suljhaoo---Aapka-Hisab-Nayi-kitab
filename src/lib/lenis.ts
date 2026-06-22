import type Lenis from 'lenis';

/**
 * Typed module-level singleton for the Lenis smooth-scroll instance.
 * Replaces the unsafe `(window as any).lenisInstance` pattern.
 *
 * Usage:
 *   import { getLenis, setLenis } from '../lib/lenis';
 *   setLenis(lenisInstance);  // in useLenis hook
 *   getLenis()?.scrollTo(...)  // anywhere in the app
 */

let _lenis: Lenis | null = null;

export const getLenis = (): Lenis | null => _lenis;
export const setLenis = (instance: Lenis | null): void => {
  _lenis = instance;
};
