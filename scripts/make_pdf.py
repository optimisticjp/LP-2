from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas

PATH = "public/prospectus-placeholder.pdf"
W, H = A4
BLUE = HexColor("#1b4d97")
INK = HexColor("#13233f")
GOLD = HexColor("#d8a23a")
SOFT = HexColor("#5b6b85")

c = canvas.Canvas(PATH, pagesize=A4)

# ---- Cover ----
c.setFillColor(BLUE)
c.rect(0, 0, W, H, fill=1, stroke=0)
c.setFillColor(HexColor("#13233f"))
c.rect(0, 0, W, H*0.32, fill=1, stroke=0)

# badge
c.setFillColor(HexColor("#ffffff"))
c.roundRect(W/2-22*mm, H-70*mm, 44*mm, 44*mm, 8*mm, fill=1, stroke=0)
c.setFillColor(BLUE)
c.setFont("Helvetica-Bold", 34)
c.drawCentredString(W/2, H-52*mm, "LPS")

c.setFillColor(HexColor("#ffffff"))
c.setFont("Helvetica-Bold", 26)
c.drawCentredString(W/2, H-92*mm, "L. P. Savani School")
c.setFont("Helvetica-Bold", 18)
c.setFillColor(GOLD)
c.drawCentredString(W/2, H-104*mm, "Palanpor, Surat")
c.setFillColor(HexColor("#dbe4f3"))
c.setFont("Helvetica", 13)
c.drawCentredString(W/2, H-120*mm, "School Prospectus  |  Admissions 2026-27")

c.setFillColor(HexColor("#9fb6d8"))
c.setFont("Helvetica-Oblique", 11)
c.drawCentredString(W/2, 40*mm, "This is a placeholder document shipped with the website.")
c.drawCentredString(W/2, 33*mm, "Replace it with the school's official prospectus PDF.")
c.showPage()

# ---- Inside page ----
def heading(y, text):
    c.setFillColor(BLUE)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(22*mm, y, text)
    c.setStrokeColor(GOLD)
    c.setLineWidth(2)
    c.line(22*mm, y-3*mm, 60*mm, y-3*mm)

def para(y, lines, leading=6.2*mm):
    c.setFillColor(SOFT)
    c.setFont("Helvetica", 11)
    for i, ln in enumerate(lines):
        c.drawString(22*mm, y - i*leading, ln)
    return y - len(lines)*leading

c.setFillColor(INK)
c.setFont("Helvetica-Bold", 20)
c.drawString(22*mm, H-30*mm, "Welcome to L. P. Savani School, Palanpor")

y = H-48*mm
y = para(y, [
    "A nurturing campus in Palanpor, Surat where children learn with understanding,",
    "take part with joy and grow with confidence. We are part of the L. P. Savani group,",
    "with more than two decades of experience educating children across Surat.",
])

y -= 6*mm
heading(y, "What we offer")
y -= 11*mm
y = para(y, [
    "- Smart classrooms with concept-first teaching",
    "- Science, computer and STEM / robotics labs",
    "- Library and a strong reading culture",
    "- Sports, music, dance and art",
    "- Safe campus with CCTV and trained staff",
    "- Managed transport and medical support",
])

y -= 6*mm
heading(y, "Admissions 2026-27")
y -= 11*mm
y = para(y, [
    "Admissions for the 2026-27 session are open. Seats in each grade are limited.",
    "Send an enquiry, talk to our counsellor and visit the campus before you decide.",
])

y -= 6*mm
heading(y, "Contact")
y -= 11*mm
y = para(y, [
    "Address: T.P-8, Near Palanpur Jakat Naka, Canal Road, Palanpor, Surat - 394510",
    "Phone: +91 99049 02626",
    "Email: lpspalanpor@gmail.com",
    "Office hours: Monday to Saturday, 9:00 AM to 4:00 PM",
])

c.setFillColor(HexColor("#9aa7bd"))
c.setFont("Helvetica-Oblique", 9)
c.drawCentredString(W/2, 18*mm, "Placeholder prospectus - replace with the official school document before publishing.")
c.showPage()
c.save()
print("Wrote", PATH)
