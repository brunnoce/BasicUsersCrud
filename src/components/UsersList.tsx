import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"

import { useAppSelector } from "@/hooks/store" 
import { useUserActions } from "@/hooks/useUserActions"

export function UsersList() {

  const users = useAppSelector((state) => state.users)
  const { removeUser } = useUserActions()

  return (
    <Table className="bg-white shadow-md rounded-lg border border-gray-200">
      <TableHeader className="bg-gray-100">
        <TableRow>
          <TableHead className="w-[100px] text-center font-bold">ID</TableHead>
          <TableHead className="text-center font-bold">Nombre</TableHead>
          <TableHead className="text-center font-bold">Email</TableHead>
          <TableHead className="text-center font-bold">Acciones</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id} className="bg-white hover:bg-gray-50">
            <TableCell className="text-center font-medium italic">{user.id}</TableCell>
            <TableCell className="text-center">{user.name}</TableCell>
            <TableCell className="text-center">{user.email}</TableCell>
            <TableCell className="text-center flex justify-center gap-2">
              <button typeof="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                </svg>
              </button>
              <button onClick={() => removeUser(user.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-red-500 hover:text-red-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="bg-gray-100">
          <TableCell colSpan={3} className="text-right font-bold">Total de usuarios</TableCell>
          <TableCell className="text-center"><Badge>{users.length}</Badge></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}