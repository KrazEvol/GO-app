import requests
import json

url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=29.992279,-90.241699&radius=5000&type=?&keyword=Shoes Mower&key=AIzaSyD3R_jpgFJ9RAclVE2FViNdWQ5gwmup83M"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)
print('#########################################')
print(response.json())
print('#########################################')

#response.json

#print(response.json)
#print(type(response))

#file = open(response.text)
#data = json.load(file)
#for i in data['shopping_results']:
 #   print(i)
#file.close
