export type TodoProps = {
    id: number
    content: string
    isDone: boolean
}

export const Todo: React.FC<TodoProps> = ({ id, content, isDone }) => {
    return (
        <>
            <h3>
                {content} ({id})
            </h3>
            <p>{isDone ? "Done" : "Not Done"}</p>
        </>
    )
}
