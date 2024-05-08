from flask import Flask, request, redirect, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

from db import create_table, read_tasks, create_task, update_task, update_task_status, delete_task

def verify_task(task):
    if(task == None or task == ""):
        return {"status": False, "msg": "Task cannot be empty"}
    if(len(task) >= 255):
        return {"status": False, "msg": "Task cannot be longer or equal than 255 characters"}
    return {"status": True}

@app.route("/")
def home():
    create_table()
    json_data = {"status": 200}
    return jsonify(json_data)

@app.route("/tasks")
def get_all():
    tasks = read_tasks()
    json_data = [
        {
            "id": id,
            "task": task,
            "status": status,
            "date": date.strftime("%d-%m-%Y")
        }
        for id, task, status, date in tasks]
    return jsonify(json_data)

@app.route("/create", methods=["POST"])
def create():
    data = request.get_json()
    task = data.get("task")
    verify = verify_task(task)
    if(not verify.get('status')):
        return jsonify(verify)
    return jsonify({
        "status": create_task(task)
        })

@app.route("/update/<int:id>", methods=["POST"])
def update(id):
    data = request.get_json()
    task = data.get("task")
    return jsonify(verify_task(task))

@app.route("/status/<int:id>")
def status(id):
    return jsonify({
        "status": update_task_status(id)
    })

@app.route("/delete/<int:id>")
def delete(id):
    return jsonify({
        "status": delete_task(id)
    })

if __name__ == "__main__":
    app.run()