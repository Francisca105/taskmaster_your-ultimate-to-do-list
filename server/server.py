from flask import Flask, request, redirect, jsonify
app = Flask(__name__)

from db import read_notes, create_note, update_note, delete_note

@app.route("/")
def get_all():
    notes = read_notes()
    json_data = [
        {
            "id": id,
            "note": note,
            "status": status,
            "date": date.isoformat()
        }
        for id, note, status, date in notes]
    return jsonify(json_data)

@app.route("/create", methods=["POST"])
def create():
    note = request.form.get("note")
    return [create_note(note)]

@app.route("/add")
def add():
    note = "A new note!"
    return {
        "status": create_note(note)
    }

@app.route("/update", methods=["POST"])
def update():
    id = request.form.get("id")
    note = request.form.get("note")
    return {
        "status": update_note(id, note)
    }

@app.route("/delete/<int:id>")
def delete(id):
    return {
        "status": delete_note(id)
    }


if __name__ == "__main__":
    app.run()