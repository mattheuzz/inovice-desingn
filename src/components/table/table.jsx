import './table.css'

import { TableBody } from "./table-body"
import { TableHead } from "./table-head"

export const TableProducts = () =>{
    return(
        <table className="table">
        <TableHead />
        <TableBody />
      </table>
    )
}