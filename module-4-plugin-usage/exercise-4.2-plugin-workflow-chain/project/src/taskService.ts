import { Request, Response } from "express";
import { readFileSync } from "fs";

// Unused import -- code quality issue
import path from "path";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

// Missing return type annotation
export function getAllTasks(req: Request, res: Response) {
  const tasks: Task[] = [
    { id: 1, title: "Review PR", done: false },
    { id: 2, title: "Deploy v2", done: false },
    { id: 3, title: "Write tests", done: true },
  ];

  // Inconsistent formatting
  if (tasks.length === 0) {
    return res.status(404).json({ error: "No tasks found" });
  }

  res.json(tasks);
}

// Missing type annotation for parameter
export function getTaskById(req: any, res: Response) {
  const id = parseInt(req.params.id);
  // Should validate NaN case
  const task = { id, title: `Task ${id}`, done: false };
  res.json(task);
}

// Unused function -- dead code
function formatDate(date: Date) {
  return date.toISOString().split("T")[0];
}

export function createTask(req: Request, res: Response) {
  const { title } = req.body;
  // No validation on title
  const task: Task = {
    id: Math.floor(Math.random() * 1000),
    title: title,
    done: false,
  };
  res.status(201).json(task);
}
