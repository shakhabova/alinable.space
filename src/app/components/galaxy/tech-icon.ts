import { Component, input } from '@angular/core';

/**
 * Cosmic line-style icons for the IT galaxy planets and role list.
 * Renders a crisp monochrome SVG (currentColor) that sits on the glowing orbs.
 */
@Component({
  selector: 'app-tech-icon',
  standalone: true,
  template: `
    @switch (name()) {
      @case ('code') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8 8l-4 4 4 4" /><path d="M16 8l4 4-4 4" /><path d="M13.5 6l-3 12" />
        </svg>
      }
      @case ('design') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M15 4l5 5L9 20l-5 1 1-5L15 4z" /><path d="M12.5 6.5l5 5" />
        </svg>
      }
      @case ('chart') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="20" x2="5" y2="12" /><line x1="12" y1="20" x2="12" y2="5" /><line x1="19" y1="20" x2="19" y2="9" />
        </svg>
      }
      @case ('megaphone') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 10v4h3l8 4V6L6 10H3z" /><path d="M17 9.5a4 4 0 0 1 0 5" />
        </svg>
      }
      @case ('people') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
          <path d="M16 5.5a3 3 0 0 1 0 6" /><path d="M17 14.2a5.5 5.5 0 0 1 3.5 4.8" />
        </svg>
      }
      @case ('bug') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <ellipse cx="12" cy="13" rx="5" ry="6" /><path d="M12 7V5" /><path d="M9.2 6L8 4" /><path d="M14.8 6L16 4" />
          <path d="M7 11H3" /><path d="M17 11h4" /><path d="M7 15H3.5" /><path d="M17 15h3.5" /><path d="M7.4 18.6L5 21" /><path d="M16.6 18.6L19 21" />
        </svg>
      }
      @case ('server') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="4" width="16" height="6.5" rx="1.6" /><rect x="4" y="13.5" width="16" height="6.5" rx="1.6" />
          <line x1="7.5" y1="7.2" x2="7.5" y2="7.2" /><line x1="7.5" y1="16.7" x2="7.5" y2="16.7" />
        </svg>
      }
      @case ('gear') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="3.2" />
          <line x1="12" y1="2.5" x2="12" y2="5.2" /><line x1="12" y1="18.8" x2="12" y2="21.5" />
          <line x1="2.5" y1="12" x2="5.2" y2="12" /><line x1="18.8" y1="12" x2="21.5" y2="12" />
          <line x1="5.3" y1="5.3" x2="7.2" y2="7.2" /><line x1="16.8" y1="16.8" x2="18.7" y2="18.7" />
          <line x1="18.7" y1="5.3" x2="16.8" y2="7.2" /><line x1="7.2" y1="16.8" x2="5.3" y2="18.7" />
        </svg>
      }
      @case ('layers') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" />
        </svg>
      }
      @case ('check') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4.5" />
        </svg>
      }
      @case ('growth') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 17l5-5 3 3 6-7" /><path d="M14 8h4v4" /><path d="M3.5 21h17" />
        </svg>
      }
      @case ('rocket') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2.5c2.6 2.1 4 5.1 4 8.2L14 13h-4l-2-2.3c0-3.1 1.4-6.1 4-8.2z" />
          <circle cx="12" cy="8.5" r="1.4" /><path d="M10 13l-2.5 3.5 3-1" /><path d="M14 13l2.5 3.5-3-1" />
        </svg>
      }
      @case ('bar-chart') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
        </svg>
      }
      @case ('timer') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="13" r="8" /><path d="M12 9v4l2.5 2.5" /><path d="M10 2h4" /><path d="M12 2v3" />
        </svg>
      }
      @case ('salary') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      }
      @case ('target') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" />
        </svg>
      }
      @case ('book') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      }
      @case ('sparkle') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3l1.8 5.4L19.2 10.2l-5.4 1.8L12 17.4l-1.8-5.4L4.8 10.2l5.4-1.8L12 3z" />
          <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />
        </svg>
      }
      @case ('x-circle') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      }
      @case ('calendar') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2.5" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      }
      @default {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <circle cx="12" cy="12" r="8" />
        </svg>
      }
    }
  `,
  styles: `
    :host { display: inline-flex; line-height: 0; width: 100%; height: 100%; }
    svg { width: 100%; height: 100%; display: block; }
  `,
})
export class TechIcon {
  name = input.required<string>();
}
