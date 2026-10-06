# Sabpuja Mandir Bell — canonical source

This is the canonical bell sound for the Sabpuja Interactive Puja Guide.

- **User-supplied file:** `freesound_community-indian-temple-bell-68150.mp3`
- **Downloaded by user from:** Pixabay temple sound-effects library
- **Use:** ritual-step completion and final **Puja Sampann** celebration
- **Character:** real struck mandir bell, natural metallic attack, room ambience, organic decay
- **Do not replace with:** synthesized notification/chime effects

## Playback treatment

- **Step completion:** use the first clean strike with roughly 3–3.5 seconds of natural decay
- **Puja Sampann:** allow a longer roughly 6–6.5 second ring-out
- Keep the recording natural; only trim/fade for clean UX playback
- User-facing Sound on/off control remains required

## Deployment rule

Do **not** fetch, convert, process, or acquire this audio through GitHub Actions.

The final MP3 must be stored or hosted directly as a static asset and referenced by the Puja Guide without CI-based audio acquisition.
