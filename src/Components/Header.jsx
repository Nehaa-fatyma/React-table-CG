import React from "react";
import Table from "./Table";


const Header = () => {
    const stddata = [
        {name : "Ali" , id : 201 , rollnum : 10},
        {name : "Fatima" , id : 202 , rollnum : 11},
        {name : "Abbas" , id : 203 , rollnum : 12},
        {name : "Zehra" , id : 204 , rollnum : 13},
        {name : "Naqi" , id : 205 , rollnum : 14}
    ];

    return(
        <>
        <h1>STUDENT INFORMATION</h1>
        <Table stddata={stddata}/>
        </>
    )
}
export default Header;