
from flask import Flask, render_template

app = Flask(__name__, template_folder='src/templates', static_folder='src/static')

@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/api')
def api():
    return render_template('api.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3840)