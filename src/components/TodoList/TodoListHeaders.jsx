import React from 'react'

export default function TodoListHeaders() {
  return (
    <tr className="table__row">
      <td className="table__col" />
      <td className="table__col">
        <p>Описание</p>
      </td>
      <td className="table__col">
        <p>Статус</p>
      </td>
      <td className="table__col">
        <p>Дата</p>
      </td>
    </tr>
  )
}
