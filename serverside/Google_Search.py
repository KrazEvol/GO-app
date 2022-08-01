from turtle import title
from serpapi import GoogleSearch
import requests
import os
import json 

serp_api_key = "c4f1dd1d6fc3f58d4819dead3539f2533cbbdd9c1828e3f48d5f247c302a4502"
google_api_key = "AIzaSyD3R_jpgFJ9RAclVE2FViNdWQ5gwmup83M"



def get_search_from_serp(q):
    params = {
    "q": q,
    "tbm": "shop",
    "location": "San Francisco",
    "hl": "en",
    "gl": "us",
    "api_key": serp_api_key
    }
    search = GoogleSearch(params)
    return search.get_json()


def get_search_from_google(product):
    url = f"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.78825,-122.4324&radius=5000&type=?&keyword={product}&key={google_api_key}"
    response = requests.request("GET", url)
    return response.json()


def product_query(product):
    serp_result = get_search_from_serp(product)
    serp_shopping_results = serp_result["shopping_results"] or []
    google_result = get_search_from_google(product)
    google_shopping_results = google_result["results"] or []

    final_result = []

    for x in serp_shopping_results:
        serp_source = x.get("source")
        if serp_source:
            for y in google_shopping_results:
                if y.get("name", "").lower() == serp_source.lower():
                    final_result.append({
                        "title": x.get("title"),
                        "price": x.get("price"),
                        "rating": y.get("rating"),
                        "lat" : y.get("geometry",{}).get("location",{}).get("lat"),
                        "lng" : y.get("geometry",{}).get("location",{}).get("lng")
                    })
                    break
                    
    return final_result
