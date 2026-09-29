# Project architecture

- LiftPass public QR reports use database functions that mask unfinished audits and return only completed, customer-facing visit fields; this prevents premature disclosure even when requests bypass the page.
- LiftPass password recovery uses a public, noindex reset page and email links rather than exposing or storing passwords; this keeps account recovery private.