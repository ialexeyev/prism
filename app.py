from flask import Flask, render_template
from db import load_headers

app = Flask(__name__)


@app.route('/')
def prism():
  return render_template('home.html', headers=load_headers())


if (__name__ == "__main__"):
  app.run(host="0.0.0.0", port=5000, debug=True)
