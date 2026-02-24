// ──────────────────────────────────────────────
// Analytics Event Tracking for YAS 2.0
// Replace with your analytics provider SDK
// ──────────────────────────────────────────────

export type AnalyticsEvent =
  | 'cta_click'
  | 'demo_form_complete'
  | 'api_kit_request'
  | 'product_segment_tab'
  | 'case_study_open'
  | 'logo_wall_filter'
  | 'locale_select'
  | 'outbound_link'
  | 'scroll_depth'
  | 'search_open'
  | 'search_query'
  | 'nav_click'
  | 'page_view';

interface EventPayload {
  event: AnalyticsEvent;
  properties?: Record<string, string | number | boolean>;
  timestamp?: number;
}

const eventQueue: EventPayload[] = [];

export function trackEvent(event: AnalyticsEvent, properties?: Record<string, string | number | boolean>) {
  const payload: EventPayload = {
    event,
    properties: {
      ...properties,
      url: window.location.pathname,
      referrer: document.referrer,
    },
    timestamp: Date.now(),
  };

  eventQueue.push(payload);

  // In development, log to console
  if (import.meta.env.DEV) {
    console.log('[YAS Analytics]', payload);
  }

  // In production, replace with your analytics provider:
  // analytics.track(event, properties);
}

export function trackPageView(path: string, locale: string) {
  trackEvent('page_view', { path, locale });
}

export function trackScrollDepth(depth: number) {
  trackEvent('scroll_depth', { depth });
}

export function trackCTAClick(ctaName: string, location: string) {
  trackEvent('cta_click', { cta_name: ctaName, location });
}

export function trackOutboundLink(url: string) {
  trackEvent('outbound_link', { destination: url });
}

export function getEventQueue() {
  return [...eventQueue];
}
