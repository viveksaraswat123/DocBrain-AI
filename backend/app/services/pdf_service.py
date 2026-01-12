from reportlab.pdfgen import canvas
import os

def generate_pdf(content: str) -> str:
    filename = "exported_document.pdf"
    filepath = os.path.join(os.getcwd(), filename)
    c = canvas.Canvas(filepath)
    c.drawString(100, 750, content)
    c.save()
    return filepath