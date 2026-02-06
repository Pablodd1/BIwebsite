import pandas as pd
import json

try:
    df = pd.read_excel('static_data/data.xlsx', header=1)
    with open('columns_dump.json', 'w') as f:
        json.dump(df.columns.tolist(), f)
    
except Exception as e:
    with open('columns_dump.json', 'w') as f:
        f.write(json.dumps(["ERROR", str(e)]))
