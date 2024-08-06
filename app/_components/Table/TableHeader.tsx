interface HeaderProps {
  name: string
  id: string
}
export default function TableHeader({ headers }: { headers: HeaderProps[] }) {
  return (
    <tr className="text-[13px] lg:text-[20px] text-left">
      {headers.map((header, index) => (
        <th
          className=" px-2 border-gray-300  h-12"
          key={index}
        >
          {header.name}
        </th>
      ))}
    </tr>
  )
}
