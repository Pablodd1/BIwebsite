import pandas as pd
import json
import os
import requests
from PIL import Image
from io import BytesIO

# Ensure directory exists
output_dir = 'public/raster/products'
os.makedirs(output_dir, exist_ok=True)

def download_and_process_image(url, ref_code):
    if pd.isna(url) or not isinstance(url, str):
        return None
    
    filename = f"{ref_code}.webp"
    filepath = os.path.join(output_dir, filename)
    
    # Skip if exists (optional, but good for speed)
    if os.path.exists(filepath):
        return f"/raster/products/{filename}"

    try:
        # Handle Google Drive links
        if "drive.google.com" in url:
            file_id = url.split('/d/')[1].split('/')[0]
            download_url = f'https://drive.google.com/uc?id={file_id}'
        else:
            download_url = url

        response = requests.get(download_url, timeout=10)
        if response.status_code == 200:
            img = Image.open(BytesIO(response.content))
            
            # Convert to RGB (in case of RGBA/P) before saving as WebP
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
                
            # Resize if too huge (optional optimization)
            if img.width > 1200:
                ratio = 1200 / img.width
                new_height = int(img.height * ratio)
                img = img.resize((1200, new_height), Image.Resampling.LANCZOS)
                
            img.save(filepath, "WEBP", quality=80)
            print(f"Processed: {filename}")
            return f"/raster/products/{filename}"
    except Exception as e:
        print(f"Failed image {ref_code}: {e}")
        return None

try:
    df = pd.read_excel('static_data/data.xlsx', header=1)
    
    products = []
    
    for _, row in df.iterrows():
        def get_val(val, default=''):
            if pd.isna(val) or str(val).lower() == 'nan':
                return default
            return val

        def get_float(val):
            try:
                return float(val)
            except:
                return 0.0

        ref_code = str(get_val(row['RefCode'])).split('.')[0]
        
        if not ref_code or ref_code == 'nan': 
            continue

        # Image processing
        raw_url = get_val(row['ImageURL'])
        image_path = download_and_process_image(raw_url, ref_code)

        product = {
            "id": ref_code,
            "name": get_val(row['Name']),
            "basePrice": get_float(row['Price']),
            "description": get_val(row['Description']),
            "category": get_val(row['Category']),
            "subcategory": get_val(row['Subcategory']),
            "collection": get_val(row['Collection']),
            "unit": get_val(row['Unit']),
            "itemsPerBox": get_val(row['ItemsPerBox']),
            "dimensions": {
                "metric": {
                    "width": get_float(row['Ancho(cm)']),
                    "length": get_float(row['Largo (cm)']),
                    "thickness": get_float(row['Espesor(mm)']),
                    "widthUnit": 'cm',
                    "lengthUnit": 'cm',
                    "thicknessUnit": 'mm'
                },
                "imperial": {
                    "width": get_float(row['Width(in)']),
                    "length": get_float(row['Length(ft)']),
                    "thickness": get_float(row['Thickness(in)']),
                    "widthUnit": 'in',
                    "lengthUnit": 'ft',
                    "thicknessUnit": 'in'
                }
            },
            "image": image_path, 
            "usage": get_val(row['Usage']),
            "promptModifier": get_val(row['PromptModifier'])
        }
        
        products.append(product)

    with open('static_data/products_full.json', 'w') as f:
        json.dump(products, f, indent=2)
        
    print(f"Successfully converted {len(products)} products.")
    
except Exception as e:
    print("ERROR:", str(e))
