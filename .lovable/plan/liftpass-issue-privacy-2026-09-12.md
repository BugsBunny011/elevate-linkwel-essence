# LiftPass issue privacy

## What will change
- On the public QR page, an unfinished audit will show only a general count such as “2 issues identified”.
- Hide issue names, checklist results, voltage readings, and technical notes until maintenance is marked complete.
- After completion, show the full audit history and the work recorded as rectified.
- Add a clear “Maintenance completed” control to the technician service-visit flow so staff decide when details become public.

## Technical details
- Add completion fields to audit records in Lovable Cloud.
- Restrict direct public access to raw audit details and expose a safe public view that masks unfinished records while preserving issue counts.
- Keep full details available to authorized staff in admin and technician areas.
- Update the public LiftPass screen and technician workflow, then verify both hidden and completed states.
