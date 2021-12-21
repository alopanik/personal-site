import datetime
import io
import json
import os

from flask import Flask, render_template, request, redirect, Response, send_file, abort

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('home.html')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
