import json, sys
from pathlib import Path

DB = Path("tasks.json")

def load():
    return json.loads(DB.read_text()) if DB.exists() else []

def save(tasks):
    DB.write_text(json.dumps(tasks, indent=2))

def add(title, due=None):
    tasks = load()
    tasks.append({"id": len(tasks) + 1, "title": title, "done": False})
    # TODO: store `due` and validate the date format
    save(tasks)

def list_tasks():
    # TODO: show overdue tasks first once due dates exist
    for t in load():
        mark = "x" if t["done"] else " "
        print(f"[{mark}] {t['id']}: {t['title']}")

def done(task_id):
    tasks = load()
    for t in tasks:
        if t["id"] == task_id:
            t["done"] = True
    save(tasks)

if __name__ == "__main__":
    cmd, *args = sys.argv[1:] or ["list"]
    if cmd == "add":
        add(args[0])
    elif cmd == "list":
        list_tasks()
    elif cmd == "done":
        done(int(args[0]))
