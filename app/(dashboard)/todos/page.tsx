import NewTodoForm from '@/components/NewTodoForm'
import db from '@/utils/db'

const getData = async () => {
  const todos = await db.todo
}

const TodosPage = () => {
  return (
    <div>
      <NewTodoForm></NewTodoForm>
      <h1>Todos</h1>
    </div>
  )
}

export default TodosPage
