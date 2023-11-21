export const Avatar = ({ name }: { name: string }) => {
  const initialName = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 text-4xl font-bold text-gray-700">
      <span>{initialName}</span>
    </div>
  )
}
