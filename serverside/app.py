from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import Google_Search

app = Flask(__name__)
CORS(app)


@app.route("/status", methods=["GET"])
def get_status():
    return jsonify({"status": 200})

@app.route("/search", methods=["GET"])
def get_search():
    args = request.args
    q = args.get("q")
    
    return jsonify(Google_Search.product_query(q))




if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9888, debug=True)