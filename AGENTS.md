# Project architecture

- LiftPass public QR pages use a count-only database function and never expose checklists or technical issue details, even after maintenance; staff retain private audit records.
- LiftPass password recovery uses a public, noindex reset page and email links rather than exposing or storing passwords; this keeps account recovery private.