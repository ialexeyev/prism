from flask import Flask, render_template, request
from db import load, loadspec, loadunique, newuser

app = Flask(__name__)


#--- PAGES ---
# HOME
@app.route('/')
def prism():
  return render_template('home.html',
                         base=load('base', '*'),
                         services=load('services', '*'),
                         departments=loadunique('users', 'udepartment'),
                         positions=loadunique('users', 'uposition'),
                         supervisors=loadunique('users', 'usupervisor'))


#--- PROCESSORS ---
# 1. Sign in process
@app.route('/signinprocess', methods=['POST'])
def signinprocess():
  data = loadspec('users', 'uid', 'upassword')
  result = "checking"
  for i in range(0, len(data)):
    if (data[i][0] == request.form['userid']):
      if (data[i][1] == request.form['userpass']):
        result = "OK"
        break
      else:
        result = "PASS NOK"
        break
    else:
      result = "ID NOK"   
  return result

# 2. Sign up process
@app.route('/signupprocess', methods=['POST'])
def signupprocess():
  if(newuser(request.form['newfname'], request.form['newlname'], request.form['newmail'], request.form['newdep'], request.form['newpos'], request.form['newsup']) == "OK"):
    return "OK"
  else:
    return "NOK"



# RUN
if (__name__ == "__main__"):
  app.run(host="0.0.0.0", port=5000, debug=True)
