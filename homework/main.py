class Task:
    def __init__(self, title, deadline):
        self.title = title
        self.deadline = deadline
        self.completed = False

    def mark_done(self):
        self.completed = True

    def to_dict(self):
        return {
            "title": self.title,
            "deadline": self.deadline,
            "completed": self.completed
        }

    @staticmethod
    def from_dict(data):
        task = Task(data["title"], data["deadline"])
        task.completed = data["completed"]
        return task


class TaskManager:
    def __init__(self):
        self.tasks = []

    def add_task(self, title, deadline):
        self.tasks.append(Task(title, deadline))

    def show_tasks(self):
        for i, task in enumerate(self.tasks):
            status = "✔" if task.completed else "✘"
            print(f"{i}. {task.title} | {task.deadline} | {status}")

    def mark_task_done(self, index):
        if 0 <= index < len(self.tasks):
            self.tasks[index].mark_done()

    def stats(self):
        total = len(self.tasks)
        done = sum(1 for t in self.tasks if t.completed)
        print(f"Всего: {total}, Выполнено: {done}, Осталось: {total - done}")

    def search(self, keyword):
        for task in self.tasks:
            if keyword.lower() in task.title.lower():
                print(task.title, task.deadline)

    def check_deadlines(self):
        from datetime import datetime
        now = datetime.now()

        for task in self.tasks:
            deadline = datetime.strptime(task.deadline, "%Y-%m-%d")
            if now > deadline and not task.completed:
                print(f"⚠️ ПРОСРОЧЕНО: {task.title}")

    def to_list(self):
        return [t.to_dict() for t in self.tasks]

    def load_from_list(self, data):
        self.tasks = [Task.from_dict(t) for t in data]