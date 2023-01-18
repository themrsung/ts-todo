import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { TodoList } from "./components/TodoList"
import { TodoProps } from "./components/Todo"

function App() {
    const [todos, setTodos] = useState<TodoProps[]>([])

    const [newTodoContent, setNewTodoContent] = useState("")
    const [newTodoId, setNewTodoId] = useState(0)

    const [idOfTodoToSetAsDone, setIdOfTodoToSetAsDone] = useState(0)
    const [idOfTodoToSetAsNotDone, setIdOfTodoToSetAsNotDone] = useState(0)
    const [idOfTodoToDelete, setIdOfTodoToDelete] = useState(0)

    const onAddTodo = () => {
        const todoToAdd: TodoProps = {
            id: newTodoId,
            content: newTodoContent,
            isDone: false
        }
        setTodos([...todos, todoToAdd])
    }

    const onSetTodoAsDone = () => {
        const t = todos.filter((to) => to.id === idOfTodoToSetAsDone)
        const rest = todos.filter((to) => to.id !== idOfTodoToSetAsDone)

        t[0].isDone = true
        setTodos([...t, ...rest])
    }
    const onSetTodoAsNotDone = () => {
        const t = todos.filter((to) => to.id === idOfTodoToSetAsNotDone)
        const rest = todos.filter((to) => to.id !== idOfTodoToSetAsNotDone)

        t[0].isDone = false
        setTodos([...t, ...rest])
    }

    const onDeleteTodo = () => {
        setTodos(todos.filter((t) => t.id !== idOfTodoToDelete))
    }

    return (
        <>
            <div>
                HOW TO EDIT: DELETE THEN ADD AGAIN
                <br />
                add new
                <input
                    value={newTodoContent}
                    onChange={(e) => {
                        setNewTodoContent(e.target.value)
                    }}
                />
                <input
                    value={newTodoId}
                    type="number"
                    onChange={(e) => {
                        setNewTodoId(Number(e.target.value))
                    }}
                />
                <button
                    onClick={() => {
                        onAddTodo()
                    }}
                >
                    add
                </button>
            </div>
            <div>
                set as done
                <input
                    value={idOfTodoToSetAsDone}
                    type="number"
                    onChange={(e) => {
                        setIdOfTodoToSetAsDone(Number(e.target.value))
                    }}
                ></input>
                <button
                    onClick={() => {
                        onSetTodoAsDone()
                    }}
                >
                    set
                </button>
            </div>
            <div>
                set as not done
                <input
                    value={idOfTodoToSetAsNotDone}
                    type="number"
                    onChange={(e) => {
                        setIdOfTodoToSetAsNotDone(Number(e.target.value))
                    }}
                ></input>
                <button
                    onClick={() => {
                        onSetTodoAsNotDone()
                    }}
                >
                    set
                </button>
            </div>
            <div>
                delete
                <input
                    value={idOfTodoToDelete}
                    type="number"
                    onChange={(e) => {
                        setIdOfTodoToDelete(Number(e.target.value))
                    }}
                ></input>
                <button
                    onClick={() => {
                        onDeleteTodo()
                    }}
                >
                    del
                </button>
            </div>

            <div>
                done list
                <TodoList todos={todos} showDone={true} showNotDone={false} />
                not done list{" "}
                <TodoList todos={todos} showDone={false} showNotDone={true} />
            </div>
        </>
    )
}

export default App
