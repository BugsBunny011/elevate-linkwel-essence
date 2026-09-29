# Project architecture

- LiftPass public QR reports use database functions that mask unfinished audits and return only completed, customer-facing visit fields; this prevents premature disclosure even when requests bypass the page.