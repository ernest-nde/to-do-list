export default function ListItem({itemData, deleteTodo}) {
  return (
    <li className="p-2 bg-zinc-200 mb-2 rounded flex">
      <span>{itemData.content}</span>
      <button onClick={() => deleteTodo(itemData)} className="ml-auto bg-red-600 w-6 h-6 rounded-full text-zinc-200">X</button>
    </li>
  )
}
