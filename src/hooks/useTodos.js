import { SORTING_TYPES, TODO_STATUSES } from '@/utils/constants'
import { useMemo } from 'react'

export const useSortTodos = (todoList, sortBy) => {
  const sortedTodos = useMemo(() => {
    if (sortBy === SORTING_TYPES.date) {
      return [...todoList].sort((todo1, todo2) => {
        return todo1.date > todo2.date ? -1 : 1
      })
    }

    if (sortBy === SORTING_TYPES.status) {
      return [...todoList].sort((todo) => {
        return todo?.completed ? 1 : -1
      })
    }

    return todoList
  }, [todoList, sortBy])

  return sortedTodos
}

export const useTodos = (todoList, sortBy, filterBy) => {
  const sortedTodos = useSortTodos(todoList, sortBy)

  const sortedAndFilteredTodos = useMemo(() => {
    return sortedTodos.filter((todo) => {
      const title = todo.title.toLowerCase()
      const id = todo.id.toString()
      const dateString = new Date(todo?.date).toLocaleDateString()

      const status = todo.completed
        ? TODO_STATUSES[0].toLowerCase()
        : TODO_STATUSES[1].toLowerCase()

      return [title, id, dateString, status].some((el) => el.includes(filterBy.toLowerCase()))
    })
  }, [sortedTodos, filterBy])

  return sortedAndFilteredTodos
}
