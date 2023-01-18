import { Todo, TodoProps } from "./Todo"

type TodoListProps = {
    todos: TodoProps[]
    showDone: boolean
    showNotDone: boolean
}

export const TodoList: React.FC<TodoListProps> = ({
    todos,
    showDone = true,
    showNotDone = true
}) => {
    const todosToShow = showDone
        ? showNotDone
            ? todos
            : todos.filter((t) => t.isDone === true)
        : showNotDone
        ? todos.filter((t) => t.isDone === false)
        : []

    return (
        <>
            {todosToShow.map((t) => {
                return (
                    <Todo
                        key={t.id}
                        id={t.id}
                        content={t.content}
                        isDone={t.isDone}
                    />
                )
            })}
        </>
    )
}
