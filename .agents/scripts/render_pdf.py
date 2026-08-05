import fitz
import os

doc = fitz.open("attached_assets/CV_OYOUGOU_Daniel__1785892494622.pdf")
print(f"Pages: {doc.page_count}")
print(f"Metadata: {doc.metadata}")

os.makedirs(".agents/outputs", exist_ok=True)

for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
    out = f".agents/outputs/page_{i+1}.png"
    pix.save(out)
    print(f"Saved {out} ({pix.width}x{pix.height})")

    text = page.get_text()
    print(f"\n--- Page {i+1} text ---\n{text}")
