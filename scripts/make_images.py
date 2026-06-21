#!/usr/bin/env python3
"""Generate tasteful branded gradient placeholder images for the L. P. Savani site.
Each image is a soft diagonal gradient with a readable label and a small note that
it should be replaced with a real photo. Real photos: see IMAGE_ASSETS_NEEDED.md.
"""
import os
import math
from PIL import Image, ImageDraw, ImageFont

OUT = "public/images"
os.makedirs(OUT, exist_ok=True)

# Brand-adjacent palettes (top-left -> bottom-right), kept deep enough for white text.
PALETTES = [
    ((27, 77, 151), (19, 35, 63)),     # royal -> ink
    ((30, 64, 120), (12, 28, 56)),     # deep blue
    ((42, 92, 150), (20, 48, 92)),     # steel blue
    ((19, 35, 63), (40, 70, 120)),     # ink -> blue
    ((46, 84, 130), (24, 44, 80)),     # slate blue
    ((35, 73, 130), (60, 50, 30)),     # blue -> warm
    ((30, 60, 110), (90, 70, 35)),     # blue -> gold-ish
    ((25, 70, 140), (18, 40, 75)),
]

# label, filename, palette index, size
SPECS = [
    ("Campus", "hero.jpg", 3, (1600, 1000)),
    ("Admissions", "admissions.jpg", 6, (1200, 900)),
    ("Academics", "academics.jpg", 2, (1200, 900)),
    ("Principal", "principal.jpg", 0, (800, 1000)),
    ("L. P. Savani, Palanpor", "og-image.jpg", 0, (1200, 630)),
    ("Campus Overview", "campus-overview.jpg", 4, (1200, 900)),
    ("About Campus", "about-campus.jpg", 1, (1200, 900)),
    ("Student Life", "student-life.jpg", 5, (1200, 900)),
    # Facilities
    ("Smart Classroom", "facility-classroom.jpg", 0, (900, 600)),
    ("Library", "facility-library.jpg", 1, (900, 600)),
    ("Science Lab", "facility-science-lab.jpg", 2, (900, 600)),
    ("Computer Lab", "facility-computer-lab.jpg", 3, (900, 600)),
    ("Robotics & STEM", "facility-robotics.jpg", 4, (900, 600)),
    ("Sports", "facility-sports.jpg", 5, (900, 600)),
    ("Art, Music & Dance", "facility-arts.jpg", 6, (900, 600)),
    ("Transport", "facility-transport.jpg", 7, (900, 600)),
    ("Safety & Security", "facility-safety.jpg", 0, (900, 600)),
    ("Medical Support", "facility-medical.jpg", 1, (900, 600)),
    ("Dining", "facility-dining.jpg", 2, (900, 600)),
    ("Auditorium", "facility-auditorium.jpg", 3, (900, 600)),
    # Gallery
    ("Campus", "gallery-campus-1.jpg", 4, (900, 700)),
    ("Assembly Ground", "gallery-campus-2.jpg", 1, (900, 700)),
    ("Classroom", "gallery-classroom-1.jpg", 0, (900, 700)),
    ("Group Work", "gallery-classroom-2.jpg", 2, (900, 700)),
    ("Annual Day", "gallery-event-1.jpg", 6, (900, 700)),
    ("Festival", "gallery-event-2.jpg", 5, (900, 700)),
    ("National Day", "gallery-event-3.jpg", 3, (900, 700)),
    ("Sports Day", "gallery-sports-1.jpg", 5, (900, 700)),
    ("Indoor Games", "gallery-sports-2.jpg", 4, (900, 700)),
    ("Craft Session", "gallery-activity-1.jpg", 6, (900, 700)),
    ("Clubs", "gallery-activity-2.jpg", 7, (900, 700)),
    ("Lab Bench", "gallery-lab-1.jpg", 2, (900, 700)),
]


def load_font(size, bold=True):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()


def gradient(size, c1, c2):
    w, h = size
    base = Image.new("RGB", size, c1)
    top = Image.new("RGB", size, c2)
    mask = Image.new("L", size)
    md = mask.load()
    diag = (w + h) or 1
    for y in range(h):
        for x in range(w):
            md[x, y] = int(255 * ((x + y) / diag))
    base.paste(top, (0, 0), mask)
    return base


def add_texture(img):
    """Subtle large soft circles for a less flat look."""
    w, h = img.size
    overlay = Image.new("RGBA", img.size, (255, 255, 255, 0))
    od = ImageDraw.Draw(overlay)
    spots = [
        (int(w * 0.82), int(h * 0.2), int(min(w, h) * 0.5), (255, 255, 255, 16)),
        (int(w * 0.1), int(h * 0.85), int(min(w, h) * 0.55), (255, 255, 255, 12)),
        (int(w * 0.5), int(h * 0.5), int(min(w, h) * 0.7), (0, 0, 0, 18)),
    ]
    for cx, cy, r, col in spots:
        od.ellipse([cx - r, cy - r, cx + r, cy + r], fill=col)
    return Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")


def draw_centered(draw, text, font, cx, y, fill, max_w):
    # naive wrap
    words = text.split()
    lines, cur = [], ""
    for word in words:
        test = (cur + " " + word).strip()
        if draw.textlength(test, font=font) <= max_w:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    ascent, descent = font.getmetrics()
    lh = ascent + descent + 6
    for i, line in enumerate(lines):
        tw = draw.textlength(line, font=font)
        draw.text((cx - tw / 2, y + i * lh), line, font=font, fill=fill)
    return y + len(lines) * lh


def make(label, filename, pidx, size):
    c1, c2 = PALETTES[pidx % len(PALETTES)]
    img = gradient(size, c1, c2)
    img = add_texture(img)
    draw = ImageDraw.Draw(img)
    w, h = size

    # monogram badge
    badge = max(36, int(min(w, h) * 0.12))
    bx, by = int(w * 0.5 - badge / 2), int(h * 0.30 - badge / 2)
    draw.rounded_rectangle([bx, by, bx + badge, by + badge], radius=int(badge * 0.22),
                           fill=(255, 255, 255, 255))
    mono_font = load_font(int(badge * 0.42))
    mono = "LPS"
    mw = draw.textlength(mono, font=mono_font)
    ma, md_ = mono_font.getmetrics()
    draw.text((bx + badge / 2 - mw / 2, by + badge / 2 - (ma + md_) / 2),
              mono, font=mono_font, fill=(27, 77, 151))

    # label
    label_font = load_font(max(22, int(min(w, h) * 0.085)))
    y = int(h * 0.30 + badge * 0.75)
    y = draw_centered(draw, label, label_font, w / 2, y, (255, 255, 255), int(w * 0.82))

    # note
    note_font = load_font(max(13, int(min(w, h) * 0.032)), bold=False)
    note = "Replace with real photo"
    nw = draw.textlength(note, font=note_font)
    draw.text((w / 2 - nw / 2, y + 8), note, font=note_font, fill=(220, 162, 58))

    img.save(os.path.join(OUT, filename), "JPEG", quality=82, optimize=True)


for spec in SPECS:
    make(*spec)

print(f"Generated {len(SPECS)} images in {OUT}")
files = sorted(os.listdir(OUT))
print(len(files), "files:", ", ".join(files))
