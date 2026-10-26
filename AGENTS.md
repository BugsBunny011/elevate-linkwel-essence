# Project architecture

- LiftPass public QR pages use a count-only database function and never expose checklists or technical issue details, even after maintenance; staff retain private audit records.
- LiftPass technician contacts on QR pages come from a separate completed-visits-only function returning name, number, and date; this preserves private service details.
- LiftPass password recovery uses a public, noindex reset page and email links rather than exposing or storing passwords; this keeps account recovery private.
- Blog guides opt into contents, comparison tables, crawlable FAQ accordions and enquiry CTAs through the existing BlogPost template; optional features preserve older posts unchanged.