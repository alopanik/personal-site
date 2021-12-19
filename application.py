from flask import Flask, request, abort, render_template


app = Flask(__name__)


@app.route('/webhook', methods=['POST'])
def webhook():
    if request.method == 'POST':
        print(request.json)
        return '', 200
    else:
        abort(400)

@app.route('/', methods=['GET'])
def index():
    return render_template('welcome.html')


if __name__ == '__main__':
    app.run()
