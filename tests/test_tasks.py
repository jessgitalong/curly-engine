import tasks

def test_add_and_done(tmp_path, monkeypatch):
    monkeypatch.setattr(tasks, "DB", tmp_path / "t.json")
    tasks.add("water beds")
    tasks.done(1)
    assert tasks.load()[0]["done"] is True

def test_due_date_stored(tmp_path, monkeypatch):
    monkeypatch.setattr(tasks, "DB", tmp_path / "t.json")
    tasks.add("turn compost", due="2026-12-01")
    assert tasks.load()[0]["due"] == "2026-12-01"
