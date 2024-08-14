import React from "react";
import { IBank } from "../../types/banksType";

interface IPropsBankBlock {
    bank: IBank
}

const BankBlock:React.FC<IPropsBankBlock> = ({bank}) => {
  return (
    <div onClick={() => console.log("open")} className="grid grid-cols-2 gap-2 p-2 h-fit bg-primary rounded-md shadow-xl">
        <p className="text-lg md:text-xl pt-5 ml-2 text-white">{bank.name}</p>
        <div className="h-20 bg-secondery">
          <p className="mt-6 text-center text-white">Logo</p>
        </div>
        <p className="col-span-2 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odit, at, asperiores accusantium temporibus amet non reiciendis officia illum vel et quas repudiandae porro sunt! Tempore tempora repellendus vitae consequuntur.
        </p>
    </div>
  )
}

export default BankBlock