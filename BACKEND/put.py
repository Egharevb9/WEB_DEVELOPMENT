from http.server import BaseHTTPRequestHandler,HTTPServer
import json
delete_data = [
    {
        "name": "princess egharevba",
        "age": 23,
        "favourite_color": "pink",
        "track": "AI Developer"
    }
]

class BasicAPI(BaseHTTPRequestHandler):
    def send_data(self, payload, status = 201):
        self.send_response(status)
        self.send_header("content-type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode())
    def do_PUT(self):
        content_size = int(self.headers.get("Content-Length", 0))
        parsed_data = self.rfile.read(content_size)
        updated_data = json.loads(parsed_data)
        name_to_update = updated_data.get("name") # updating name
        for item in delete_data:
            if item["name"] == name_to_update:
                item.update(updated_data)
                updated = True
                break
        if updated:
            self.send_data({
                 "Message": f" Updated data for {name_to_update}",
            "data": updated_data
            }, status=200)
        else:
            self.send_data({
                "Message": f"No record found for {name_to_update}"
            },status=404)
       

def run():
    HTTPServer(('localhost', 8000), BasicAPI).serve_forever()
print("Application is running")
run()
        
# print("Application is running")
# run() 