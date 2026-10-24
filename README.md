# Dorita Olarte Website

Static responsive website prepared for GitHub + Cloudflare Pages.

## Interactive update
- Progressive hero micro-animation: comprender / acompañar / transformar
- Interactive care-path selector
- Interactive country / modality context for virtual care
- Expandable FAQ accordion
- Subtle service-card motion and conference-image parallax on desktop
- Reduced-motion support and mobile-first fallbacks

## Deployment
Framework preset: None
Build command: leave blank (or `exit 0` if required)
Build output directory: `.`


## Conversion / launch checklist

This build is optimized around the outcome of first-consultation requests from Spanish-speaking adults, especially outside Colombia. Before public acquisition campaigns:

1. Configure `assets/js/config.js` with the professional email and/or WhatsApp number.
2. If using a real scheduler (Doctoralia or another service), add its URL to `doctoraliaUrl`.
3. Connect analytics. The site already emits `cta_click`, `care_path_selected`, `location_selected`, and `lead_form_submit_attempt` events; these contain no clinical form content or PII.
4. Legally review the privacy notice for the jurisdictions in which the service will be offered.
5. Confirm professional eligibility / scope for virtual care by patient location and service type.
6. Measure the funnel: visitor -> CTA click -> form start -> form submit / booking -> clinically appropriate lead.
