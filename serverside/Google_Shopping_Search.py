from serpapi import GoogleSearch
import os 

params = {
  "q": "shoes",
  "tbm": "shop",
  "location": "Kenner",
  "hl": "en",
  "gl": "us",
  "api_key": "c4f1dd1d6fc3f58d4819dead3539f2533cbbdd9c1828e3f48d5f247c302a4502"
}

search = GoogleSearch(params)
results = search.get_json()


for result in results['shopping_results']:
  print(f"Title: {result['title']}\nPrice: {result['price']}\nSupplier: {result['source']}\n")
  print({result['source']})

  url = "c4f1dd1d6fc3f58d4819dead3539f2533cbbdd9c1828e3f48d5f247c302a4502"