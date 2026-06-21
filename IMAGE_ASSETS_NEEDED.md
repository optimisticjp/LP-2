# Image assets needed

Every image in this project is currently a **branded placeholder** (a blue gradient
with a label). The site is fully working, but to make it look real you should replace
each file in `public/images/` with an actual photo, keeping the **same file name**.

A few tips for good results:

- Use bright, well-lit, in-focus photos.
- Match the shape (aspect ratio) roughly so nothing looks stretched. Each file lists a
  recommended size below.
- Get consent before using photos of children, and follow your school's media policy.
- Keep file sizes reasonable (ideally under ~400 KB each) so pages load fast. You can
  compress with any free tool before adding them.
- Keep the same `.jpg` extension and the exact same file name.

To replace an image: delete the placeholder in `public/images/`, then drop your photo in
with the **same name**. No code changes are needed.

---

## Key pages and branding

| File name | Recommended size | What it should show |
| --- | --- | --- |
| `hero.jpg` | 1600 x 1000 | Wide, welcoming shot of the campus or happy students. Used as the home page banner. |
| `og-image.jpg` | 1200 x 630 | Social share image (WhatsApp, Facebook). School building or logo-friendly shot. |
| `admissions.jpg` | 1200 x 900 | Parents and a child visiting, or a warm front-office / entrance shot. |
| `academics.jpg` | 1200 x 900 | A lesson in progress, students engaged in class. |
| `principal.jpg` | 800 x 1000 (portrait) | A clear portrait photo of the Principal, Dr. Kshitij Patel. |
| `campus-overview.jpg` | 1200 x 900 | The school building or main campus view. |
| `about-campus.jpg` | 1200 x 900 | Campus exterior, walkway, or entrance. |
| `student-life.jpg` | 1200 x 900 | Students taking part in an activity or working together. |

## Facilities (recommended size 900 x 600)

| File name | What it should show |
| --- | --- |
| `facility-classroom.jpg` | A smart classroom with a digital board. |
| `facility-library.jpg` | The library / reading room. |
| `facility-science-lab.jpg` | The science laboratory. |
| `facility-computer-lab.jpg` | The computer / ICT lab. |
| `facility-robotics.jpg` | STEM / robotics corner or maker space. |
| `facility-sports.jpg` | Sports ground or children playing a sport. |
| `facility-arts.jpg` | Art, music or dance room. |
| `facility-transport.jpg` | A school bus or the transport fleet. |
| `facility-safety.jpg` | Security gate, CCTV, or staff at entry. |
| `facility-medical.jpg` | First-aid / infirmary room. |
| `facility-dining.jpg` | Dining hall or cafeteria. |
| `facility-auditorium.jpg` | Auditorium or main activity hall. |

## Gallery (recommended size 900 x 700)

| File name | What it should show |
| --- | --- |
| `gallery-campus-1.jpg` | Open courtyard or campus grounds. |
| `gallery-campus-2.jpg` | Assembly ground or another campus angle. |
| `gallery-classroom-1.jpg` | Teacher with young learners. |
| `gallery-classroom-2.jpg` | Group activity or discussion in class. |
| `gallery-event-1.jpg` | Annual day performance on stage. |
| `gallery-event-2.jpg` | A festival celebration. |
| `gallery-event-3.jpg` | Independence Day / Republic Day event. |
| `gallery-sports-1.jpg` | Sports day on the field. |
| `gallery-sports-2.jpg` | Indoor games or fitness. |
| `gallery-activity-1.jpg` | Hands-on craft session. |
| `gallery-activity-2.jpg` | A club or creative activity. |
| `gallery-lab-1.jpg` | Students working at a lab bench. |

---

## Other files to replace

- **`public/prospectus-placeholder.pdf`** — replace with the school's official prospectus.
  If you change the file name, update `prospectusUrl` in `data/school.ts`.
- **`public/logo.svg`** and **`app/icon.svg`** — simple text-based logo marks. Replace with
  the official school logo if you have a vector (SVG) version.

## Where the captions and labels come from

Image captions and alt text live in `data/gallery.ts` and `data/facilities.ts`. If you add
photos that show something different, update the captions there so they match.
